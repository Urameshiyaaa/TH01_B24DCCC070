const ToDoList = (props) =>{
    return(
        <div>
            <ul>{props.taskList.map((t, index)=>{
                return (<div>
                    <li key={index}>{t}<button 
                    onClick={() => {props.setToDoList(props.taskList.filter((_, i) => i !== index));}}
                    >Xóa</button></li>
                    </div>)
            })}
            </ul>
        </div>
    )
}
export default ToDoList;