import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {Colors} from '../assets/Colors';
import {menu} from '../Constant';

const CustomTopBar = ({icon, onBtnClick}) => {

    return (
        <View style={topBarStyles.container}>

            <TouchableOpacity onPress={onBtnClick}>
                <Image style={topBarStyles.img} source={icon}/>
            </TouchableOpacity>

        </View>
    );

};

export default CustomTopBar;

const topBarStyles = StyleSheet.create({

    container: {
        height: responsiveHeight(10),
        backgroundColor: Colors.btnColor,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(4),
    },
    img: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
    },
});
