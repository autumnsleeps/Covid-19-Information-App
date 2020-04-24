/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Splash from './components/SplashScreen';
import General from './components/General';
import Graph from './components/Graph';
import Prevention from './components/Prevention';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isLoading: true
    }
  }

  handlingDelayTime = async () => {
    return new Promise((resolve) => setTimeout(
      () => {resolve('result')}, 2000
    ))
  }

  async componentDidMount(){
    const data = await this.handlingDelayTime();

    if(data !== null){
      this.setState({
        isLoading: false
      })
    }
  }

  render(){
    const Tab = createMaterialTopTabNavigator();

    if(this.state.isLoading){
      return (<Splash/>)
    }

    return(
      <NavigationContainer>
        <Tab.Navigator 
          tabBarOptions={{activeTintColor: '#943436',inactiveTintColor: '#1d1d1d', labelStyle: {fontSize: 18, fontWeight: 'bold'}, tabStyle: {height: 80}, style: {backgroundColor: '#f2a723'}}}
          tabBarPosition='bottom'
        >
          <Tab.Screen 
            name="General" 
            component={General} 
          />
          <Tab.Screen 
            name="Prevent" 
            component={Prevention} 
          />
          <Tab.Screen 
            name="Info" 
            component={Graph} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}