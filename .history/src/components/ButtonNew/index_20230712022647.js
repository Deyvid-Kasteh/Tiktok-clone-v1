import { View, StyleSheet, Text } from "react-native";
import { Entypo } from '@expo/vector-icons'


export function ButtonNew( { size } ) {
  return (
    <View styles={styles.container}>
      <Entypo name="plus" size={size} color="blacl" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
