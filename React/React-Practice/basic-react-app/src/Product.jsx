import "./Product.css";

function Product({ title, price, features }) {
    let styles = {backgroundColor: price > 50000 ? "skyblue" : ""};

  return (
    <div className="Product" style={styles}>
      <h1> {title}</h1>
      <h5>Price: {price}</h5>
      {/* {features && (
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )} */}

      {price > 50000 ? <p>Discount of 5%</p> : null}
    </div>
  );
}

export default Product;
