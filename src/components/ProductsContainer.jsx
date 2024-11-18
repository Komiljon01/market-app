// rrd imports
import { useLoaderData } from "react-router-dom";

// Components
import { SingleProduct } from "./";

function ProductsContainer() {
  const { products } = useLoaderData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
      {products.map((product) => {
        const { id, brand, price, title, thumbnail } = product;

        return (
          <SingleProduct
            key={id}
            id={id}
            brand={brand}
            price={price}
            title={title}
            thumbnail={thumbnail}
            product={product}
          />
        );
      })}
    </div>
  );
}

export default ProductsContainer;
