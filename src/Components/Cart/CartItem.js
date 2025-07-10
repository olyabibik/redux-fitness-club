import { useDispatch } from "react-redux";
import dataWorkouts from "../../data/dataWorkouts";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
    const workouts = dataWorkouts.find(item => item.id === cartItem.workoutId);
    const dispatch = useDispatch();
    return (<div>
        <p>{workouts.name}</p>
        <p>{cartItem.quantity} class(es) </p>
        <p>Price: $ {workouts.price * cartItem.quantity}</p>
        <span onClick ={() => dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
        <img className="deleteIcon" src="https://img.icons8.com/?size=100&id=QFAMAEC2jXs6&format=png&color=000000" />
        </span>
    </div>)
}

export default CartItem;