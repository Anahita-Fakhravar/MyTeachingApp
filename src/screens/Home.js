import React from 'react';
import {View, Text, Alert, Button} from 'react-native';
import CustomTopBar from '../components/CustomTopBar';
import {menu} from '../Constant';
import {pushToScreen, setSideMenuVisibility} from '../functions/myNavigation';
import StaggeredView from './StaggeredView';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

const Home = (Props) => {

    return (
        <View style={{flex:1}}>

            <CustomTopBar icon={menu}
                          onBtnClick={() =>
                              setSideMenuVisibility(Props.componentId,
                                  true, true)}/>

           <StaggeredView/>

        </View>
    );
};
export default Home;
