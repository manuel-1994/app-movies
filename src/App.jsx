import { Route,BrowserRouter,Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import DetailsPage from "./pages/DetailsPage";
import Layout from "./pages/Layout";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path="*" element={<NotFoundPage/>}/>  
            <Route path="movies" element={<MoviesPage/>}/> 
            <Route path="movie/:id" element={<DetailsPage/>}/>
        </Route>
        <Route path="auth" element={<AuthPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
