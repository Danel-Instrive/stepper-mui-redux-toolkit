import { Provider } from "react-redux";
import DashboardFile from "./components/DashboardFile";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <DashboardFile />
    </Provider>
  );
}

export default App;
