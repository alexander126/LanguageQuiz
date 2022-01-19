import { Alert, AlertButton, Dimensions } from 'react-native';

/**
 * getDeviceWidth
 * @returns {number} - Device's scren width
 */
export const getDeviceWidth = () => Dimensions.get('window').width;

/**
 * getDeviceHeight
 * @returns {number} - Device's scren height
 */
export const getDeviceHeight = () => Dimensions.get('window').height;

/**
 * alertWrapper
 * @param {string} title - Alert title
 * @param {string} message - Alert message
 * @param {AlertButton[]} buttons - Alert button(s)
 * @param {boolean} isCancelable - Boolean
 */
export const alertWrapper = (
  title: string | 'Title',
  message?: string,
  buttons: AlertButton[] = [
    {
      text: 'OK',
    },
  ],
  isCancelable = false,
) => Alert.alert(title, message, buttons, { cancelable: isCancelable });
