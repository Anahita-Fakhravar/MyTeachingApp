import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Strings} from '../assets/Strings';
import {Colors} from '../assets/Colors';
import {loginImg, myFontFamily} from '../Constant';

const Login = () => {

    return (
        <View>
            <Image style={{
                width: 150,
                height: 150,
            }}
                   source={loginImg}/>
            <Image style={{
                width: 150,
                height: 150,
                resizeMode:'repeat'
            }}
                   source={{uri:'https://i.pinimg.com/564x/f3/45/35/f3453532acec383c3e36b140cd0c8c14.jpg'}}/>
            <Text style={styles.welcomeTxt}>{Strings.welcomeTxt}</Text>
        </View>
    )

        ;
};
const styles = StyleSheet.create({

    welcomeTxt: {
        color: Colors.txtColor,
        fontSize: 20,
        fontFamily: myFontFamily.regular,
    },

});

export default Login;
