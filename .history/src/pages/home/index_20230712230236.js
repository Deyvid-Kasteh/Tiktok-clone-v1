import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export function Home() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <Text>Página Mensagens</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c8ff00'
    }
})