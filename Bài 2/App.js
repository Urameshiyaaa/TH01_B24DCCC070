import Box from "./Box";
import Button from "./Button";
import { useState } from "react";

const App = () => {
    const [color, setColor] = useState("white");
    return (
    <div>
        <Button 
        color={color} 
        listColors={["red", "green", "yellow"]}
        setColor={setColor}/>
        <Box 
        style={{backgroundColor: color}}/>
    </div>
    );
}
export default App;
