/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import SideMenu from './src/screens/SideMenu';
import StaggeredView from './src/screens/StaggeredView';

Navigation.registerComponent('myLogin', () => Login);
Navigation.registerComponent('myHome', () => Home);
Navigation.registerComponent('mySideMenu', () => SideMenu);
Navigation.registerComponent('myStaggeredView', () => StaggeredView);

Navigation.events().registerAppLaunchedListener(() => {

    Navigation.setRoot({
        root: {
           sideMenu:{
               center:{
                   stack: {
                       children: [
                           {
                               component: {
                                   id:'myHomeId',
                                   name: 'myHome',
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
    Navigation.setDefaultOptions({
        topBar: {
            visible: false,
        },
    })
});
