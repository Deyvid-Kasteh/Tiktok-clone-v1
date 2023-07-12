import { View, StyleSheet, Text } from "react-native";

export function Butt() {
  return (
    <View styles={styles.container}>
      <Text>Página Butt</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
