import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Router from './Router'

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Router/>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
