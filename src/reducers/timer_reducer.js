import { TIMER_START, TIMER_TICK, COUNTDOWN_TICK, TIMER_PAUSE, TIMER_RESET, TYPE_TIMER, TYPE_COUNTDOWN, TYPE_LONG, TYPE_SHORT } from '../actions/timer_actions';

const initialState = {
  seconds: 0,
  status: 'stopped',
  type: 'timer',
  interval: null,
}

function getSeconds(t) {
  if (t === 'countdown'){
    return 25 * 60;
  } else if (t === 'long'){
    return 10 * 60;
  } else if (t === 'short'){
    return 5 * 60;
  } else {
    return 0;
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TIMER_START:
    if (state.status === 'started') {
      return state;
    }
      return {
        ...state,
        type: state.type,
        status: 'started',
        interval: action.interval
      };
    case TIMER_PAUSE:
      return  {
        ...state,
        type: state.type,
        status: 'paused',
        interval: null
      };
    case TIMER_RESET:
    const t = state.type;
      return {
        type: t,
        status: 'stopped',
        seconds: getSeconds(t),
        interval: null,
      };
    case TIMER_TICK:
      return {
        ...state,
        seconds: state.seconds + 1
      };
    case COUNTDOWN_TICK:
    const newState = state.seconds - 1
      return {
        ...state,
        seconds: newState
      };
    case TYPE_TIMER:
      return initialState;
    case TYPE_COUNTDOWN:
      return {
        seconds: 1500,
        status: 'stopped',
        type: 'countdown',
      }
    case TYPE_LONG:
      return {
        seconds: 600,
        status: 'stopped',
        type: 'long',
      }
    case TYPE_SHORT:
      return {
        seconds: 300,
        status: 'stopped',
        type: 'short',
      }
    default:
    return state
  }
}
