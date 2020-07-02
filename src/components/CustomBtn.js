import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Strings} from '../assets/Strings';
import {responsiveFontSize, responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {Colors} from '../assets/Colors';
import {myFontFamily} from '../Constant';

const CustomBtn = (Props)=>{

    return(
        <TouchableOpacity
            style={styles.btn}
            onPress={Props.BtnOnPress}>
            <Text style={styles.btnTxt}>{Props.BtnTitle}</Text>
        </TouchableOpacity>
    )
};
export default CustomBtn

const styles = StyleSheet.create({

    btn:{
        width: responsiveWidth(60),
        marginTop: responsiveHeight(4)},
    btnTxt:{
        backgroundColor: Colors.btnColor,
        color: Colors.btnTxtColor,
        padding: responsiveWidth(2),
        textAlign: 'center',
        fontSize:responsiveFontSize(1.8),
        borderRadius: responsiveWidth(3),
        fontFamily:myFontFamily.regular
    },

});
