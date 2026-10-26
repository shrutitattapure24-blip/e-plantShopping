import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './CartSlice'
import plants, { categories } from './data/plants'

const ProductList = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  const cartProductIds = new Set(cartItems.map((item) => item.id))

  return (
    <main className="products-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Shop the Collection</span>
          <h1>Paradise Nursery Plants</h1>
        </div>
      </div>

      {categories.map((category) => (
        <section key={category} className="category-section">
          <div className="section-heading">
            <h2>{category}</h2>
          </div>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = cartProductIds.has(plant.id)

                return (
                  <article key={plant.id} className="plant-card">
                    <img src={plant.image} alt={plant.name} />
                    <div className="plant-card-content">
                      <h3>{plant.name}</h3>
                      <p className="plant-description">{plant.description}</p>
                      <div className="plant-card-footer">
                        <span className="plant-price">₹{plant.price}</span>
                        <button
                          type="button"
                          className="add-to-cart-button"
                          disabled={isAdded}
                          onClick={() => dispatch(addToCart(plant))}
                        >
                          {isAdded ? 'Added' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
          </div>
        </section>
      ))}
    </main>
  )
}

export default ProductList
