import { View, StyleSheet, Text } from 'react-native'

export function () {
    return (
        <View styles={styles.container}>
            <Text>Página home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})