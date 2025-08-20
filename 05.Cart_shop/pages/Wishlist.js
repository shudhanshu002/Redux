import React from 'react';
import { useSelector } from 'react-redux';
import WishlistItem from '../components/WishlistItem';

export default function Wishlist() {
  const { wishList, products } = useSelector((state) => ({
    wishList: state.wishList,
    products: state.products,
  }));

  const wishlistItemsWithDetails = wishList.map((wishlistItem) => {
    const productDetails = products.find(
      (product) => product.id === wishlistItem.productId
    );
    return {
      ...wishlistItem,
      ...productDetails,
    };
  });

  return (
    <div className="products-container">
      {wishlistItemsWithDetails.length > 0 ? (
        wishlistItemsWithDetails.map((item) => (
          <WishlistItem
            key={item.productId}
            productId={item.productId}
            title={item.title}
            rating={item.rating.rate}
            price={item.price}
            imageUrl={item.image}
          />
        ))
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
}