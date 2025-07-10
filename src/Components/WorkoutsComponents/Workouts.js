import { useSelector } from "react-redux";
import dataWorkouts from "../../data/dataWorkouts";
import Workout from "./Workout";
import { getSelectedCategory } from "../../redux/workoutsSlice";


const Workouts = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(<div>
        {dataWorkouts
        .filter(workout => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === workout.category;
        })
        .map(workout => <Workout workout={workout} />)}
        </div>)
}

export default Workouts;
