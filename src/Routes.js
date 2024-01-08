import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Contato from "./paginas/Contato";
import Erro from "./paginas/404/404";
import Header from "./componentes/header";
import Footer from "componentes/footer";



function AppRoutes() {
  return(
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/sobrenos' element={ <Sobre /> } />
        <Route path='/contato' element={ <Contato /> } />
        <Route path='*' element={ <Erro /> } />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );

}

export default AppRoutes;
