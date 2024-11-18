import { FaTrash } from "react-icons/fa";

function CartProduct({ prod }) {
  const { images, title, brand, description, amount } = prod;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={images[0]} alt={`${title} image`} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">Brand: {brand}</div>
          </div>
        </div>
      </td>
      <td>{description}</td>
      <td>
        <div className="flex items-center gap-2">
          <button className="btn btn-xs sm:btn-sm">+</button>
          <span className="text-xl">{amount}</span>
          <button className="btn btn-xs sm:btn-sm">-</button>
        </div>
      </td>
      <th>
        <button className="btn btn-secondary btn-xs sm:btn-sm">
          <FaTrash />
        </button>
      </th>
    </tr>
  );
}

export default CartProduct;
