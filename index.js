/**
 * @format
 */

// @flow

export { BleError, BleErrorCode, BleAndroidErrorCode, BleIOSErrorCode, BleATTErrorCode } from './src/BleError'
export { BleManager } from './src/BleManager'
export { Device } from './src/Device'
export { Service } from './src/Service'
export { Characteristic } from './src/Characteristic'
export { Descriptor } from './src/Descriptor'
export { fullUUID } from './src/Utils'
export { State, LogLevel, ConnectionPriority, ScanCallbackType, ScanMode } from './src/TypeDefinition'

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
export type {
    Subscription,
    DeviceId,
    UUID,
    TransactionId,
    Base64,
    ScanOptions,
    ConnectionOptions,
    BleManagerOptions,
    BleRestoredState
  } from './src/TypeDefinition'

AppRegistry.registerComponent(appName, () => App);
