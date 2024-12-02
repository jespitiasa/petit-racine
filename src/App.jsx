import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"

const App = () => {
 return (
    <div>
        <Navbar />
        <ItemListContainer saludo={"Bienvenidos a Petit Racine"}/>
    </div>
 );
};

export default App;