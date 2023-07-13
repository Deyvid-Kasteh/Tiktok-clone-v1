import { Pressable } from "react-native";
import { View, StyleSheet, Text, Pressable } from "react-native";

export function FeedIdem({data}) {
  return (
    <Pressable>
      <Text style={{ color: "white" }}>{data.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({

});
