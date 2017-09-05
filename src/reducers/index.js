import { combineReducers } from "redux";
import TimerReducer from './timer_reducer';
import ProjectsReducer from './projects_reducer';

const rootReducer = combineReducers({
  timer: TimerReducer,
  projects: ProjectsReducer
});

export default rootReducer;
