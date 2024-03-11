import axios from "axios";
import { useState, useEffect } from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
 function CardRoom() {
    const [data, setData] = useState([]);
    const isConfirmed =  false;
    const refreshList = () => {
      axios
        .get("http://localhost:8000/api/rooms/")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {
      refreshList();
    }, []);
    return (
        
      <Card className=" w-full mx-auto">
          {data.map((item) => (
        <CardBody className="m-3 flex">
            <img
            src={item.roomimage}
            className="h-30 w-1/3 rounded-lg object-cover object-center"
            />
            <div className="m-3">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                {item.roomname}
            </Typography>
            <Typography>
                {item.descriptions}
            </Typography>
            <Typography className=" text-right mb-3">
                $ {item.price}
            </Typography>
            <div className="flex justify-end">
                <Button className=" bg-black">See availability</Button>
            </div>
            
            </div>
         
        </CardBody>
        ))}
          
      </Card>
       
    );
  } export default CardRoom;