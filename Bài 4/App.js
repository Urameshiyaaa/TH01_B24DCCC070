import React from "react";
import { useState } from "react";
import Post from "./Post";

const App = () =>{
    return(
        <div>
            <Post text="Học ReactJS có khó không?" />
            <Post text="Props và State là gì?" />
            <Post text="Lập trình web có vui không?" />
        </div>
    );
}
export default App;

