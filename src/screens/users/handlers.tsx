// Calling api's
export function callGetUsersApi(
  requestObj: object,
  dispatch: any,
  getUsersRequestDataAction: any,
) {
  let requestData = requestObj;
  dispatch(getUsersRequestDataAction(requestData));
}