
const Button = (props) =>{
    return (<div>    
        {props.listColors.map((color) => (
            <button onClick={()=>
            {if (color === "red"){
                props.setColor("red")
                return;
            }
            if (color === "green"){
                props.setColor("green")
                return
            }
            if (color === "blue"){
                props.setColor("blue")
                return;
            }
            if (color === "yellow"){
                props.setColor("yellow")
                return;
            }
            }}
            style={{backgroundColor: "gray", padding: '10px'}}>{color}
            </button>
        ))}
    </div>);
}
export default Button;  