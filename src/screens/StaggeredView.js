import React from 'react';
import {View, Text} from 'react-native';

const StaggeredView = () => {


    return (
        <View style={{backgroundColor:'yellow',
            flex:1,
            flexDirection:'row-reverse'
        }}>
            <Text style={{backgroundColor:'green',flex:1}}>100</Text>
            <Text style={{backgroundColor:'blue',flex:1}}>100</Text>
            <Text style={{backgroundColor:'red',flex:2}}>100</Text>
        </View>
    );
};
export default StaggeredView;
