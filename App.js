import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstPage from './src/pages/FirstPage';
import SecondPage from './src/pages/SecondPage';
import Home from './src/pages/Home';
import Explore from './src/pages/Explore';
import Heart from './src/pages/Heart';
import Setting from './src/pages/Setting';
import moreItem from './src/pages/MoreItem';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
