import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {Colors} from '../assets/Colors';
import {menu} from '../Constant';

const CustomTopBar = () => {

    return (
        <View style={topBarStyles.container}>
            <Image style={topBarStyles.img} source={menu}/>
        </View>
    );

};

export default CustomTopBar;

const topBarStyles = StyleSheet.create({

    container: {
        height: responsiveHeight(10),
        backgroundColor: Colors.btnColor,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        justifyContent:'center',
        paddingHorizontal:responsiveWidth(4),
    },
    img:{
        width:responsiveWidth(6),
        height: responsiveWidth(6),
    }
});
