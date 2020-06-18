import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TextInput,
    Button,
    Alert,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableOpacity,

} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import {Strings} from '../assets/Strings';
import {Colors} from '../assets/Colors';
import {loginImg, myFontFamily} from '../Constant';

const Login = () => {

    function onClick(title) {

        Alert.alert(title, 'You pressed me!');
    }

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

            <TouchableOpacity
                style={styles.btn}
                onPress={() => onClick('TouchableOpacity')}>
                <Text style={styles.btnTxt}>{Strings.enter}</Text>
            </TouchableOpacity>

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
        fontSize: responsiveFontSize(2.5),
        fontFamily: myFontFamily.regular,
    },
    img: {
        width: responsiveWidth(40),
        height: responsiveHeight(30),
        resizeMode: 'contain'
    },
    txtInput: {
        borderWidth: 0.5,
        borderColor: Colors.borderColor,
        borderRadius: responsiveWidth(3),
        paddingVertical: 5,
        width: responsiveWidth(80),
        paddingHorizontal: responsiveWidth(3),
    },
    btn:{width: responsiveWidth(60), marginTop: responsiveHeight(4)},
    btnTxt:{
        backgroundColor: Colors.btnColor,
        color: Colors.btnTxtColor,
        padding: responsiveWidth(2),
        textAlign: 'center',
        borderRadius: responsiveWidth(3)
    },

});

export default Login;
