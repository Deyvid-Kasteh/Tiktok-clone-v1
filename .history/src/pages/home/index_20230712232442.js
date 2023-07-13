import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export function Home() {
    return (
      <View style={styles.container}>
        <View style={styles.labels}>
          <TouchableOpacity>
            <Text style={styles.labelText}>Seguindo</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.labelText}>Pra você</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  labels: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
  },
    labelText: {
      color: 'white'
  },
});