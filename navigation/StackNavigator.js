import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreens() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{title:""}}/>
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreens}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="black" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "black" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="black" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
