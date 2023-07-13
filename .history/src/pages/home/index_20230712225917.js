import { View, StyleSheet, Text } from 'react-native'

export function Home() {
    return (
        <View style={styles.container}>
            <View>Página home</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c8ff00'
    }
})