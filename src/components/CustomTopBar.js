import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {Colors} from '../assets/Colors';

const CustomTopBar = () => {

    return (
        <View style={topBarStyles.container}>
            <Text>Top bar</Text>
        </View>
    );

};

export default CustomTopBar;

const topBarStyles = StyleSheet.create({

    container: {
        height: responsiveHeight(10),
        backgroundColor: Colors.btnColor,
    },
});
