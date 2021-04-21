import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetails from "./ProductDetails";
import React from "react";
import axios from "axios";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/product"
          render={(props) => <ProductList products={products} />}
        />

        <Route
          path="/productdetails/:id"
          render={(props) => <ProductDetails products={products} />}
        />
        <Redirect to="/product" />
      </Switch>
    </div>
  );
}

export default App;
