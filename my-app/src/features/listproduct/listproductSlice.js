import { createSlice } from '@reduxjs/toolkit';

export const listproductSlice = createSlice({
  name: 'listproduct',
  initialState: {
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
      {productID: 1, productName: 'Men\'s Shirt 1', price: 100, discount: 1, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 1},
      {productID: 1, productName: 'Men\'s Shirt 2', price: 99, discount: 10, status: 'Out of stock', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 1},
      {productID: 1, productName: 'Men\'s Shirt 3', price: 200, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 1},
      {productID: 1, productName: 'Men\'s T-Shirt 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 2},
      {productID: 1, productName: 'Men\'s T-Shirt 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 2},
      {productID: 1, productName: 'Men\'s T-Shirt 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 2},
      {productID: 1, productName: 'Men\'s Jackets 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 3},
      {productID: 1, productName: 'Men\'s Jackets 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 3},
      {productID: 1, productName: 'Men\'s Jackets 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 3},
      {productID: 1, productName: 'Men\'s Jackets 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 3},
      {productID: 1, productName: 'Men\'s Jackets 5', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 3},
      {productID: 1, productName: 'Men\'s Vest 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 4},
      {productID: 1, productName: 'Men\'s Short 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 5},
      {productID: 1, productName: 'Men\'s Short 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 5},
      {productID: 1, productName: 'Men\'s Jeans 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 6},
      {productID: 1, productName: 'Men\'s Jeans 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 6},
      {productID: 1, productName: 'Men\'s Jeans 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 6},
      {productID: 1, productName: 'Men\'s Jeans 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 6},

      {productID: 1, productName: 'Women\'s Shirt 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 7},
      {productID: 1, productName: 'Women\'s Shirt 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 7},
      {productID: 1, productName: 'Women\'s Shirt 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 7},
      {productID: 1, productName: 'Women\'s Shirt 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 7},
      {productID: 1, productName: 'Women\'s Shirt 5', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 7},
      {productID: 1, productName: 'Women\'s Shirt 6', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 7},
      {productID: 1, productName: 'Women\'s T-Shirt 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 8},
      {productID: 1, productName: 'Women\'s T-Shirt 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 8},
      {productID: 1, productName: 'Women\'s T-Shirt 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 8},
      {productID: 1, productName: 'Women\'s T-Shirt 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 8},
      {productID: 1, productName: 'Women\'s T-Shirt 5', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 8},
      {productID: 1, productName: 'Women\'s T-Shirt 6', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 8},
      {productID: 1, productName: 'Women\'s Jackets 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 9},
      {productID: 1, productName: 'Women\'s Jackets 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 9},
      {productID: 1, productName: 'Aodai 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 10},
      {productID: 1, productName: 'Aodai 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 10},
      {productID: 1, productName: 'Aodai 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 10},
      {productID: 1, productName: 'Women\'s Short 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 11},
      {productID: 1, productName: 'Women\'s Short 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 11},
      {productID: 1, productName: 'Women\'s Short 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 11},
      {productID: 1, productName: 'Women\'s Short 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 11},
      {productID: 1, productName: 'Women\'s Short 5', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 11},
      {productID: 1, productName: 'Women\'s Short 6', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 11},
      {productID: 1, productName: 'Women\'s Skirt 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 12},
      {productID: 1, productName: 'Women\'s Skirt 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 12},
      {productID: 1, productName: 'Women\'s Skirt 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 12},
      {productID: 1, productName: 'Women\'s Skirt 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 12},
      {productID: 1, productName: 'Women\'s Skirt 5', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 12},
      {productID: 1, productName: 'Women\'s Skirt 6', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 12},

      {productID: 1, productName: 'Couple T-Shirt 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 13},
      {productID: 1, productName: 'Couple T-Shirt 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 13},
      {productID: 1, productName: 'Couple T-Shirt 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 13},
      {productID: 1, productName: 'Couple Jackets 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 14},
      {productID: 1, productName: 'Couple Jackets 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 14},
      {productID: 1, productName: 'Couple Jackets 3', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 14},
      {productID: 1, productName: 'Couple Jackets 4', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 14},
      {productID: 1, productName: 'Couple Hat 1', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 15},
      {productID: 1, productName: 'Couple Hat 2', price: 0, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: '', subcategoriesID: 15}
    ],
  },
  reducers: {
    donothing: state => {
      state
    }
  },
});

export default listproductSlice.reducer;