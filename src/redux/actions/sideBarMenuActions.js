import * as actionTypes from "./actionTypes";
import { history } from "../../utils/history";

export function SchedulesListManagementLinkSuccess() {
  return {
    type: actionTypes.SCHEDULES_LIST_MANAGEMENET_LINK,
    payload: "scheduleListLink",
  };
}

export function InputCoilManagementLinkSuccess() {
  return {
    type: actionTypes.SCHEDULES_LIST_MANAGEMENET_LINK,
    payload: "inputCoilLink",
  };
}

export function ProducedCoilManagementLinkSuccess() {
  return {
    type: actionTypes.SCHEDULES_LIST_MANAGEMENET_LINK,
    payload: "producedCoilLink",
  };
}

export function LineStoppageLinkSuccess() {
  return {
    type: actionTypes.SCHEDULES_LIST_MANAGEMENET_LINK,
    payload: "lineStoppageLink",
  };
}

export function SchedulesListManagementLink() {
  return function (dispatch) {
    history.push("/homepage/scheduleslist");
    return dispatch(SchedulesListManagementLinkSuccess());
  };
}

export function InputCoilManagementLink() {
  return function (dispatch) {
    history.push("/homepage/inputcoil");
    return dispatch(InputCoilManagementLinkSuccess());
  };
}

export function ProducedCoilManagementLink() {
  return function (dispatch) {
    history.push("/homepage/producedcoil");
    return dispatch(ProducedCoilManagementLinkSuccess());
  };
}

export function LineStoppageLink() {
  return function (dispatch) {
    history.push("/homepage/linestoppage");
    return dispatch(LineStoppageLinkSuccess());
  };
}
