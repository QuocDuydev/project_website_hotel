import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RoomProvider from './context/RoomContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoomProvider>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </RoomProvider>
  
);

