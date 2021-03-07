import { createSlice } from '@reduxjs/toolkit';

import img1 from '../../assets/products/1.png'
import img2 from '../../assets/products/2.jpg'
import img3 from '../../assets/products/3.jpg'
import img4 from '../../assets/products/4.jpg'
import img5 from '../../assets/products/5.jpg'
import img6 from '../../assets/products/6.jpg'
import img7 from '../../assets/products/7.jpg'
import img8 from '../../assets/products/8.jpg'
import img9 from '../../assets/products/9.jpg'
import img10 from '../../assets/products/10.jpg'
import img11 from '../../assets/products/11.jpg'
import img12 from '../../assets/products/12.jpg'

import img13 from '../../assets/products/13.jpg'
import img14 from '../../assets/products/14.jpg'
import img15 from '../../assets/products/15.jpg'
import img16 from '../../assets/products/16.jpg'
import img17 from '../../assets/products/17.jpg'
import img18 from '../../assets/products/18.jpg'
import img19 from '../../assets/products/19.jpg'
import img20 from '../../assets/products/20.jpg'
import img21 from '../../assets/products/21.jpg'
import img22 from '../../assets/products/22.jpg'
import img23 from '../../assets/products/23.jpg'
import img24 from '../../assets/products/24.jpg'

import img25 from '../../assets/products/25.jpg'
import img26 from '../../assets/products/26.jpg'
import img27 from '../../assets/products/27.jpg'
import img28 from '../../assets/products/28.jpg'
import img29 from '../../assets/products/29.jpg'
import img30 from '../../assets/products/30.jpg'
import img31 from '../../assets/products/31.jpg'
import img32 from '../../assets/products/32.jpg'
import img33 from '../../assets/products/33.jpg'
import img34 from '../../assets/products/34.jpg'
import img35 from '../../assets/products/35.jpg'
import img36 from '../../assets/products/36.jpg'
import img37 from '../../assets/products/37.jpg'
import img38 from '../../assets/products/38.jpg'
import img39 from '../../assets/products/39.jpg'
import img40 from '../../assets/products/40.jpg'

