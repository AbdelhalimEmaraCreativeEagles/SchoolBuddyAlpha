import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';



import Schedual from '../screens/Schedual';
import Classes from '../screens/Classes';
import Home from '../screens/Home';
import Courses from '../screens/Courses';
import Chat from '../screens/Chat';
import Library from '../screens/Library';
import Profile from '../screens/Profile';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import EditProfile from '../screens/EditProfile'


const AppContainer = createStackNavigator(


  

  {
    //StackNavigation Screens in APP 
    EditProfile,

    default: createBottomTabNavigator(

      {
        Schedual: {
          screen: Schedual,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-calendar" size={24} color={tintColor} />
          }
        },
        Classes: {
          screen: Classes,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="md-bookmarks" size={24} color={tintColor} />
          }
        },
        Courses: {
          screen: Courses,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="logo-buffer" size={24} color={tintColor} />
          }
        },
        Home: {
          screen: Home,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <Ionicons
                name="ios-home"
                size={48}
                color="#EA677F"
                style={{

                  shadowColor: "#EA677F",
                  shadowOffset: { width: 0, height: 10 },
                  shadowRadius: 10,
                  shadowOpacity: 0.3,
                }}
              />
            )
          }
        },
        Library: {
          screen: Library,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-book" size={24} color={tintColor} />
          }
        },
        Chat: {
          screen: Chat,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
          }
        },

        Profile: {
          screen: Profile,
          navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor} />
          }
        }

      },
      
      {

        tabBarOptions: {

          activeTintColor: "#161F3D",
          inactiveTintColor: "#B8BBC4",
          showLabel: false,
        }
      }
    )
  },

  {
    headerMode: "none",

  }
);

const Router = createStackNavigator(
  {
    Login,
    Signup,
    ForgotPasswordScreen
  },
  {
    headerMode: 'none'

  });

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Login,
      App: AppContainer,Router,
      Auth: Router
    }
  )
);