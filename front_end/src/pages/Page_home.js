
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
        <span
          className={` ${this.state.viewCompleted ? "completed-todo" : ""
            }`}
          title={item.description}
        >
          {item.title}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-primiry"
          >
            Edit
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-primiry"
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
      <main className="content">
        <h1 className="text-black text-uppercase text-center my-4">Task Manager</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add task
                    </button>
              </div>
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.resgiter ? (
          <div
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default Home;

