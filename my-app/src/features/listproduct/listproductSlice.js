import { createSlice } from '@reduxjs/toolkit';
// import defaultPath from '../../assets/photos/kagome.jpg';
// const defaultPath = '../../assets/photos/kagome.jpg';

export const listproductSlice = createSlice({
  name: 'listproduct',
  initialState: {
    inCartQuantity: 0,
    categories: [
      {categoriesID: 1, categoriesName: 'Men\'s Fashion'},
      {categoriesID: 2, categoriesName: 'Women\'s Fashion'},
      {categoriesID: 3, categoriesName: 'Couple\'s Fashion'}
    ], 
    subcategories: [
      {subcategoriesID: 1, subcategoriesName: 'Men\'s Shirt', categoriesID: 1},
      {subcategoriesID: 2, subcategoriesName: 'Men\'s T-Shirt', categoriesID: 1},
      {subcategoriesID: 3, subcategoriesName: 'Men\'s Jackets', categoriesID: 1},
      {subcategoriesID: 4, subcategoriesName: 'Men\'s Vest', categoriesID: 1},
      {subcategoriesID: 5, subcategoriesName: 'Men\'s Short', categoriesID: 1},
      {subcategoriesID: 6, subcategoriesName: 'Men\'s Jeans', categoriesID: 1},

      {subcategoriesID: 7, subcategoriesName: 'Women\'s Shirt', categoriesID: 2},
      {subcategoriesID: 8, subcategoriesName: 'Women\'s T-Shirt', categoriesID: 2},
      {subcategoriesID: 9, subcategoriesName: 'Women\'s Jackets', categoriesID: 2},
      {subcategoriesID: 10, subcategoriesName: 'Aodai', categoriesID: 2},
      {subcategoriesID: 11, subcategoriesName: 'Women\'s Short', categoriesID: 2},
      {subcategoriesID: 12, subcategoriesName: 'Skirt', categoriesID: 2},

      {subcategoriesID: 13, subcategoriesName: 'Couple T-Shirt', categoriesID: 3},
      {subcategoriesID: 14, subcategoriesName: 'Couple Jackets', categoriesID: 3},
      {subcategoriesID: 14, subcategoriesName: 'Couple Hat', categoriesID: 3}
    ],
    product: [
      {productID: 1, productName: 'Men\'s Shirt 1', price: 100, discount: 1, status: 'Available', rate: 2, description: 'Description default 1', imagePath: '', subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 2, productName: 'Men\'s Shirt 2', price: 99, discount: 10, status: 'Out of stock', rate: 3, description: 'Description default 2', imagePath: '', subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 3, productName: 'Men\'s Shirt 3', price: 200, discount: 15, status: 'Available', rate: 4.5, description: 'Description default 3', imagePath: '', subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 4, productName: 'Men\'s T-Shirt 1', price: 990, discount: 10, status: 'Available', rate: 5, description: 'Description default 4', imagePath: '', subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 5, productName: 'Men\'s T-Shirt 2', price: 55, discount: 10, status: 'Available', rate: 2, description: 'Description default', imagePath: '', subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 6, productName: 'Men\'s T-Shirt 3', price: 232, discount: 15, status: 'Available', rate: 5, description: 'Description default', imagePath: '', subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 7, productName: 'Men\'s Jackets 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 8, productName: 'Men\'s Jackets 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 9, productName: 'Men\'s Jackets 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 10, productName: 'Men\'s Jackets 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 11, productName: 'Men\'s Jackets 5', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 12, productName: 'Men\'s Vest 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 4 , inCart: false, numberInCart: 0},
      {productID: 13, productName: 'Men\'s Short 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 5, inCart: false, numberInCart: 0},
      {productID: 14, productName: 'Men\'s Short 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 5, inCart: false, numberInCart: 0},
      {productID: 15, productName: 'Men\'s Jeans 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 6, inCart: false, numberInCart: 0},
      {productID: 16, productName: 'Men\'s Jeans 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 6, inCart: false, numberInCart: 0},
      {productID: 17, productName: 'Men\'s Jeans 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 6, inCart: false, numberInCart: 0},
      {productID: 18, productName: 'Men\'s Jeans 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 6, inCart: false, numberInCart: 0},

      {productID: 19, productName: 'Women\'s Shirt 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 7, inCart: false, numberInCart: 0},
      {productID: 20, productName: 'Women\'s Shirt 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 7, inCart: false, numberInCart: 0},
      {productID: 21, productName: 'Women\'s Shirt 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 7, inCart: false, numberInCart: 0},
      {productID: 22, productName: 'Women\'s Shirt 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 7, inCart: false, numberInCart: 0},
      {productID: 23, productName: 'Women\'s Shirt 5', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 7, inCart: false, numberInCart: 0},
      {productID: 24, productName: 'Women\'s Shirt 6', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 7, inCart: false, numberInCart: 0},
      {productID: 25, productName: 'Women\'s T-Shirt 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 8, inCart: false, numberInCart: 0},
      {productID: 26, productName: 'Women\'s T-Shirt 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 8, inCart: false, numberInCart: 0},
      {productID: 27, productName: 'Women\'s T-Shirt 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 8, inCart: false, numberInCart: 0},
      {productID: 28, productName: 'Women\'s T-Shirt 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 8, inCart: false, numberInCart: 0},
      {productID: 29, productName: 'Women\'s T-Shirt 5', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 8, inCart: false, numberInCart: 0},
      {productID: 30, productName: 'Women\'s T-Shirt 6', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 8, inCart: false, numberInCart: 0},
      {productID: 31, productName: 'Women\'s Jackets 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 9, inCart: false, numberInCart: 0},
      {productID: 32, productName: 'Women\'s Jackets 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 9, inCart: false, numberInCart: 0},
      {productID: 33, productName: 'Aodai 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 10, inCart: false, numberInCart: 0},
      {productID: 34, productName: 'Aodai 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 10, inCart: false, numberInCart: 0},
      {productID: 35, productName: 'Aodai 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 10, inCart: false, numberInCart: 0},
      {productID: 36, productName: 'Women\'s Short 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 11, inCart: false, numberInCart: 0},
      {productID: 37, productName: 'Women\'s Short 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 11, inCart: false, numberInCart: 0},
      {productID: 38, productName: 'Women\'s Short 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 11, inCart: false, numberInCart: 0},
      {productID: 39, productName: 'Women\'s Short 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 11, inCart: false, numberInCart: 0},
      {productID: 40, productName: 'Women\'s Short 5', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 11, inCart: false, numberInCart: 0},
      {productID: 41, productName: 'Women\'s Short 6', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 11, inCart: false, numberInCart: 0},
      {productID: 42, productName: 'Skirt 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 12, inCart: false, numberInCart: 0},
      {productID: 43, productName: 'Skirt 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 12, inCart: false, numberInCart: 0},
      {productID: 44, productName: 'Skirt 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 12, inCart: false, numberInCart: 0},
      {productID: 45, productName: 'Skirt 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 12, inCart: false, numberInCart: 0},
      {productID: 46, productName: 'Skirt 5', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 12, inCart: false, numberInCart: 0},
      {productID: 47, productName: 'Skirt 6', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 12, inCart: false, numberInCart: 0},

      {productID: 48, productName: 'Couple T-Shirt 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 13, inCart: false, numberInCart: 0},
      {productID: 49, productName: 'Couple T-Shirt 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 13, inCart: false, numberInCart: 0},
      {productID: 50, productName: 'Couple T-Shirt 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 13, inCart: false, numberInCart: 0},
      {productID: 51, productName: 'Couple Jackets 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 14, inCart: false, numberInCart: 0},
      {productID: 52, productName: 'Couple Jackets 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 14, inCart: false, numberInCart: 0},
      {productID: 53, productName: 'Couple Jackets 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 14, inCart: false, numberInCart: 0},
      {productID: 54, productName: 'Couple Jackets 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 14, inCart: false, numberInCart: 0},
      {productID: 55, productName: 'Couple Hat 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 15, inCart: false, numberInCart: 0},
      {productID: 56, productName: 'Couple Hat 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 15, inCart: false, numberInCart: 0}
    ],
  },
  reducers: {
    doNothing: state => {
      state.inCartQuantity= 1;
    },
    addToCart: (state, action) => {
      // state.listproduct.product[index].inCart = true;
      // console.log(state.product[index].productName);
      // console.log(state.categories);
      // alert("Add " + state.product[index] + " successfully!");
      // state.test += 2;
      if (state.product[action.payload].inCart === true) {
        state.product[action.payload].numberInCart++;
        alert("You had this in your cart! (Quantity: " + state.product[action.payload].numberInCart + ").");
      } else {
        alert("Add " + state.product[action.payload].productName + " to cart succesfully!");
        state.inCartQuantity++;
        state.product[action.payload].inCart = true;
        state.product[action.payload].numberInCart = 1;
      }
    }
  },
});

export const { doNothing, addToCart } = listproductSlice.actions;

export const listCategoriesAvailable = state => state.listproduct.categories;
export const listSubCategoriesAvailable = state => state.listproduct.subcategories;
export const listProductAvailable = state => state.listproduct.product;
export const forTest = state => state.listproduct.inCartQuantity;

export default listproductSlice.reducer;