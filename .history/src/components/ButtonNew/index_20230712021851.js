import { View, StyleSheet, Text } from "react-native";

export function Button() {
  return (
    <View styles={styles.container}>
      <Text>Página Button</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
