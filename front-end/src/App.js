import React from "react";
import ListGroups from "./components/ListGroups";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure Router is used here
import './App.css';
import Header from "./components/Header";

const App = () => {
  return (

    <Router> {/* Wrap the entire app inside Router */}
      <div>
      <Header />
        {/* Add Sidebar and Main Content together */}
        {/* <Sidebar /> */}
        <ListGroups />
      </div>
    </Router>
  );
};

export default App;
