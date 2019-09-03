import React from 'react';
import { Text, View, Image } from 'react-native'


export default class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ alignItens: 'center' }}>
                   <Image source={require('../assets/profile.png')}
                   style={{height:300,width:300,margin:50}}></Image>
                </View>
            </View>
        );
    }
}
