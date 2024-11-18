// rrd imports
import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productsSlice";

function SingleProduct({ id, brand, price, title, thumbnail, product }) {
  const dispatch = useDispatch();

  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...product, amount: 1 }));
  };

  return (
    <Link
      to={`/product/${id}`}
      className="card card-compact bg-base-100 w-full shadow-xl group"
    >
      <figure className="bg-black">
        <img
          src={thumbnail}
          alt="Shoes"
          className="h-auto object-cover scale-75 group-hover:scale-90 transition-transform duration-[0.6s]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleAddItem}>
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
}

export default SingleProduct;
