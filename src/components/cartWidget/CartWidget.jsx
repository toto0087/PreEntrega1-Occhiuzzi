import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./cartwidget.css"
import { BsFillCartCheckFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const CartWidget = () => {

  const {cart} = useContext(CartContext)

  return (
    <div className="container-cart">
      <Link to="/cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "#7F669D",
          }}
        />
        <div className="bubble-counter">
          <span style={{color: "#7F669D"}}>{cart.length}</span>
        </div>
      </Link>
    </div>
  )
}

export default CartWidget


