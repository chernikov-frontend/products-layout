const ShopItem = ({ name, price, color, img }) => {
    return (
        <div className="shop-item">
            <img src={img} alt={name} />
            <div className="shop-item-info">
            <h3>{name}</h3>
            <p>{color}</p>
            </div>
            <p className="price">${price}</p>
            <button className="add-to-cart">ADD TO CART</button>
        </div>
    );
};

export default ShopItem;
