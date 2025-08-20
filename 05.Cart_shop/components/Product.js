import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../store/cartReducer';
import {
  addWishListItem,
  removeWishListItem,
} from '../store/wishListReducer';

export default function Product({ productId, title, rating, price, imageUrl }) {
  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state);

  const isItemInWishlist = wishList.some(
    (item) => item.productId === productId
  );

  const handleWishlistClick = () => {
    if (isItemInWishlist) {
      dispatch(removeWishListItem(productId));
    } else {
      dispatch(addWishListItem(productId));
    }
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
        <button onClick={() => dispatch(addCartItem(productId))}>
          Add to Cart
        </button>
        <button onClick={handleWishlistClick}>
          {isItemInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  );
}