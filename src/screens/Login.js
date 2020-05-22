import React from 'react';
import {Text, StyleSheet,View} from 'react-native';

const Login = () => {

    return (
        <View>
            <Text style={styles.txt}>Welcome to FoodLand</Text>
            <Text style={styles.txt1}>Welcome </Text>
        </View>
    )

        ;
};
const styles = StyleSheet.create({

    txt:{
        color:'red',
        fontSize:30,
    },
    txt1:{
        color:'green'
    }
});

export default Login;
