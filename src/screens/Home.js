import React from 'react';
import {View, Text, Alert, Button} from 'react-native';
import CustomTopBar from '../components/CustomTopBar';
import {menu} from '../Constant';
import {pushToScreen, setSideMenuVisibility} from '../functions/myNavigation';
import StaggeredView from './StaggeredView';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

const Home = (Props) => {

    return (
        <View>

            <CustomTopBar icon={menu}
                          onBtnClick={() =>
                              setSideMenuVisibility(Props.componentId,
                                  true, true)}/>

            <View style={{
                width: responsiveWidth(50),
                marginTop: responsiveHeight(10),
                alignSelf:'center'
            }}>

                <Button title='Learn flexBox'

                        onPress={() =>
                            pushToScreen('myHomeId',
                                'myStaggeredView',
                                null, false, true)}/>
            </View>


        </View>
    );
};
export default Home;
