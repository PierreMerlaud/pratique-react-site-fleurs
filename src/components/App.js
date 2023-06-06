import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import QuestionForm from "./QuestionForm";
import Footer from "./Footer";
import logo from "../assets/logo.png";
import "../styles/Layout.css";

function App() {
  return (
    <div>
      <Banner>
        {/* img et h1 sont les nœuds enfants dans le DOM de Banner. */}
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison Jungle</h1>
      </Banner>
      <QuestionForm />
      <div className="lmj-layout-inner">
        <Cart />
        <ShoppingList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
