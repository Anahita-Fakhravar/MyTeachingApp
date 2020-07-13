import React from 'react';
import {View,Text} from 'react-native';
import CustomTopBar from '../components/CustomTopBar';

const Home = (Props)=>{

    return (
        <View>
            <CustomTopBar/>
            <Text>{Props.userName}</Text>
        </View>
    )
};
 export default Home
