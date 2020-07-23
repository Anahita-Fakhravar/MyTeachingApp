//Side menu design

import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {close, sideMenuImg} from '../Constant';
import {pushToScreen, setSideMenuVisibility} from '../functions/myNavigation';
import {Strings} from '../assets/Strings';
import {Colors} from '../assets/Colors';

const SideMenu = (Props) => {

    const _menuItem = (screenName, title) => {

        return (

            <TouchableOpacity
                onPress={() =>
                    pushToScreen('myHomeId', screenName, null,
                        false, false)}>
                <Text style={SideMenuStyles.itemTxt}>{title}</Text>

            </TouchableOpacity>
        );
    };

    return (

        <View style={SideMenuStyles.container}>

            <TouchableOpacity style={SideMenuStyles.closeBtn} onPress={() =>
                setSideMenuVisibility(Props.componentId, false, true)}>

                <Image style={SideMenuStyles.closeImg} source={close}/>

            </TouchableOpacity>

            <Image style={SideMenuStyles.img} source={sideMenuImg}/>

            {_menuItem('myLogin', Strings.login)}

            {_menuItem('myLogin', Strings.foodMenu)}
            {_menuItem('myLogin', Strings.contactUs)}
            {_menuItem('myLogin', Strings.aboutUs)}

        </View>
    );
};

export default SideMenu;

const SideMenuStyles = StyleSheet.create({

    container: {
        backgroundColor: Colors.darkTheme,
        flex: 1,
        borderTopRightRadius:responsiveWidth(4),
        borderBottomRightRadius:responsiveWidth(4),
        width:responsiveWidth(50),
    },
    closeBtn: {
        marginHorizontal: responsiveWidth(4),
        marginVertical: responsiveHeight(2),
    },
    closeImg: {
        width: responsiveWidth(4),
        height: responsiveWidth(4),
    },
    itemTxt: {
        marginBottom:responsiveHeight(3),
        color: Colors.txtOnDarkTheme,
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    img:{
        marginTop:responsiveHeight(5),
        marginBottom:responsiveHeight(1),
        width:responsiveWidth(20),
        height:responsiveWidth(20),
        resizeMode: 'contain',
        alignSelf: 'center'
    }
});
