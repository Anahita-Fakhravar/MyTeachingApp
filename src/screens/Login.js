//Design login page
import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image,
    TextInput,
    Alert,
    TouchableOpacity,

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

const Login = () => {

    const [changeColor,setChangeColor] = useState(false);

    function onClick(title) {

        setChangeColor(!changeColor);
    }

    return (

        <View style={styles.container}>
            <Image style={styles.img}
                   source={loginImg}/>
            <Text style={styles.welcomeTxt}>{Strings.welcomeTxt}</Text>
            <TextInput style={styles.txtInput}
                       placeholder={Strings.txtHint}
                       secureTextEntry={false}
                       multiline={true}
                       autocorrect={false}
            />

            <CustomBtn BtnOnPress={() => onClick('btn')}
                       BtnTitle={Strings.enter}/>

            <View style={{
                marginTop:responsiveHeight(1),
                backgroundColor: changeColor ? 'red' : 'blue',
                width: responsiveWidth(20),
                height: responsiveHeight(10)}}/>


        </View>
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
