import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const {
    name,
    price,
    category,
  } = product;

  return (
    <div className="card">
      <h3>{ name }</h3>
      <p>R{ price }</p>
      <p>{ category }</p>
    </div>
  );
};

export default ProductCard;
