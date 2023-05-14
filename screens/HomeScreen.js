import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text>Hello Manasseh</Text>,
      headerStyle: {
        backgroundColor: "#f5f5f5",
        shadowOpacity: 0.3,
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 3,
      },
      headerRight: () => (
        <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Ionicons name="ios-location-outline" size={24} color="black" />
        </Pressable>
      ),
    });
  });
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
