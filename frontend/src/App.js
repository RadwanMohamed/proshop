import Header from "./components/Header";
import {BrowserRouter , Route} from 'react-router-dom';
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>

          <Route path='/login' component={LoginPage}/>
          <Route path='/register' component={RegisterPage}/>
          <Route path='/profile' component={ProfilePage}/>
          <Route path='/product/:id' component={ProductPage}/>
          <Route path='/cart/:id?' component={CartPage}/>
          <Route path='/' component={HomePage} exact />

        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
