import { createSlice } from '@reduxjs/toolkit'

export const workoutsSlice = createSlice ({
    name: 'wokouts',
    initialState: {
        selectedCategory: 'YOGA'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    }
})

export const { filterCategory } = workoutsSlice.actions;
export const getSelectedCategory = state => state.workouts.selectedCategory;
export default workoutsSlice.reducer;