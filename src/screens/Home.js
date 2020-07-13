import React from 'react';
import {View,Text,Alert} from 'react-native';
import CustomTopBar from '../components/CustomTopBar';
import {menu} from '../Constant';
import {setSideMenuVisibility} from '../functions/myNavigation';

const Home = (Props)=>{

    return (
        <View>
            <CustomTopBar icon={menu}
                          onBtnClick={()=>
                              setSideMenuVisibility(Props.componentId,
                                  true,true)} />
            <Text>{Props.userName}</Text>
        </View>
    )
};
 export default Home
