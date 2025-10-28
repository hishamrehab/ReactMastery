import { useState } from 'react'
import Products from './components/products/Products'
import Navbar from './navigation/Navbar'
import Recommended from './recommended/Recommended'
import Sidebar from './sidebar/Sidebar'

//Database
import products from "./db/data";



const App = () => {
 const [selectedCategory , setSelectedCategory] = useState(null);

       //  Input Filter
   const [query , setQuery] = useState('');

   const handleInputChange = (event) => {
    setQuery(event.target.value);
   };

 const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

// Ratio Filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  }


// Buttons Filter
 const handleClick = (event) => {
  setSelectedCategory(event.target.value);
}



function filteredData(products , selected , query) {
  let filterdProducts = products;
  // Filltering Input Items
  if(query) {
    filterdProducts = filteredItems;
  }
}
 

  return (
    <>
    <Sidebar />
     <Navbar />
     <Recommended />
     <Products />
    </>
  )
}

export default App