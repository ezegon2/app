import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./NavBar";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import Checkout from "./Checkout";
import {MiProvider} from "./CartContext";
function App () {
    return (    
        <div className="App">
            <BrowserRouter>
            <MiProvider>
                <NavBar/>
                <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>}/>
                <Route path='checkout' element={<Checkout/>}/>
                
                </Routes>
                <Footer/>
            </MiProvider>
            </BrowserRouter>
        </div>
    )  
} ;

export default App; 