import { useRef, useState } from "react";
import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native";

import { Audio, Video } from "expo-av";

const { height: heightScreen } = Dimensions.get("screen");

export function FeedIdem({ data }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  function handlePlayer() {
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync();
  }
  return (
    <Pressable onPress={handlePlayer}>
      <View style={[styles.info,
        {
          bottom: 110
      }]}>
        <Text style={styles.name}>{data?.name}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {data?.description}
        </Text>
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
    fontWeight: 'bold',
    marginBottom: 4,
    textShadowColor: '#000000',
    textShadowOffset: { width: -3, height: 1.5 },
    textShadowRadius: 1
  },
  description: {
    color: "white",
    marginRight: 14,
  },
});
