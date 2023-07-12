import { View, StyleSheet, Text } from "react-native";

export function ButtonNew() {
  return (
    <View styles={styles.container}>
      <Text>Página ButtonNew</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
