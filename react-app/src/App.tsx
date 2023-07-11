import { Provider } from "react-redux";
import './App.css';
import FirstPage from "./pages/FirstPage";
import { ReduxStore } from "./state/store";

function App() {

  console.log("app render");

  return <Provider store={ReduxStore}>
    <FirstPage></FirstPage>
  </Provider>;
}

export default App;
