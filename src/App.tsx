import React from 'react';
import BottomTabsNavigator from './screens/bottomtab.navigatior';
import { NavigationContainer } from '@react-navigation/native';
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default App;
