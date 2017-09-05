import {
  FETCH_PROJECTS,
  REQUEST_PROJECTS,
  FETCH_PROJECT_REJECTED,
  NEW_PROJECT} from '../actions/projects_actions';
import _ from 'lodash';

const initialState = {
  projects: {},
  isFetching: true
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {projects: action.payload, isFetching: false};
    case REQUEST_PROJECTS:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_PROJECT_REJECTED:
      return {
        ...state,
        isFetching: false
      }
    case NEW_PROJECT:
      return {
        ...state,
        projects: {
          ...state.projects,
          [action.payload.id]: action.payload
        }
      }
    default:
      return state
  }
}
