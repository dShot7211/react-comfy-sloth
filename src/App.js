import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  SingleProduct,
  Cart,
  CheckOut,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />

          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <CheckOut />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;

// 1 we worked on app.js for routing-
//  2 we workerd on navbar.js just displaying the img barsicon and adding routing links
//3 cartButtons.js added the cart and login buttons only, no functionality
// 4 we worked on footer.js
// 5 we worked on sidebar.js just show the logo links  and cart and login no functionality
// 6 we worked on products_reducer.js and poducts_context.js
//   and setup a useReducer and opensidenbar- close func in the context
//   and give functionality to these func in products_reducer and we wrapped the app component
//   in the index js in the Productsprovider
// 7 we worked on navbar, sidebar, cartButtons .js and gave open and close functionality
//  to the buttons there
// 8 setup the errorPage.js
// 9 setup the about page and checkout page hero part where we see what page we are on
// 10 worked on homePage.js put hero featuredProducts and services contactSection components here
//11 worked on hero.js added text, a button to shop and para , but on bigger screen
//  we show 2 images too made some blocks with icons an ddummy text
//12  worked on services.js and added 3 blocks of info
// 13 we worked on contact.js added on some text and a form input of email
// 14 we worked on  products_context and setup these states
//  products_loading: false,
// products_error: false,
// products: [],
// featured_products: [],
// and then we setup fetchProducts func and send 2 dipatches in that
//15 then we worked on products_reducer.js and setup 3 action types
// GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR

//16  we worked on featured_Products.js we get our state from useProductsContext we place loading and error components
//   and did some work on error.js and loading.js
//  and then iterate over featured products array and pass the data to <Products/> component to show each featured product

//17  then we worked on Product.js and displayed each product and give a link to single products page

// 18 then we worked on displaying the price with a function that is in helpers.js utils

//19now we work on products_context.js . we setup a async fetchSingleProduct func and 3 dispaches in it
// setup 3 states in the initial state
// now we work on products _reduces and handle these 2 dispatches there

// 20 we work on singleProductPage.js and 1 we get id from the url
// then we get all the states with useProductsContext(), then we use fetchSingleProductfunc and fetch single prod data
// then we setup loading and error, then we setup another useEffect to automatcally move to home if error

//21 now we worked on singlepoductPage.js and get all our data from the singleProduct obj, then we start to display our single prod page
//   then in pageHero.js we conditionaly show the Home/Products/ shelf we show the products tab too if we clicked to see more info on a single product
//  then we display our items in the singleProductPage.js

// 22 start making the images in the singlePoductpage.js, and work on ProductImages.js
// first we take out images from the prop then we give some default value cause initially
// the images array doesn;t contain anything till data is fetched, so we dont get any complication s
// in rendreing we give the default value
//wesetup a useState for the main image and change it when we click to the other images useing the index
// of images giving the main image the index of the clicked imagge

//23 now we start with stars component and stars.js , we make a array of length 5 and with the ternary operator we display stars based on what we checking
//  stars>=1? show a full star icon: stars>=0.5?show a half star icon: show empty starr icon
//  stars>=2? show a full star icon: stars>=1.5?show a half star icon: show empty starr icon
// and we repeat till 5 stars

//24 we worked on addtocart.js got id, stock, colors from the singleProductPage.js as pros
// made a useState and set it to first color in color array
//made buttons of the colors array, then set the clicked color that has hex value to main color which had hex calue of first color in arrayand give a tick mark

//25 next we worked on AmountButtons.js just see its simple

// 26 next we worked on a new context filter_context.js, create 2 states   filtered_products:[], all_products:[],
//   now wrap filte provoder in Products provider in index.js the main one, get the poducts form the poducts context.js in filte context
// then add it to the state in filter_reducr.js

//27 now we setup the productsPage.js and then setup poductList.js and in that 1st we setup grid view in gridView.js
// 2nd we setup  the list view in ListView.js

//28 we work on the sort.js file that we render in the productspage.js in sort.js we give 2 buttons and one para for numb of products displayed
// and select input for sorting, we setup the list view and grid v functionality

//29 filtercontex.js ,sort.js we work on the functionlaity of the select price low high name low high- 1 make a sort state set it to the default value of the select input we wnat to have
//  then put onChange on select input and set the value to sort on what we select from the input

//30 we worked on filtercontext, filterreducer we make a useEffect and dispatch a type now in the filter reducer we we handle the dispatch
// make 4 if satements and set the filteredProducts state to what ever we get from filtering the initial array based on our onChange of the select input

//31 we wroked on filtercontex.js and made updateFilters , clearFilters funcs then we setup the filters.js file
// we inport the filter state from filtercontext.js and above funcs and we added a form and input and
// we attached this input to the text prop in filters state and added the vlue of input in the text state

//  32 we worked on adding the categories tab it has the working same as the menu project
// we make 3 variables that get the unique values from our all products array
// then we iterate over each arrays of unique values of cat companies , colors in filter.js
//   const categories = getUniqueValues(all_products, "category");
// const companies = getUniqueValues(all_products, "company");
// const colors = getUniqueValues(all_products, "colors");

//33 done till vid 354
