/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

Navigation.registerComponent('myLogin', () => Login);
Navigation.registerComponent('myHome', () => Home);

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'myLogin',
                            options:{
                                topBar:{
                                    visible:false
                                }
                            }
                        },
                    },
                ],
            },
        },
    });
});
