// Redux
import { useDispatch, useSelector } from "react-redux";

// Components
import { CartProduct } from "../components";

function Cart() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="align-elements py-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Product</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <CartProduct key={prod.id} prod={prod} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
