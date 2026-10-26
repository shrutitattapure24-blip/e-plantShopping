import { useDispatch, useSelector } from 'react-redux'
import { addItem } from './CartSlice'
import plants, { categories } from './data/plants'

const ProductList = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  const addedToCart = cartItems.reduce((acc, item) => {
    acc[item.name] = true
    return acc
  }, {})

  return (
    <main className="products-page product-list">
      <div className="page-header">
        <div>
          <span className="eyebrow">Shop the Collection</span>
          <h1>Paradise Nursery Plants</h1>
        </div>
      </div>

      {categories.map((category) => (
        <section key={category} className="category-section product-list-section">
          <div className="section-heading">
            <h2>{category}</h2>
          </div>

          <div className="product-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = Boolean(addedToCart[plant.name])

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
                          onClick={() => dispatch(addItem({ ...plant, cost: plant.price }))}
                        >
                          {isAdded ? 'Added to Cart' : 'Add to Cart'}
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
