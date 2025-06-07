import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import PlayMenuScreen from "../screens/PlayMenuScreen";
import ClubManagementScreen from "../screens/ClubManagementScreen";
import NationalTeamScreen from "../screens/NationalTeamScreen";
import PlayerDevelopmentScreen from "../screens/PlayerDevelopmentScreen";
import TournamentScreen from "../screens/TournamentScreen";
import AnalyticsOverviewScreen from "../screens/AnalyticsOverviewScreen";
import TeamAnalyticsScreen from "../screens/TeamAnalyticsScreen";
import PlayerAnalyticsScreen from "../screens/PlayerAnalyticsScreen";
import OpponentAnalyticsScreen from "../screens/OpponentAnalyticsScreen";
import TradeDraftAnalysisScreen from "../screens/TradeDraftAnalysisScreen";
import HistoryOverviewScreen from "../screens/HistoryOverviewScreen";
import ClubHistoryScreen from "../screens/ClubHistoryScreen";
import NationalHistoryScreen from "../screens/NationalHistoryScreen";
import MilestonesScreen from "../screens/MilestonesScreen";
import HallOfRecordsScreen from "../screens/HallOfRecordsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AboutScreen from "../screens/AboutScreen";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MoreDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HallOfRecordsScreen">
      <Drawer.Screen name="HallOfRecordsScreen" component={HallOfRecordsScreen} options={{ title: "Hall of Records" }} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: "Settings" }} />
      <Drawer.Screen name="AboutScreen" component={AboutScreen} options={{ title: "About" }} />
    </Drawer.Navigator>
  );
}

function PlayStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PlayMenuScreen" component={PlayMenuScreen} options={{ title: "Play" }} />
      <Stack.Screen name="ClubManagementScreen" component={ClubManagementScreen} options={{ title: "Club Management" }} />
      <Stack.Screen name="NationalTeamScreen" component={NationalTeamScreen} options={{ title: "National Team" }} />
      <Stack.Screen name="PlayerDevelopmentScreen" component={PlayerDevelopmentScreen} options={{ title: "Player Development" }} />
      <Stack.Screen name="TournamentScreen" component={TournamentScreen} options={{ title: "Tournaments" }} />
    </Stack.Navigator>
  );
}

function AnalyticsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AnalyticsOverviewScreen" component={AnalyticsOverviewScreen} options={{ title: "Analytics" }} />
      <Stack.Screen name="TeamAnalyticsScreen" component={TeamAnalyticsScreen} options={{ title: "Team Analytics" }} />
      <Stack.Screen name="PlayerAnalyticsScreen" component={PlayerAnalyticsScreen} options={{ title: "Player Analytics" }} />
      <Stack.Screen name="OpponentAnalyticsScreen" component={OpponentAnalyticsScreen} options={{ title: "Opponent Analytics" }} />
      <Stack.Screen name="TradeDraftAnalysisScreen" component={TradeDraftAnalysisScreen} options={{ title: "Trade/Draft Analysis" }} />
    </Stack.Navigator>
  );
}

function HistoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HistoryOverviewScreen" component={HistoryOverviewScreen} options={{ title: "History" }} />
      <Stack.Screen name="ClubHistoryScreen" component={ClubHistoryScreen} options={{ title: "Club History" }} />
      <Stack.Screen name="NationalHistoryScreen" component={NationalHistoryScreen} options={{ title: "National History" }} />
      <Stack.Screen name="MilestonesScreen" component={MilestonesScreen} options={{ title: "Milestones" }} />
    </Stack.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#27509b",
        tabBarInactiveTintColor: "#888",
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "HomeTab":
              iconName = "home";
              break;
            case "PlayTab":
              iconName = "basketball";
              break;
            case "AnalyticsTab":
              iconName = "bar-chart";
              break;
            case "HistoryTab":
              iconName = "trophy";
              break;
            case "MoreTab":
              iconName = "menu";
              break;
            default:
              iconName = "ellipse";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: "Home" }} />
      <Tab.Screen name="PlayTab" component={PlayStack} options={{ title: "Play" }} />
      <Tab.Screen name="AnalyticsTab" component={AnalyticsStack} options={{ title: "Analytics" }} />
      <Tab.Screen name="HistoryTab" component={HistoryStack} options={{ title: "History" }} />
      <Tab.Screen name="MoreTab" component={MoreDrawer} options={{ title: "More" }} />
    </Tab.Navigator>
  );
}