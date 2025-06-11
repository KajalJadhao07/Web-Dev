import Product from "./Product.jsx"

function ProductList(){
    let options = ["high-tech", "durable", "fast"];
    return(
    <>
       <Product title= "Phone" price ={30000} features = {options}/>
       <Product title = "Laptop" price={70000}/>
       <Product title = "Tablet" price= {50000}/>
    </>
    );
}

export default ProductList;