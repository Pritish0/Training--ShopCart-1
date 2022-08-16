import './App.css';
import React,{useState} from 'react';
import { AppContext } from "./libs/Contextlibs";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState(null);
  const [cardsData, setCardsData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductData, setSelectedProductData] = useState(null);
  const [sort, setSort] = useState({
    sortBy: '',
    sortOrder: ''
  });
  const [filter, setFilter] = useState({
    // filterBy: '',
    // filterData: ''
    brands: [],
    categories: [],
    title: '',
    stocks: []
  });
  const [filterData, setFilterData] = useState({
    brands: [],
    categories: [],
    stocks: []
  })
  
  return (
      <AppContext.Provider
        value={{
          loggedIn,
          setLoggedIn, 
          data, 
          setData,
          cardsData, 
          setCardsData,
          selectedProduct, 
          setSelectedProduct,
          selectedProductData, 
          setSelectedProductData, 
          sort, 
          setSort, 
          filter, 
          setFilter,
          filterData, 
          setFilterData
        }}
      >
        <ProtectedRoute />
      </AppContext.Provider>
  );
}

export default App;
