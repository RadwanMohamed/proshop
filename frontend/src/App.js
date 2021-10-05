import Header from "./components/Header";
import {BrowserRouter , Route} from 'react-router-dom';
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomePage} exact />
          <Route path='/product/:id' component={ProductPage}/>
          <Route path='/cart/:id?' component={CartPage}/>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
