import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(<div>
        <img className="cartIcon" src="https://img.icons8.com/?size=100&id=bec1FJECyy5N&format=png&color=000000" alt="cartIcon" />
        <h3>TOTAL: $ { totalPrice }</h3>
       {cartItems.map (cartItem => <CartItem cartItem = {cartItem} /> )}
        
    </div>)
}

export default Cart;