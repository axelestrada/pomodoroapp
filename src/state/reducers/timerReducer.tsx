import { TIMER } from "../ActionTypes";
import { ITimer, StateActions } from "../interfaces";

const timerReducer = (timer: ITimer, action: StateActions) => {
  switch (action.type) {
    case TIMER:
      return { ...timer, ...action.payload };

    default:
      return timer;
  }
};

export default timerReducer;
