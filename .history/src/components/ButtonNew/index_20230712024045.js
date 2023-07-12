import { View, StyleSheet, Text } from "react-native";
import { Entypo } from '@expo/vector-icons'


export function ButtonNew( { size } ) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Entypo name="plus" size={size} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        borderLeftWidth: 4,
        borderLeftColor: '#1ebfc7',
        borderWidth: 4,
        borderRightColor: '#f43071',
        borderRadius: 10,
    },
    inner: {
        backgroundColor: 'white',
        padding: 1,
        paddingLeft: 5,
        paddingRight: 6,
        margin: 0,
    }

});
