
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Home } from './Pages/Home';
import { NewRoom } from './Pages/NewRoom';
import { Room } from './Pages/Room';

import { AuthContextProvider } from './contexts/AuthContext';
import NotFound from "./Pages/NotFound";
import { AdminRoom } from "./Pages/AdminRoom";


function App() {

  
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="403" element={<NotFound />} />
          <Route path="rooms">
            <Route index element={<Navigate to='/rooms/new' replace/>} />
            <Route path="new" element={<NewRoom />} />
            <Route path=":id" element={<Room />} />
            <Route path="admin/:id" element={<AdminRoom />} />
            </Route>
        </ Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
