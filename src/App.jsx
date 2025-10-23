import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import OrderForm from "./OrderForm.jsx";
import OrderSuccess from "./components/OrderSuccess.jsx";
import "./App.css";

export default function App() {
  const [orderData, setOrderData] = useState(null); 

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />

        
        <Route
          path="/order"
          render={(props) => (
            <OrderForm {...props} setOrderData={setOrderData} />
          )}
        />

        <Route
          path="/success"
          render={(props) => <OrderSuccess {...props} order={orderData} />}
        />
      </Switch>
    </Router>
  );
}
