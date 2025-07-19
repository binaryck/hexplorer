import "./App.scss";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";

const AppRoutes: React.FC = () => {
  const elements = useRoutes(routes);
  return elements;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
