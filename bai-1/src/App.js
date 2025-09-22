import React from "react";
import { useState } from "react";
import './AddButton.js'
import AddButton from "./AddButton.js";
import ToDoList from "./To-do_List.js";

const App = () =>{
    const [taskList, setToDoList] = useState([]);
    return (
        <div>
            <input type="text" id="taskInput" placeholder="Nhập công việc"></input>
            <AddButton task={taskList} setToDoList={setToDoList}/>
            <ToDoList taskList={taskList} setToDoList={setToDoList}/>
        </div>
    )
}
export default App;