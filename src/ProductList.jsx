import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        { name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', cost: '$15', description: 'Produces oxygen at night.' },
        { name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/11/08/19/chlorophytum-3530413_1280.jpg', cost: '$12', description: 'Effective against formaldehyde.' },
        { name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2018/02/23/11/47/peace-lily-3175056_1280.jpg', cost: '$18', description: 'Removes toxins from the air.' },
        { name: 'Boston Fern', image: 'https://cdn.pixabay.com/photo/2020/02/27/15/25/fern-4884962_1280.jpg', cost: '$14', description: 'Adds humidity to indoor spaces.' },
        { name: 'Rubber Plant', image: 'https://cdn.pixabay.com/photo/2020/06/09/04/24/plant-5276634_1280.jpg', cost: '$20', description: 'Easy care with glossy leaves.' },
        { name: 'Aloe Vera', image: 'https://cdn.pixabay.com/photo/2018/04/09/15/22/aloe-vera-3304405_1280.jpg', cost: '$10', description: 'Healing properties in leaves.' },
      ],
    },
    {
      category: 'Aromatic Plants',
      plants: [
        { name: 'Lavender', image: 'https://cdn.pixabay.com/photo/2017/04/19/14/06/lavender-2242165_1280.jpg', cost: '$15', description: 'Soothing fragrance.' },
        { name: 'Jasmine', image: 'https://cdn.pixabay.com/photo/2017/09/03/17/02/jasmine-2711181_1280.jpg', cost: '$18', description: 'Sweet night-time scent.' },
        { name: 'Rosemary', image: 'https://cdn.pixabay.com/photo/2016/09/10/11/41/rosemary-1658872_1280.jpg', cost: '$10', description: 'Great for cooking and aroma.' },
        { name: 'Mint', image: 'https://cdn.pixabay.com/photo/2016/08/02/15/49/mint-1563720_1280.jpg', cost: '$8', description: 'Refreshing scent and uses.' },
        { name: 'Lemon Balm', image: 'https://cdn.pixabay.com/photo/2019/07/07/14/45/lemon-balm-4322435_1280.jpg', cost: '$12', description: 'Citrusy aroma.' },
        { name: 'Eucalyptus', image: 'https://cdn.pixabay.com/photo/2016/03/30/22/07/eucalyptus-1291885_1280.jpg', cost: '$22', description: 'Distinctive clean fragrance.' },
      ],
    },
    {
      category: 'Insect Repellent Plants',
      plants: [
        { name: 'Oregano', image: 'https://cdn.pixabay.com/photo/2017/07/28/14/29/oregano-2548777_1280.jpg', cost: '$9', description: 'Contains insect-repelling compounds.' },
        { name: 'Marigold', image: 'https://cdn.pixabay.com/photo/2017/04/11/21/34/marigold-2223075_1280.jpg', cost: '$10', description: 'Naturally repels pests.' },
        { name: 'Basil', image: 'https://cdn.pixabay.com/photo/2016/08/10/19/27/basil-1584288_1280.jpg', cost: '$11', description: 'Deters flies and mosquitoes.' },
        { name: 'Catnip', image: 'https://cdn.pixabay.com/photo/2015/07/02/20/37/catnip-829631_1280.jpg', cost: '$10', description: 'Repels mosquitoes effectively.' },
        { name: 'Citronella', image: 'https://cdn.pixabay.com/photo/2019/05/20/17/25/grass-4217112_1280.jpg', cost: '$16', description: 'Classic mosquito deterrent.' },
        { name: 'Geraniums', image: 'https://cdn.pixabay.com/photo/2016/04/25/07/15/geranium-1351187_1280.jpg', cost: '$14', description: 'Pleasant scent keeping bugs away.' },
      ],
    },
  ];

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  if (showCart) {
    return <CartItem onContinueShopping={() => setShowCart(false)} />;
  }

  return (
    <div className="product-list">
      <div className="navbar">
        <div className="tag">
          <a href="#home" onClick={onHomeClick}>
            <h3>Paradise Nursery</h3>
          </a>
        </div>

        <div className="nav-links">
          <a href="#home" onClick={onHomeClick}>Home</a>
          <a href="#plants" onClick={() => setShowCart(false)}>Plants</a>
          <a href="#cart" onClick={() => setShowCart(true)} className="cart-link">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalCartItems}</span>
          </a>
        </div>
      </div>

      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index} className="category-section">
            <h2>{category.category}</h2>
            <div className="plant-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="plant-card" key={plantIndex}>
                  <img src={plant.image} alt={plant.name} className="plant-image" />
                  <h3>{plant.name}</h3>
                  <p className="plant-cost">{plant.cost}</p>
                  <p className="plant-description">{plant.description}</p>
                  <button
                    className="add-to-cart-button"
                    disabled={Boolean(addedToCart[plant.name])}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ProductList.displayName = 'ProductList';
export default ProductList;