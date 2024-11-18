// util
import { request } from "../util/request";

// Components
import { ProductsContainer } from "../components";

// loader
export const loader = async () => {
  const req = await request.get("/products");

  return req.data;
};

function Home() {
  return (
    <div className="align-elements py-10">
      <ProductsContainer />
    </div>
  );
}

export default Home;
