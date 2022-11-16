import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstPage from './src/pages/FirstPage';
import {View} from 'react-native';
import SecondPage from './src/pages/SecondPage';
import FooterScreen from './src/pages/Footer';
import Home from './src/pages/Home';
import Explore from './src/pages/Explore';
import Heart from './src/pages/Heart';
import Setting from './src/pages/Setting';
import constant from './src/pages/constant';
import moreItem from './src/pages/MoreItem';
import favItems from './src/pages/favItems';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Heart" component={Heart} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="moreItem" component={moreItem} />
        <Stack.Screen name="favItems" component={favItems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
