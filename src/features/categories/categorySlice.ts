import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface Category {
    id: string;
    name: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: null | string;
    description: null | string;
}

const category: Category = {
    id: '1',
    name: 'Category 1',
    is_active: true,
    created_at: '2021-01-01 00:00:00',
    updated_at: '2021-01-01 00:00:00',
    deleted_at: null,
    description: null,
}

export const initialState =
    [
        category,
        {...category, id: '2', name: 'Category 2'},
        {...category, id: '3', name: 'Category 3'}
    ]


const categoriesSlice = createSlice({
    name: 'categories',
    initialState: initialState,
    reducers: {
        createCategory(state, action) {
        },
        updateCategory(state, action) {
        },
        deleteCategory(state, action) {
        },
    }
});

export const selectCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;