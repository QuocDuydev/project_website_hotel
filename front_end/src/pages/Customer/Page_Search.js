import React, { useState, useEffect } from "react";
import { Navbars } from "../../components/Customer/Layout/Navbar";
import Footer from "../../components/Customer/Layout/Footer";
import { useAccessToken } from "../../components/ultiti";
import { getHotel } from "../../api/hotel_API";
import Filters from "../../components/Customer/Filter";
import ListHotel from "../../components/Customer/List_Hotel";
import ButtonSearch from "../../components/Customer/Button_Search";

function ListSearch() {
  const token = useAccessToken();
  const [searchTerm, setSearchTerm] = useState('');
  const [hotels, setHotels] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedTotalRoomsMin, setSelectedTotalRoomsMin] = useState('');
  const [selectedTotalRoomsMax, setSelectedTotalRoomsMax] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const isTotalRoomsInRange = (totalRooms, min, max) => {
    if (min === '' && max === '') {
      return true;
    }

    const minRange = parseInt(min) || 0;
    const maxRange = parseInt(max) || Infinity;

    return totalRooms >= minRange && totalRooms <= maxRange;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {

        const hotelData = await getHotel(token);
        hotelData.sort((a, b) => b.rating - a.rating);
        setHotels(hotelData);
        window.scrollTo(0, 0);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

  }, [token]);

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const handleLocationFilter = (location) => {
    setSelectedLocation((prevLocation) => (prevLocation === location ? '' : location));
  };

  const handleTotalRoomsFilter = (totalRooms) => {
    const [min, max] = totalRooms.split('-');

    // Convert min and max to integers
    const minRange = parseInt(min) || 0;
    const maxRange = parseInt(max) || Infinity;

    if (
      minRange === parseInt(selectedTotalRoomsMin) &&
      maxRange === parseInt(selectedTotalRoomsMax)
    ) {
      // If the selected range is being toggled, reset to default values
      setSelectedTotalRoomsMin('');
      setSelectedTotalRoomsMax('');
    } else {
      // Set the selected range values
      setSelectedTotalRoomsMin(minRange.toString());
      setSelectedTotalRoomsMax(maxRange.toString());
    }
  };


  const handleRatingFilter = (rating) => {
    setSelectedRating((prevRating) => (prevRating === rating ? '' : rating));
  };

  const filteredHotels = hotels.filter((hotel) => {
    const searchTermWithoutAccents = removeAccents(searchTerm.toLowerCase());
    const hotelNameWithoutAccents = removeAccents(hotel.hotelname.toLowerCase());
    const locationWithoutAccents = removeAccents(hotel.location.toLowerCase());

    const matchesSearchTerm = hotelNameWithoutAccents.includes(searchTermWithoutAccents) ||
      locationWithoutAccents.includes(searchTermWithoutAccents);

    const matchesLocation = selectedLocation ? locationWithoutAccents === removeAccents(selectedLocation.toLowerCase()) : true;

    const matchesTotalRooms = isTotalRoomsInRange(hotel.totalroom, selectedTotalRoomsMin, selectedTotalRoomsMax);
    const matchesRating = selectedRating ? hotel.rating.toString() === selectedRating : true;

    return matchesSearchTerm && matchesLocation && matchesTotalRooms && matchesRating;
  });



  return (
    <>
      <Navbars />
      <main className="content">
        <div className='container mx-auto'>
          <ButtonSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="grid grid-cols-4">
            <Filters handleLocationFilter={handleLocationFilter} handleRatingFilter={handleRatingFilter} handleTotalRoomsFilter={handleTotalRoomsFilter} />
            <div className="grid gap-4 relative col-span-5 m-4 md:col-span-5 lg:col-span-3">
              <ListHotel filteredHotels={filteredHotels} />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default ListSearch;
