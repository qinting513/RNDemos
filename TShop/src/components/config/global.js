'use strict';

import {Dimensions, Platform} from 'react-native';

export function isIphoneX() {
    return true;
}

export default module = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    primaryColor: '#EE0000',
    lightGray: '#f5f5f5',
    lightBlack: '#333333',

    actionBar: {
        height: Platform.OS === 'android' ? 56 : 44,
        backgroundColor: '#fff',
    },
    // 顶部状态栏
    barContentPad: (Platform.OS === 'android' ? 0 : (isIphoneX() ? 42 : 20)),
    bottomPadding: isIphoneX() ? 18 : 0,
}

