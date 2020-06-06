import React from 'react';
import {Text, StyleSheet, View, Image,TextInput} from 'react-native';
import {Strings} from '../assets/Strings';
import {Colors} from '../assets/Colors';
import {loginImg, myFontFamily} from '../Constant';

const Login = () => {

    return (
        <View style={{alignItems:'center'}}>
            <Image style={{
                width: 150,
                height: 150,
            }}
                   source={loginImg}/>
            <Text style={styles.welcomeTxt}>{Strings.welcomeTxt}</Text>
            <TextInput style={{
                borderWidth: 0.5,
                borderColor:Colors.txtColor,
                borderRadius:10,
                paddingVertical:5,
                width:300,
                paddingHorizontal:10
            }}
                       placeholder={'Enter your name...'}
                       secureTextEntry={false}
                       keyboardType='email-address'
                       multiline={true}
                       maxLength={10}
                       autocorrect={false}
            />
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
