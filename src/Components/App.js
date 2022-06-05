import NavBar from "./NavBar";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
const App = () =>{
    return (
        <>
            <NavBar/>
            <Main/>
            <Footer/>  
            <ItemListContainer greeting="Hola, bienvenido a este e-commerce"/>
        </>
    )  
} ;

export default App; 