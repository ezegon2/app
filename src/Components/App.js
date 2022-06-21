import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./NavBar";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
function App () {
    return (    
        <div className="App">
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
            </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )  
} ;

export default App; 