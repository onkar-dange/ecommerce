import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from '../home';
import ContactPage from '../contact';
import ProductPage from '../products';
import Header from '../commen/header';
import Footer from '../commen/footer';

function AppRoutes(){
return(
    <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
    </Router>
)
}

export default AppRoutes