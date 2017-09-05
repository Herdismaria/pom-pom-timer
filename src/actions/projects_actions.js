import database from '../firebase/firebase_config';
import moment from 'moment';

const Projects = database.ref().child('/projects');
// action type constants
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECT_REJECTED = 'FETCH_PROJECT_REJECTED';
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const ADDING_PROJECT = 'ADDING_PROJECT';
export const PROJECT_ADDED = 'PROJECT_ADDED';
export const PROJECT_REJECTED = 'PROJECT_REJECTED';
export const NEW_PROJECT = 'NEW_PROJECT';

const temp = {
  created: moment().unix(),
  totalSeconds: 0,
  status: 'not-started',
  user: 'some user'
}

// action creators
export function fetch_projects() {
  return dispatch => {
    dispatch({type: REQUEST_PROJECTS});
    Projects.once('value', snapshot => {
      dispatch({
        type: FETCH_PROJECTS,
        payload: snapshot.val()
      });
    }).catch((error => {

    }));
  };
}

export function watchProjectAddedEvent(dispatch) {
  Projects.on('child_added', (snap) => {
    dispatch({type: NEW_PROJECT, payload: snap.val()});
  });
}

export function add_project(name) {
  return dispatch => {
    dispatch({type: ADDING_PROJECT});
    const key = Projects.push().key;
    Projects.child('/' + key).set({
      ...temp,
      name,
      id: key
    }).then(() => {
      dispatch({type: PROJECT_ADDED});
    }).catch((error) => {
      dispatch({type: PROJECT_REJECTED});
    });
  }
}
