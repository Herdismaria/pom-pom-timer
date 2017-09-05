// action type constants
export const TIMER_START = 'TIMER_START';
export const TIMER_TICK = 'TIMER_TICK';
export const COUNTDOWN_TICK = 'COUNTDOWN_TICK';
export const TIMER_PAUSE = 'TIMER_PAUSE';
export const TIMER_RESET = 'TIMER_RESET';
export const TYPE_TIMER = 'TYPE_TIMER';
export const TYPE_COUNTDOWN = 'TYPE_COUNTDOWN';
export const TYPE_LONG = 'TYPE_LONG';
export const TYPE_SHORT = 'TYPE_SHORT';

// action creators
export const start = (timerType) => ({ type: 'TIMER_START', timerType });
export const timerTick = () => ({ type: 'TIMER_TICK' });
export const countdownTick = () => ({ type: 'COUNTDOWN_TICK' });
export const pause = (interval) => ({ type: 'TIMER_PAUSE', interval });
export const reset = (interval) => ({ type: 'TIMER_RESET', interval });
export const setTypeTimer = () => ({ type: 'TYPE_TIMER'});
export const setTypeCountdown = () => ({ type: 'TYPE_COUNTDOWN'});
export const setTypeLong = () => ({ type: 'TYPE_LONG'});
export const setTypeShort = () => ({ type: 'TYPE_SHORT'});
