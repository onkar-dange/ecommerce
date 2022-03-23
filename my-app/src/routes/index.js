import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from '../home';
import ContactPage from '../contact';
import ProductPage from '../products';
import Header from '../commen/header/index'

function AppRoutes(){
return(
    <Router>
        <Header />
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </Router>
)
}

export default AppRoutes