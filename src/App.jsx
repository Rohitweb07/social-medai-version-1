import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Siderbar";
import CreatePost from "./components/CreatePost";

import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  const onBtnclick = (tabName) => {
    setselectedTab(tabName);
  };

  return (
    <>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} onBtnclick={onBtnclick}></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;