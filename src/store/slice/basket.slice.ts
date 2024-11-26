import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductCardProps } from '../../interfaces/IProducts.interface';

interface basketSlice {
    basket: ProductCardProps[];
}

const initialState: basketSlice = {
    basket: []
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket(state, action: PayloadAction<ProductCardProps>) {
            state.basket.push(action.payload);
        },
        removeFromBasket(state, action: PayloadAction<number>) {
            state.basket = state.basket.filter(item => item.id !== action.payload);
        },
        removeFromAllBasket(state) {
            state.basket = [];
        },
    },
});

export const { addToBasket, removeFromBasket, removeFromAllBasket } = basketSlice.actions;
export default basketSlice.reducer;
