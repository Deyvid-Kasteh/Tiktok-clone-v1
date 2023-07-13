import { View, StyleSheet, Text } from "react-native";

export function FeedIdem({data}) {
  return (
    <Pre>
      <Text style={{ color: "white" }}>{data.name}</Text>
    </Pre>
  );
}

const styles = StyleSheet.create({

});
