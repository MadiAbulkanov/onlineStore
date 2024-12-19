import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProd } from '../../interfaces/IProducts.interface';
// import { ProductCardProps } from '../../interfaces/IProducts.interface';

interface basketSlice {
    basket: IProd[];
}

const initialState: basketSlice = {
    basket: []
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket(state, action: PayloadAction<IProd>) {
            const existingProduct = state.basket.find(product => product.id === action.payload.id);

            if(existingProduct) {
                existingProduct.quant = action.payload.quant;
            } else {
                state.basket.push(action.payload);
            }
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
