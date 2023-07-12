import { View, StyleSheet, Text } from "react-native";

export function Buttun() {
  return (
    <View styles={styles.container}>
      <Text>Página Buttun</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
