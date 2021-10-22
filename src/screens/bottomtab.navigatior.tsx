import React from 'react';
import History from './history';
import Home from './home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnalyticsNavigator from './analytics.navigator';

const BottomTab = createBottomTabNavigator();

const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="History" component={History} />
      <BottomTab.Screen name="Analytics" component={AnalyticsNavigator} />
    </BottomTab.Navigator>
  );
};

export default BottomTabsNavigator;
