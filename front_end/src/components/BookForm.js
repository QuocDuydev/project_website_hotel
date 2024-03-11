import React from 'react';
//components
import AdultsDropdown from '../components/AdultsDropdown'
import KidsDropdown from '../components/KidsDropdown'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import { Button } from '@material-tailwind/react';
const BookForm = () => {
  const {handleClick}=useContext(RoomContext)
  return (
    <>
    <div className=' bg-black'>
    <form className='h-[300px] bg-red-500 w-full lg:h-[70px]'>
      <div className='flex flex-col w-full h-full lg:flex-row '>
        <div className='flex-1 border-r'>
          <CheckIn/>
        </div>
        <div className='flex-1 border-r'>
          <CheckOut/>
        </div>
        <div className='flex-1 border-r'>
          <AdultsDropdown/>
        </div>
        <div className='flex-1 border-r'>
          <KidsDropdown/>
        </div> 
      
      <Button  onClick={(e)=>handleClick(e)}
      type='submit'> Check Now</Button>

      </div>
      {/*btn*/}
      
    </form>
    </div>
    
    </>
  )
};

export default BookForm;
