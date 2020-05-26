import React from 'react';
import {Text, StyleSheet,View} from 'react-native';
import {Strings} from '../assets/Strings'
import {Colors} from '../assets/Colors'

const Login = () => {

    return (
        <View>
            <Text style={styles.welcomeTxt}>{Strings.welcomeTxt}</Text>
        </View>
    )

        ;
};
const styles = StyleSheet.create({

    welcomeTxt:{
        color: Colors.txtColor,
        fontSize:20,
        fontFamily:'PlayfairDisplay'
    },

});

export default Login;
