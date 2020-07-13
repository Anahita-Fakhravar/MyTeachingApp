import {Navigation} from 'react-native-navigation';

export const pushToScreen = (componentId, screenName, data) => {
    Navigation.push(componentId, {
        component: {
            name: screenName,
            passProps: {
                myComponentId: componentId,
                userName: data,
            },
            options:{
                topBar:{
                    visible:false
                }
            }
        },
    });
};
