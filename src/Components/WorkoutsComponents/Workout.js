import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Workout =({workout}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    return(<div>
        <img src={`./${workout.img}.jpg`} alt="workout"/>
       <h2> {workout.name} </h2>
       <p>$ {workout.price}</p>
       <ChangeQuantity quantity={quantity} setQuantity = {setQuantity} />
       <button onClick = {() => {dispatch(addItemToCart({workout, quantity}))}}>ADD TO CART</button>

    </div>)
}

export default Workout;