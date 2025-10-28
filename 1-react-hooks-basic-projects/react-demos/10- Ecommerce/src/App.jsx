import Products from './components/products/Products'
import Navbar from './navigation/Navbar'
import Recommended from './recommended/Recommended'

const App = () => {
  return (
    <>
     <Navbar />
     <Recommended />
     <Products />
    </>
  )
}

export default App