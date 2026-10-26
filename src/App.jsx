import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import { store } from './store'
import AboutUs from './AboutUs'
import ProductList from './ProductList'
import CartItem from './CartItem'
import './App.css'

const selectCartTotal = (state) =>
  state.cart.reduce((total, item) => total + item.quantity, 0)

function Navbar() {
  const cartCount = useSelector(selectCartTotal)

  return (
    <header className="topbar">
      <div className="brand">
        <Link to="/">Paradise Nursery</Link>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link">
          <span className="cart-icon" aria-label="Cart icon">
            🛒
          </span>
          <span className="cart-count">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  )
}

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="eyebrow">Fresh, fearless greens</span>
          <h1>Paradise Nursery</h1>
          <p>
            Bring home lush, vibrant plants that brighten every room and turn
            ordinary spaces into calming green havens.
          </p>
          <Link to="/plants" className="primary-button get-started-button">
            Get Started
          </Link>
        </div>
      </section>

      <AboutUs />
    </main>
  )
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