export const listproductSlice = createSlice({
  name: 'listproduct',
  initialState: {
    inCartQuantity: 0,
    categories: [
      {categoriesID: 1, categoriesName: 'Clothes (Cosplay)'},
      {categoriesID: 2, categoriesName: 'Figure'},
      {categoriesID: 3, categoriesName: 'Others Accessories'}
    ], 
    subcategories: [
      {subcategoriesID: 1, subcategoriesName: 'Shirt/T-Shirt', categoriesID: 1},
      {subcategoriesID: 2, subcategoriesName: 'Cosplay Combo', categoriesID: 1},

      {subcategoriesID: 3, subcategoriesName: 'Single Figure', categoriesID: 2},
      {subcategoriesID: 4, subcategoriesName: 'Combo Figure', categoriesID: 2},

      {subcategoriesID: 5, subcategoriesName: 'Balo', categoriesID: 3},
      {subcategoriesID: 6, subcategoriesName: 'Jewelry', categoriesID: 3},
      {subcategoriesID: 7, subcategoriesName: 'Stuffed Toy', categoriesID: 3},
      {subcategoriesID: 8, subcategoriesName: 'Others', categoriesID: 3},
    ],
    product: [
      {productID: 1, productName: 'Áo thun Zero Two - Darling in the Franxx', price: 1000, discount: 1, status: 'Available', rate: 2, description: 'Description default 1', imagePath: img1, subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 2, productName: 'Áo thun Kimetsu no Yaiba', price: 999, discount: 10, status: 'Out of stock', rate: 3, description: 'Description default 2', imagePath: img2, subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 3, productName: 'Áo thun Date A Live Tohka', price: 2000, discount: 15, status: 'Available', rate: 4.5, description: 'Description default 3', imagePath: img3, subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 4, productName: 'Áo thun Date A Live Kurumi', price: 9900, discount: 10, status: 'Available', rate: 5, description: 'Description default 4', imagePath: img4, subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 5, productName: 'Áo thun Naruto Supreme', price: 550, discount: 10, status: 'Available', rate: 2, description: 'Description default', imagePath: img5, subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 6, productName: 'Áo thun phát quang Naruto', price: 2320, discount: 15, status: 'Out of stock', rate: 5, description: 'Description default', imagePath: img6, subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 7, productName: 'Áo thun One Piece', price: 2130, discount: 23, status: 'Available', rate: 0, description: 'Description default', imagePath: img7, subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 8, productName: 'Áo thun Death Note - L', price: 9800, discount: 50, status: 'Available', rate: 0, description: 'Description default', imagePath: img8, subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 9, productName: 'Áo thun Naruto-Kakashi', price: 3500, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: img9, subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 10, productName: 'Áo thun Inuyasha', price: 2200, discount: 10, status: 'Available', rate: 0, description: 'Description default', imagePath: img10, subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 11, productName: 'Áo thun Sessoumaru', price: 5000, discount: 10, status: 'Available', rate: 0, description: 'Description default', imagePath: img11, subcategoriesID: 1, inCart: false, numberInCart: 0},
      {productID: 12, productName: 'Áo thun Takeshi-Pikachu', price: 3500, discount: 10, status: 'Available', rate: 0, description: 'Description default', imagePath: img12, subcategoriesID: 1, inCart: false, numberInCart: 0},

      {productID: 13, productName: 'Costume cosplay Nezuko', price: 2150, discount: 20, status: 'Out of stock', rate: 0, description: 'Description default', imagePath: img13, subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 14, productName: 'Cosplay Kikyo Inuyasha', price: 2180, discount: 5, status: 'Available', rate: 0, description: 'Description default', imagePath: img14, subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 15, productName: 'Combo Kurumi', price: 2120, discount: 10, status: 'Available', rate: 0, description: 'Description default', imagePath: img15, subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 16, productName: 'De Lisa Sakura', price: 3400, discount: 10, status: 'Available', rate: 0, description: 'Description default', imagePath: img16, subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 17, productName: 'Sasuke Costume', price: 2000, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: img17, subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 18, productName: 'Akatsuki Jackets', price: 3300, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: img18, subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 19, productName: 'Hinata Costume', price: 4000, discount: 10, status: 'Available', rate: 0, description: 'Description default', imagePath: img19, subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 20, productName: 'Rem Costume', price: 4500, discount: 10, status: 'Available', rate: 0, description: 'Description default', imagePath: img20, subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 21, productName: 'Actack on Titan Jackets', price: 2350, discount: 10, status: 'Available', rate: 0, description: 'Description default', imagePath: img21, subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 22, productName: 'Nezuko Cosplay', price: 4000, discount: 10, status: 'Available', rate: 0, description: 'Description default', imagePath: img22, subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 23, productName: 'Tsuyuri Kanao Costume', price: 3420, discount: 10, status: 'Available', rate: 0, description: 'Description default', imagePath: img23, subcategoriesID: 2, inCart: false, numberInCart: 0},
      {productID: 24, productName: 'Asuma SAO Costume', price: 3500, discount: 10, status: 'Available', rate: 0, description: 'Description default', imagePath: img24, subcategoriesID: 2, inCart: false, numberInCart: 0},

      {productID: 25, productName: 'Figure Rem - Birthday Ver.', price: 2500, discount: 15, status: 'Available', rate: 0, description: 'Description default', imagePath: img25, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 26, productName: 'Re:Zero Rem Figure Cat Ver', price: 3500, discount: 15, status: 'Available', rate: 0, description: 'Description default', imagePath: img26, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 27, productName: 'Figure Naruto Cửu Vĩ Hình', price: 3500, discount: 15, status: 'Available', rate: 0, description: 'Description default', imagePath: img27, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 28, productName: 'Figure Gaara', price: 5500, discount: 15, status: 'Available', rate: 0, description: 'Description default', imagePath: img28, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 29, productName: 'Figure Hinata Byakugan', price: 4500, discount: 15, status: 'Available', rate: 0, description: 'Description default', imagePath: img29, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 30, productName: 'Figure Kakuzu Akatsuki', price: 3500, discount: 15, status: 'Available', rate: 0, description: 'Description default', imagePath: img30, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 31, productName: 'Figure Tanjiro Kimetssu No Yaiba', price: 2800, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: img31, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 32, productName: 'Figure Hatsune Miku', price: 1000, discount: 0, status: 'Available', rate: 0, description: 'Description default', imagePath: img32, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 33, productName: 'Hatsune Miku Limited', price: 10000, discount: 20, status: 'Available', rate: 0, description: 'Description default', imagePath: img33, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 34, productName: 'Hot Fate/ Apocrypha Astolfo Swimsuit Ver.', price: 1500, discount: 20, status: 'Available', rate: 0, description: 'Description default', imagePath: img34, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 35, productName: 'One Piece ZORO Figure', price: 2200, discount: 20, status: 'Available', rate: 0, description: 'Description default', imagePath: img35, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 36, productName: 'SAO Asuna Figure', price: 2220, discount: 5, status: 'Available', rate: 0, description: 'Description default', imagePath: img36, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 37, productName: 'Charlotte Tomori Nao Figure', price: 3330, discount: 5, status: 'Available', rate: 0, description: 'Description default', imagePath: img37, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 38, productName: 'Kobayashi-san no Maid Dragon Figure', price: 4400, discount: 5, status: 'Available', rate: 0, description: 'Description default', imagePath: img38, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 39, productName: 'Nendoroid Nekopara Chocola', price: 7000, discount: 5, status: 'Available', rate: 0, description: 'Description default', imagePath: img39, subcategoriesID: 3, inCart: false, numberInCart: 0},
      {productID: 40, productName: 'Figure Nekopara Vanilla', price: 7000, discount: 5, status: 'Available', rate: 0, description: 'Description default', imagePath: img40, subcategoriesID: 3, inCart: false, numberInCart: 0}
    ],
  },
  reducers: {
    doNothing: state => {
      state.inCartQuantity= 1;
    },
    addToCart: (state, action) => {
      if (state.product[action.payload].inCart === true) {
        state.product[action.payload].numberInCart++;
        alert("You had this in your cart! (Quantities: " + state.product[action.payload].numberInCart + ").");
      } else {
        alert("Add " + state.product[action.payload].productName + " to cart succesfully!");
        state.inCartQuantity++;
        state.product[action.payload].inCart = true;
        state.product[action.payload].numberInCart = 1; 
      }
    },
    removeFromCart: (state, action) => {
      state.inCartQuantity--;
      state.product[action.payload-1].numberInCart = 0;
      state.product[action.payload-1].inCart = false;
    },
    increaseProduct: (state, action) => {
      state.product[action.payload-1].numberInCart++;
    },
    decreaseProduct: (state, action) => {
      if (state.product[action.payload-1].numberInCart > 1)
        state.product[action.payload-1].numberInCart--;
    }
  },
});

export const { doNothing, addToCart, removeFromCart, increaseProduct, decreaseProduct } = listproductSlice.actions;

export const listCategoriesAvailable = state => state.listproduct.categories;
export const listSubCategoriesAvailable = state => state.listproduct.subcategories;
export const listProductAvailable = state => state.listproduct.product;
export const forTest = state => state.listproduct.inCartQuantity;
export const totalPrice = state => state.listproduct.product.filter(item => item.inCart === true).reduce(function(a,b) {return a + b.numberInCart*b.price*(100-b.discount)/100;},0);

export default listproductSlice.reducer;