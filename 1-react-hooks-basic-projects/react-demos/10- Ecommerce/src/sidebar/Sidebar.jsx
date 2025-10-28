import "./Sidebar.css";
import Price from "./price/Price"
import Colors from "./colors/Colors"
import Category from "./category/Category"
const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
          <div className="logo-container">
              <h1>🛒</h1>
          </div>

          <Category />
          <Price />
          <Colors />
      </section>
    </>
  )
}

export default Sidebar