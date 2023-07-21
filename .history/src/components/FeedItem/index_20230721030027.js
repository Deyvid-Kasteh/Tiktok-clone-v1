import { useRef, useState } from "react";
import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native";
import { Audio, Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Platform } from "react-native";

const { height: heightScreen } = Dimensions.get("screen");

export function FeedIdem({ data }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  function handlePlayer() {
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync();
  }
  return (
    <Pressable onPress={handlePlayer}>
      <View
        style={[
          styles.info,
          {
            bottom: 110,
          },
        ]}
      >
        <Text style={styles.name}>{data?.name}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {data?.description}
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="heart" size={35} color="white" />
          <Text style={styles.actionText}>30.3k</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubble-ellipses" size={35} color="white" />
          <Text style={styles.actionText}>23</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="bookmark" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <Video
        ref={video}
        style={{ width: "100%", height: heightScreen }}
        source={{ uri: data?.video }}
        resizeMode="cover"
        shouldPlay={false}
        isMuted={false}
        isLooping={true}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  info: {
    position: "absolute",
    zIndex: 99,
    left: 8,
    padding: 8,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 4,
    textShadowColor: "#000000",
    textShadowOffset: { width: -3, height: 1.5 },
    textShadowRadius: 8,
  },
  description: {
    color: "white",
    marginRight: 14,
    textShadowColor: "#000000",
    textShadowOffset: { width: -3, height: 1.5 },
    textShadowRadius: 8,
  },
  action: {
    position: "absolute",
    zIndex: 99,
    right: 8,
    bottom: Platform.OS === "android"
  }
});
