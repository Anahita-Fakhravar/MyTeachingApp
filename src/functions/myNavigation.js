//Navigation functions

import {Navigation} from 'react-native-navigation';

export const pushToScreen = (componentId, screenName, data, visibility, enable) => {
    Navigation.push(componentId, {
        component: {
            name: screenName,
            passProps: {
                myComponentId: componentId,
                userName: data,
            },
            options: {
                sideMenu: {
                    left: {
                        visible: visibility,
                        enabled: enable,
                    },
                },
            },
        },
    });
};

export const setSideMenuVisibility = (componentId, visible, enable) => {

    Navigation.mergeOptions(componentId, {

        sideMenu: {
            left: {
                visible: visible,
                enabled: enable,
            },
        },
    });

};
