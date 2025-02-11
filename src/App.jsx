import React, { useState }  from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import "./App.css";
import PostsList from "./Components/PostsList";
import CreatePost from "./Components/CreatePost";
import PostListProvider from "../Store/Post-list-Store";


function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  
  return (
    <PostListProvider>
    <div className="app-container">
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
      <div className="content-container">
      <Header></Header>{selectedTab === "Home" ? (<PostsList></PostsList>):
     (<CreatePost></CreatePost>)}
      <Footer></Footer>
      </div>
     </div>
     </PostListProvider>
  );
};

export default App;
