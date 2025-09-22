const Product = (props) => {
    return(
        <div>
            <h3>Sản phẩm</h3>
            {props.products.map((product, index) => (
                <div key={index}>
                    {product.name} <button onClick={() => props.addCart(product)}>Thêm vào giỏ</button>
                </div>
            ))}
        </div>
    )
}
export default Product;