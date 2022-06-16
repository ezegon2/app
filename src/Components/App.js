import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./NavBar";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
function App () {
    return (    
        <div className="App">
            <ItemListContainer/>
            <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
            </Routes>
            <Main/>
            <ItemDetailContainer/>
            </BrowserRouter>
            <Footer/>
        </div>
              
    
    )  
} ;

export default App; 