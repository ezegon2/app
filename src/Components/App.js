import NavBar from "./NavBar";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";
const App = () =>{
    return (
        <>
            <NavBar/>
            <Main/>
            <Footer/>  
            <ItemListContainer greeting="Hola, bienvenido a este e-commerce"/>
            <ItemCount stock={5} onAdd={()=>{}} initial={1}/>
        </>
    )  
} ;

export default App; 