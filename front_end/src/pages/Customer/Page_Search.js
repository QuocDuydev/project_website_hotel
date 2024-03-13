import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { Navbars } from "../../components/Navbar";
import CardHotel from "../../components/Card_Hotel";
import CardDefault from "../../components/Card";
import Filters from "../../components/Filter";
import Footer from "../../components/Footer";
import SearchBox from "../../components/SearchBox";

function ListSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch hotels data here
    axios.get("http://localhost:8000/api/hotels/")
      .then((res) => {
        setHotels(res.data);
      })
      .catch((error) => {
        console.error("Error fetching hotels:", error);
      });
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  // Filter hotels based on search term
  const filteredHotels = hotels.filter((hotel) =>
    hotel.hotelname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbars />
      <main className="content">
        <div className='container mx-auto'>
          <form className="max-w-lg mx-auto">
            {/* ... Your dropdown and input code ... */}
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Search hotels..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            {/* ... Your submit button ... */}
          </form>
          <div className="grid grid-cols-4">
            <div className="grid gap-4 relative  col-span-1">
              <Filters />
            </div>
            <div className="grid gap-4 relative col-span-3  m-4">
              {/* Use filteredHotels instead of CardHotel */}
              {filteredHotels.map((hotel) => (
                <CardHotel key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mt-[40px] text-2xl font-bold"> Similar Hotel List</h3>
          </div>

          <CardDefault />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default ListSearch;
