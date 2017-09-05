import {
  TIMER_START,
  COUNTDOWN_TICK,
  TIMER_PAUSE,
  TIMER_RESET,
} from '../actions/timer_actions';

let interval = null;

export const timerMiddleware = store => next => action => {
  if (action.type === TIMER_START) {
    if (action.timerType === 'timer') {
      action.interval = setInterval(() => store.dispatch({type: 'TIMER_TICK'}), 1000);
    } else {
      action.interval = setInterval(() => store.dispatch({type: 'COUNTDOWN_TICK'}), 1000);
      interval = action.interval;
    }
  } else if (action.type === TIMER_RESET) {
    clearInterval(action.interval);
  } else if (action.type === TIMER_PAUSE) {
    clearInterval(action.interval);
  } else if (action.type === COUNTDOWN_TICK) {
    if (store.getState().timer.seconds === 1) {
      store.dispatch({type: TIMER_RESET, interval})
      return;
    }
  }
  next(action);
};
