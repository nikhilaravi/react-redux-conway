import * as types from '../constants/ActionTypes.js';

export function start(){
  return { type: types.START }
};

export function stop(){
  return { type: types.STOP }
};

export function reset(){
  return { type: types.RESET }
};
