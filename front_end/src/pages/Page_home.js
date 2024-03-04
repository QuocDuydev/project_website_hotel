
// const Home = () => {
//   return (
//     <>
//     {/* <HeroSlider/> */}
//     <div className='container mx-auto relative'>
//       <div className=' bg-neutral-600 mt-4 p-4 
//       lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12'>
//         <BookForm/>
//       </div>
//       <Rooms/>
//     </div>
       
//     </>
//   )
// };

// export default Home;
import React, { Component } from "react";
import axios from 'axios'; 
import { Navbars } from "../components/Navbar";
import BookForm from "../components/BookForm";
import Rooms from "../components/Rooms";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer"
import GridGallery from "../components/Grid-Galery"
import CardDefault from "../components/Card"
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        username: "",
        namne: "",
        email: "",
        password: "",
        joined: "",
        
      },
      taskList: []
    };
  }

  // Add componentDidMount()
  componentDidMount() {
    this.refreshList();
  }
 
  refreshList = () => {
    axios   //Axios to send and receive HTTP requests
      .get("http://localhost:8000/api/tasks/")
      .then(res => this.setState({ taskList: res.data }))
      .catch(err => console.log(err));
  };

  // Main variable to render items on the screen
  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.taskList.filter(
      item => item.completed === viewCompleted
    );
    return newItems.map(item => (
      <li
        key={item.id}
        className=""
      >
        <span>
          {item.username}
          {item.password}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className=' bg-red-500'
          >
            Edit
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="bg-blue-500"
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };
  // ///////////////////////////////////////////////////////////

  ////add this after modal creation
  toggle = () => {//add this after modal creation
    this.setState({ resgiter: !this.state.resgiter });//add this after modal creation
  };
  // handleSubmit = item => {//add this after modal creation
  //   this.toggle();//add this after modal creation
  //   alert("save" + JSON.stringify(item));//add this after modal creation
  // };

  // Submit an item
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      // if old post to edit and submit
      axios
        .put(`http://localhost:8000/api/tasks/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    // if new post to submit
    axios
      .post("http://localhost:8000/api/tasks/", item)
      .then(res => this.refreshList());
  };

  // Delete item
  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/tasks/${item.id}/`)
      .then(res => this.refreshList());
  };
  // handleDelete = item => {//add this after modal creation
  //   alert("delete" + JSON.stringify(item));//add this after modal creation
  // };

  // Create item
  createItem = () => {
    const item = { username: "", name: "", email:"", password:"", joined:"" };
    this.setState({ activeItem: item, resgiter: !this.state.resgiter });
  };

  //Edit item
  editItem = item => {
    this.setState({ activeItem: item, resgiter: !this.state.resgiter });
  };


  // -I- Start by visual effects to viewer
  render() {
    return (
      <><main className="content m-5">
        
      
        {/* <Header/> */}
                <Navbars/>
                {/* <CarouselCustomArrows/> */}
                {/* <PopoverUser/> */}
                <HeroSlider/>
                
                <div className='container mx-auto relative'>
              <div className=' bg-neutral-600 mt-4 p-4 
             lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12'>
        {/* <BookForm/> */}
      </div>
      <CardDefault/>
       <Rooms/>
       <GridGallery/>
       <Footer/>
     </div>
      </main></>
       
      
    );
  }
}
export default Home;

