import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {close} from '../Constant';
import {pushToScreen, setSideMenuVisibility} from '../functions/myNavigation';
import {Colors} from '../assets/Colors';

const SideMenu = (Props) => {
    return (
        <View style={{backgroundColor: 'red', flex: 1}}>

            <TouchableOpacity onPress={()=>
                setSideMenuVisibility(Props.componentId,false,true)}
                style={{
                marginHorizontal: responsiveWidth(4),
                marginVertical:responsiveHeight(2)
            }}>

                <Image style={{
                    width: responsiveWidth(5),
                    height: responsiveWidth(5),

                }} source={close}/>

            </TouchableOpacity>

            <TouchableOpacity onPress={()=>pushToScreen('myHomeId','myLogin')}>
                <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SideMenu;
