import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="new-product">
        <article>
          <form action="">
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                required
                type="text"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                required
                type="text"
                placeholder="stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Photo</label>
              <input
                required
                type="file"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </article>
      </div>
      <main className="dashboard"></main>
    </div>
  );
};

export default NewProduct;
