import { combineReducers } from "redux";
import dashboardReducer from "./Dashboard/DashboardPageReducer";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
});

export default rootReducer;
