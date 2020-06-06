import React from 'react';
import {Text, StyleSheet, View, Image, TextInput} from 'react-native';
import {Strings} from '../assets/Strings';
import {Colors} from '../assets/Colors';
import {loginImg, myFontFamily} from '../Constant';

const Login = () => {

    return (

        <View style={styles.container}>
            <Image style={styles.img}
                   source={loginImg}/>
            <Text style={styles.welcomeTxt}>{Strings.welcomeTxt}</Text>
            <TextInput style={styles.txtInput}
                       placeholder={Strings.txtHint}
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

    container: {
        alignItems: 'center',
    },
    welcomeTxt: {
        color: Colors.txtColor,
        fontSize: 20,
        fontFamily: myFontFamily.regular,
    },
    img: {
        width: 150,
        height: 150,
    },
    txtInput: {
        borderWidth: 0.5,
        borderColor: Colors.borderColor,
        borderRadius: 10,
        paddingVertical: 5,
        width: 300,
        paddingHorizontal: 10,
    },

});

export default Login;
