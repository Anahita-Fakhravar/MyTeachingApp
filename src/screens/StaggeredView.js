//StaggeredView
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

const StaggeredView = () => {


    return (

        <View style={{
            flexDirection:'row',
            flexWrap:'wrap',
            backgroundColor:'red',
            flex:1,
            justifyContent:'center',
            alignContent:'center'
        }}>

            <Text style={styles.txt}>100</Text>
            <Text style={styles.txt}>200</Text>
            <Text style={styles.txt}>300</Text>

        </View>
    );
};
export default StaggeredView;
const styles = StyleSheet.create({
    txt: {
        backgroundColor: 'black',
        color: 'white',
        width: responsiveWidth(20),
        height: responsiveHeight(12),
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: responsiveWidth(2),
        margin: responsiveWidth(2),
    },
});
