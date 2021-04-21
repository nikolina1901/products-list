import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/product" component={ProductList} />
        <Route path="/productdetails/:id" component={ProductDetails} />
        <Redirect to="/product" />
      </Switch>
    </div>
  );
}

export default App;
