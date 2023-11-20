import products from "../../assets/products.json";
import "./products.scss";

function Products() {
  return (
    <>
      <div className="transformers-products">
        <div className="container">
          <h2 className="text-center py-3">Products</h2>
          {products.map((product) => {
            return (
              <section>
                <h3>{product.title}</h3>
                <p>{product.content}</p>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
