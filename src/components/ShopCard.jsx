const ShopCard = ({ name, price, color, img }) => {
    return (
        <div className="shop-card">
            <h3>{name}</h3>
            <p>{color}</p>
            <img src={img} alt={name} />
            <p className="price">${price}</p>
            <button className="add-to-cart">ADD TO CART</button>
        </div>
        );
    };

export default ShopCard;
