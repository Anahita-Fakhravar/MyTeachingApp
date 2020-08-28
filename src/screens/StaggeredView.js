//StaggeredView
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../assets/Colors';
import {deliciousImg, deliveryImg, healthyFoodImg, romanticImg} from '../Constant';
import {Strings} from '../assets/Strings';
import {responsiveFontSize, responsiveHeight} from 'react-native-responsive-dimensions';


const StaggeredView = () => {

    const _staggered = (flexAmount, backColor, img, title) => {

        return (

            <View style={{
                flex: flexAmount,
                backgroundColor: backColor,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <Image source={img} style={{
                    flex: 0.7,
                    resizeMode: 'contain',
                }}/>

                <Text style={{
                    color: Colors.txtOnDarkTheme,
                    fontWeight: 'bold',
                    fontSize:responsiveFontSize(1.8)
                }}>{title}</Text>

            </View>
        );
    };

    return (

        <View style={styles.container}>

            <View style={styles.innerView}>

                {_staggered(0.36, Colors.stagTheme1
                    ,deliveryImg,Strings.delivery)}
                {_staggered(0.56, Colors.stagTheme4
                ,healthyFoodImg,Strings.healthy)}

            </View>

            <View style={styles.innerView}>

                {_staggered(0.56, Colors.stagTheme3,
                    romanticImg,Strings.romantic)}
                {_staggered(0.36,   Colors.stagTheme2
                    ,deliciousImg,Strings.delicious)}

            </View>

        </View>
    );
};
export default StaggeredView;

const styles = StyleSheet.create({

    container: {
        marginTop:responsiveHeight(2),
        flex: 0.4,
        justifyContent: 'space-around',
    },
    innerView: {
        flex: 0.46,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

});
