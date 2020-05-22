/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Login from './src/screens/Login';

Navigation.registerComponent('myLogin', () => Login);
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'myLogin',
                        },
                    },
                ],
            },
        },
    });
});
