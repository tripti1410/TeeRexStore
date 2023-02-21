import "./product-card.css";

const ProductCard = () => {
  return (
    <article className="product-card">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1674461315014-ba2735fc109c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzY4OTgxNDA&ixlib=rb-4.0.3&q=80&w=300"
          alt=""
        />
      </figure>
      <h2>Black polo</h2>
      <div className="product-details">
        <span>Rs 350</span>
        <button>Add to cart</button>
      </div>
    </article>
  );
};

export default ProductCard;
