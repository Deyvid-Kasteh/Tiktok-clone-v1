import { View, StyleSheet, Text } from "react-native";
import { Entypo } from '@expo/vector-icons'


export function ButtonNew() {
  return (
    <View styles={styles.container}>
      <Entypo  name="plus" size={size} color='blak'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
