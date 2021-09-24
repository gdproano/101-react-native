import React, { Component } from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'

export default class digimon extends Component {
    render() {
        const { digimon } = this.props;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: digimon.img,
                    }}
                />
                <Text style={styles.textFields}>{digimon.name}</Text>
                <Text style={styles.textFields}>{digimon.level}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 100,
        height: 100,
    },
    container:{ flex: 1, height: 180, backgroundColor: '#fafafa', margin: 4 },
    textFields:{ flex: 1, color: 'black', height: 180 }
})
