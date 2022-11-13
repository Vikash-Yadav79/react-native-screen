import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstPage from './src/pages/FirstPage';
import {View} from 'react-native';
import SecondPage from './src/pages/SecondPage';
import FooterScreen from './src/pages/Footer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SecondPage" component={SecondPage} />

        {/* <Stack.Screen name="FirstPage" component={FirstPage} /> */}
      </Stack.Navigator>
      <FooterScreen />
    </NavigationContainer>
  );
};

export default App;
