import { useState, ChangeEvent } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>();

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="product-management">
        <section>
          {stock > 0 ? (
            <span className="green"> {stock} Available</span>
          ) : (
            <span className="red">Not Available</span>
          )}
          <strong>ID - jjdaljfkj</strong>
          <img src={photo} alt="product" />
          <p>{name}</p>
          <h3>${price}</h3>
        </section>
        <article>
          <form action="">
            <h2>New Product</h2>
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
              <input required type="file" onChange={changeImageHandler} />
            </div>
            {photo && <img src={photo} alt="New Image" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </div>
    </div>
  );
};

export default ProductManagement;
