import { View, StyleSheet, Text } from "react-native";

export function Feed() {
  return (
    <View style={styles.container}>
      <Text>Página Mensagens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00eeff",
  },
});