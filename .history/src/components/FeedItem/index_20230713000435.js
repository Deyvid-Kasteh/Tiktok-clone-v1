import { View, StyleSheet, Text } from "react-native";

export function FeedIdem({data}) {
  return (
    <View>
      <Text style={{ color: "white" }}>{data.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
