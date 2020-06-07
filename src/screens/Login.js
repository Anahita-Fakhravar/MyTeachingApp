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
            <View style={{width: 300, marginTop: 10}}>
                <Button
                    title={'Press me'}
                    color={Colors.btnColor}
                    onPress={() => onClick('Button')}
                />
            </View>
            <TouchableHighlight
                onPress={() => onClick('TouchableHighlight')}
                activeOpacity={0.5}
                underlayColor={Colors.txtColor}
                style={{width: 300, marginTop: 10}}>
                <Text style={{
                    backgroundColor: Colors.btnColor,
                    color: '#fff',
                    padding: 10,
                    textAlign: 'center',
                    borderRadius: 10
                }}>Press me</Text>
            </TouchableHighlight>

            <View style={{width: 300, marginTop: 10}}>

                <TouchableWithoutFeedback
                    onPress={() => onClick('TouchableWithoutFeedback')}>
                    <Text style={{
                        backgroundColor: Colors.btnColor,
                        color: '#fff',
                        padding: 10,
                        textAlign: 'center',
                        borderRadius: 10
                    }}>Press me</Text>
                </TouchableWithoutFeedback>

            </View>

            <TouchableOpacity
                style={{width: 300, marginTop: 10}}
                onPress={() => onClick('TouchableOpacity')}>
                <Text style={{
                    backgroundColor: Colors.btnColor,
                    color: '#fff',
                    padding: 10,
                    textAlign: 'center',
                    borderRadius: 10
                }}>Press me</Text>
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
