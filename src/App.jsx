import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicRoute from './components/PublicRoute'
import ProtectedRoute from './components/ProtectedRoute'
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";

function App() {
  const  loading  = useSelector((state) => state.alerts.loading);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
           <Routes>
           <Route path="/" element={<ProtectedRoute> <HomePage /> </ProtectedRoute>} />
           <Route path="/login" element={ <PublicRoute> <Login /> </PublicRoute> } />
           <Route path="/register" element={ <PublicRoute> <Register /> </PublicRoute>} />
         </Routes>
        )}
         
       
      
        
      </BrowserRouter>
    </>
  );
}

export default App;
