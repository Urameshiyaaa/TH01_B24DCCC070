const AddButton = (props) =>{
    return(
        <button
        style={{backgroundColor:"silver", padding:"2px", paddingRight:"3px", border:"1px solid black"}}
        onClick={()=>{
            const taskInput = document.getElementById("taskInput");
            const task = taskInput.value;
            if (task === "") return;
            if (task.trim()){
                props.setToDoList([...props.task, task]);
                taskInput.value = "";
            }
        }}
        >Thêm</button>
    )
}

export default AddButton;