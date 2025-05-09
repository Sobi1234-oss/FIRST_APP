import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-reanimated';
import 'react-native-gesture-handler';
import SplashScreen from './src/components/screens/SplahScreen';
import SplashScreen2 from './src/components/screens/SplashScreen2';
import Login from './src/components/screens/Login';
import HomeScreen from './src/components/screens/HomeScreen';
import Items from './src/components/screens/Items';
import Profile from './src/components/screens/Profile';
import Add from './src/components/screens/Add';
import one from './src/components/screens/one';
import two from './src/components/screens/two';
import AddToDo from './src/components/screens/AddToDo';
import ShowTodo from './src/components/screens/ShowTodo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const ProfileDrawer = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Items" component={Items} />
  </Drawer.Navigator>
);


const HomeDrawer = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Items" component={Items} />
  </Drawer.Navigator>
);


const ZustandTab = () => {
  const ZustandStack = createStackNavigator();

  return (
    <ZustandStack.Navigator>
      <ZustandStack.Screen name="one" component={one} />
      <ZustandStack.Screen name="two" component={two} />
    </ZustandStack.Navigator>
  );
};


const ZustandTask2 = () => {
  const Task2Stack = createStackNavigator();

  return (
    <Task2Stack.Navigator>
      <Task2Stack.Screen name="AddTodo" component={AddToDo} />
      <Task2Stack.Screen name="ShowTodo" component={ShowTodo} />
    </Task2Stack.Navigator>
  );
};


const MainApp = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelPosition: 'below-icon',
      tabBarShowLabel: true,
      tabBarActiveTintColor: 'purple',
      tabBarInactiveTintColor: 'grey',
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeDrawer}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Categories"
      component={Items}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="list" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileDrawer}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Add products"
      component={Add}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="add" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Zustand"
      component={ZustandTab}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="sync" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Zustand Task 2"
      component={ZustandTask2}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="checkmark-done-outline" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);


const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Add" component={Add} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
