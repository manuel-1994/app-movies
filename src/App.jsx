import { Route,BrowserRouter,Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Details from "./pages/Details";
import Layout from "./pages/Layout";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path="*" element={<NotFound/>}/>  
            <Route path="movies" element={<Movies/>}/> 
            <Route path="movie/:id" element={<Details/>}/>
        </Route>
        <Route path="auth" element={<Auth/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
