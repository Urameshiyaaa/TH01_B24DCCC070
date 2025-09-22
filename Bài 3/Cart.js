const Cart = (props) => {
    return(
        <div>
            <h3>Giỏ hàng</h3>
            {props.cart.length === 0 ? (
                <p>Giỏ hàng trống</p>
            ) : (
                <ul>
                    {props.cart.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                    <p>Tổng tiền: {props.total}đ</p>
                </ul>
            )}
        </div>
    )
}
export default Cart;
