import { useDispatch } from 'react-redux';
import { removeWishListItem } from '../store/wishListReducer';
import { addCartItem } from '../store/cartReducer';

export default function WishlistItem({
  productId,
  title,
  rating,
  price,
  imageUrl,
}) {
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = () => {
    dispatch(removeWishListItem(productId));
  };

  const handleMoveToCart = () => {
    dispatch(addCartItem(productId));
    dispatch(removeWishListItem(productId));
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{rating} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button onClick={handleMoveToCart}>Move to Cart</button>
        <button className="secondary" onClick={handleRemoveFromWishlist}>
          Remove
        </button>
      </div>
    </div>
  );
}