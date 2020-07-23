//Design login page
import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TextInput,
    Alert,
    KeyboardAvoidingView,
} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Strings} from '../assets/Strings';
import {Colors} from '../assets/Colors';
import {loginImg, myFontFamily} from '../Constant';
import CustomBtn from '../components/CustomBtn';
import {pushToScreen} from '../functions/myNavigation';

const Login = (Props) => {

    const [name, setName] = useState('');

    function onClick() {

        name !== '' ?
            pushToScreen(Props.componentId, 'myHome',
                name, false, true) : Alert.alert(Strings.enterYourName);

    }

    return (

        <KeyboardAvoidingView behavior='position'>

            <View style={styles.container}>

                <Image style={styles.img}
                       source={loginImg}/>

                <Text style={styles.welcomeTxt}>{Strings.welcomeTxt}</Text>

                <TextInput style={styles.txtInput}
                           placeholder={Strings.txtHint}
                           secureTextEntry={false}
                           autocorrect={false}
                           onChangeText={(value) => setName(value)}
                />

                <CustomBtn BtnOnPress={() => onClick()}
                           BtnTitle={Strings.enter}/>

            </View>
        </KeyboardAvoidingView>


    )

        ;
};
const styles = StyleSheet.create({

    container: {
        marginTop: responsiveHeight(10),
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
        resizeMode: 'contain',
    },
    txtInput: {
        marginTop: responsiveHeight(4),
        borderWidth: 0.5,
        borderColor: Colors.borderColor,
        borderRadius: responsiveWidth(3),
        paddingVertical: responsiveHeight(1),
        fontSize: responsiveFontSize(1.8),
        fontFamily: myFontFamily.regular,
        width: responsiveWidth(80),
        paddingHorizontal: responsiveWidth(3),
        color: Colors.txtColor,
    },

});

export default Login;
