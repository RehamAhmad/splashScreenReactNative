import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native'

export class Splash extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.Container}
                onPress={this.props.onPress} >
                <Image style={{ height: 300, width: 250 }} source={require('../assets/images/roar_r_logo_1.png')} />
            </TouchableOpacity >
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#3d3d3d',
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
})