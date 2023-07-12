import { View, StyleSheet, Text } from "react-native";
import { Entypo } from '@expo/vector-icons'


export function ButtonNew( { size } ) {
  return (
      <View style={styles.container}>
          
      <Entypo name="plus" size={size} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        borderLeftWidth: 4,
        borderLeftColor: '#1ebfc7',
        borderWidth: 4,
        borderRightColor: '#f43071',
        borderRadius: 6,

  },
});
