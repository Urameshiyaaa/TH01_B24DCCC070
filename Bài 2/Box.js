const Box = (props) => {
    return (<div
    style={{
        width: '100px',
        height: '100px',
        border: '1px solid black',
        ...props.style
    }}>
    </div>)
}
export default Box;