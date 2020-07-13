/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import SideMenu from './src/screens/SideMenu';

Navigation.registerComponent('myLogin', () => Login);
Navigation.registerComponent('myHome', () => Home);
Navigation.registerComponent('mySideMenu', () => SideMenu);

Navigation.events().registerAppLaunchedListener(() => {

    Navigation.setRoot({
        root: {
           sideMenu:{
               center:{
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
               left:{
                   component:{
                       name:'mySideMenu'
                   }
               }
           }
        },
    });
});
