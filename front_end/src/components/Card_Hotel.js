import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    Rating
  } from "@material-tailwind/react";
 function CardHotel() {
    const [data, setData] = useState([]);
    const isConfirmed =  false;
    const refreshList = () => {
      axios
        .get("http://localhost:8000/api/hotels/")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };
   
    useEffect(() => {
      refreshList();
    
    }, []);
    return (
      <div  >
        {data.map((item) => (
          <Card className=" w-full mx-auto mb-2 border-2">
            
            <CardBody className="m-3 flex">
             
                <img
                  src={item.hotelimage}
                  className="h-30 w-1/3 rounded-lg object-cover object-center"
                  />
             
              <div className="m-3">
                    <Typography variant="h5" color="blue-gray" className="mb-2 text-blue-800">
                    {item.hotelname} - {item.location}
                </Typography>
                <Typography className=" text-justify">
                    {item.descriptions.slice(0,100)}
                </Typography>
                <Typography className=" text-right mb-3 text-xl font-bold">
                     <Rating value={item.rating} unratedColor="red" ratedColor="red" readonly className="" />
                </Typography>
        <div className="group inline-flex flex-wrap items-center gap-4  -mt-5 ">
         
          <Tooltip content="Free wifi">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Tooltip>
          <Tooltip content="2 bedrooms">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </span>
          </Tooltip>
          <Tooltip content={`65" HDTV`}>
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M19.5 6h-15v9h15V6z" />
                <path
                  fillRule="evenodd"
                  d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Tooltip>
          <Tooltip content="Fire alert">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                  clipRule="evenodd"
                />
                
              </svg>
            </span>
          </Tooltip>
          <Tooltip content="Size 40m2">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M6.59,20.996l-3.293,3.293c-0.391,0.39 -0.391,1.023 -0,1.414l3,3c0.391,0.391 1.024,0.391 1.414,0l3.293,-3.293l0.586,0.586c0.572,0.572 1.432,0.743 2.179,0.433c0.748,-0.309 1.235,-1.038 1.235,-1.847c0,-1.829 0,-4.247 0,-5.586c0,-0.531 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.883,-0.586 -1.414,-0.586c-1.339,-0 -3.757,-0 -5.586,-0c-0.809,-0 -1.538,0.487 -1.847,1.235c-0.31,0.747 -0.139,1.607 0.433,2.179l0.586,0.586Zm14.406,4.414l3.293,3.293c0.39,0.391 1.023,0.391 1.414,0l3,-3c0.391,-0.391 0.391,-1.024 0,-1.414l-3.304,-3.304l0.573,-0.568c0.576,-0.571 0.751,-1.432 0.443,-2.182c-0.309,-0.75 -1.039,-1.239 -1.85,-1.239l-5.569,-0c-0.531,-0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.883 -0.586,1.414c-0,1.339 -0,3.757 -0,5.586c-0,0.809 0.487,1.538 1.235,1.847c0.747,0.31 1.607,0.139 2.179,-0.433l0.586,-0.586Zm2.422,-3.578c-0.058,-0.038 -0.112,-0.082 -0.162,-0.132c-0.388,-0.393 -0.385,-1.026 0.007,-1.415c-0,0 0.622,-0.615 1.302,-1.289c0,-0 -5.569,-0 -5.569,-0c-0,-0 -0,5.586 -0,5.586l1.293,-1.293c0.319,-0.319 0.801,-0.378 1.179,-0.175c0.069,0.031 0.143,0.084 0.224,0.164c0.004,0.003 0.007,0.007 0.011,0.011c0,-0 3.293,3.293 3.293,3.293c-0,-0 1.586,-1.586 1.586,-1.586l-3.164,-3.164Zm-13.121,1.457c0.39,-0.39 1.024,-0.39 1.414,-0c0,-0 1.293,1.293 1.293,1.293c0,-0 0,-5.586 0,-5.586c0,-0 -5.586,-0 -5.586,-0l1.293,1.293c0.39,0.39 0.39,1.024 0,1.414c0,0 -3.293,3.293 -3.293,3.293c0,-0 1.586,1.586 1.586,1.586l3.293,-3.293Zm-3.651,-12.229l-0.586,0.586c-0.572,0.572 -0.743,1.432 -0.433,2.18c0.309,0.747 1.039,1.234 1.847,1.234c1.829,0 4.247,0 5.586,0c0.531,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.883 0.586,-1.414c0,-1.339 0,-3.757 0,-5.586c0,-0.808 -0.487,-1.538 -1.234,-1.847c-0.748,-0.31 -1.608,-0.139 -2.18,0.433l-0.586,0.586l-3.293,-3.293c-0.39,-0.39 -1.023,-0.39 -1.414,0l-3,3c-0.39,0.391 -0.39,1.024 0,1.414l3.293,3.293Zm14.358,-4.478l-0.586,-0.586c-0.572,-0.572 -1.432,-0.743 -2.179,-0.434c-0.748,0.31 -1.235,1.039 -1.235,1.848c0,1.829 0,4.247 0,5.586c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c1.339,-0 3.757,-0 5.586,-0c0.809,-0 1.538,-0.487 1.848,-1.235c0.309,-0.747 0.138,-1.607 -0.434,-2.179l-0.586,-0.586l3.293,-3.293c0.391,-0.391 0.391,-1.024 0,-1.414l-3,-3c-0.39,-0.391 -1.023,-0.391 -1.414,-0l-3.293,3.293Zm-10.651,2.185l0,0c0,0 -3.293,-3.293 -3.293,-3.293c0,0 -1.586,1.586 -1.586,1.586l3.293,3.293c0.391,0.39 0.391,1.024 0,1.414c0,0 -1.267,1.233 -1.267,1.233c0,0 5.5,0 5.5,0c0,0 0,-5.5 0,-5.5l-1.233,1.267c-0.39,0.391 -1.024,0.391 -1.414,0Zm12.926,1.54c0.006,-0.006 0.012,-0.012 0.018,-0.018c-0,-0 3.293,-3.293 3.293,-3.293c-0,-0 -1.586,-1.586 -1.586,-1.586l-3.293,3.293c-0.39,0.39 -1.024,0.39 -1.414,0c-0,0 -1.293,-1.293 -1.293,-1.293c0,0 0,5.586 0,5.586c0,-0 5.586,-0 5.586,-0l-1.293,-1.293c-0.384,-0.384 -0.39,-1.004 -0.018,-1.396Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
       
          </Tooltip>
    
        </div>
                <div className="flex justify-between items-center mt-3">
                <span className="mx-auto px-2 py-2 text-center text-lg leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">{item.totalroom} - rooms</span>
                    <Link to={`/hotel/${item.id}`} ><Button className=" bg-black">See availability</Button></Link>
                    
               
                </div>
                
                </div>
            
            </CardBody>
          
              
          </Card>
      ))}
    </div>
      
       
    );
  } export default CardHotel;