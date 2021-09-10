import { BrowserRouter, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Route path="/" exact component={Login} />
          <Route path="/inforeddit" component={Home} />
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
