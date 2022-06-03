import {CommonActions} from '@react-navigation/native';
import moment from 'moment';

/**
 * Navigate to route
 * @param {NavigationNavigateActionPayload} params
 */
export const navigate = (navigation: any, screen: any) => {
  navigation.navigate(screen);
};

/**
 * Navigate to route
 * @param {NavigationNavigateActionPayload} params
 */
export const navigateWithParams = (
  navigation: any,
  screen: any,
  params: any,
) => {
  navigation.navigate(screen, params);
};

/**
 * Navigate back to previous route in history
 */
export const back = (navigation: any) => {
  navigation.goBack();
};

/* Clear Stack */
export const clearStack = (navigation: any, screenName: any) => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: screenName}],
  });
  navigation.dispatch(resetAction);
};

export const convertDateTimeFormate = (date: any) => {
  var dt = date;
  return moment(dt).format('DD MMM YYYY'); //basically you can do all
};

export const timeSince = date => {
  date = new Date(date);
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return moment(date).format('MMMM DD, YYYY');
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return moment(date).format('MMMM DD, YYYY');
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes';
  }
  return Math.floor(seconds) + ' seconds';
};
