import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ListScreen from '../screens/VelibListScreen';
import MapScreen from '../screens/MapScreen';
import Exo1Screen from '../screens/Exo1Screen';
import VelibDetailsScreen from '../screens/VelibDetailScreen';

const bgVelib = { backgroundColor: '#A2B43A' };
const headerStyle = {
  fontWeight: '500',
  color: '#F3EFEF',
  letterSpacing: 3
};
const tabStyle = {
  tabStyle: {
    style:{ height:300 },
    justifyContent: 'center',
  },
  showIcon: false
}

export const ListStack = createStackNavigator({
  ListVelibs: {
    screen: ListScreen,
    navigationOptions: {
      title: '🚴🏼 Velib\'',
      headerStyle: bgVelib,
      headerTitleStyle: headerStyle,
    }
  },
  VelibDetails: {
    screen: VelibDetailsScreen,
    navigationOptions: {
      title: 'Détails',
      headerStyle: bgVelib,
      headerTitleStyle: headerStyle,
    }
  }
});

const MapStack = createStackNavigator({
  Map: {
    screen: MapScreen,
    navigationOptions: {
      title: '📍 Map',
      headerStyle: bgVelib,
      headerTitleStyle: headerStyle,
    }
  }
});

const Exo1Stack = createStackNavigator({
  Exo1: {
    screen: Exo1Screen,
    navigationOptions: {
      title: '📝 Exercice n°1',
      headerStyle: bgVelib,
      headerTitleStyle: headerStyle,
    }
  }
});

ListStack.navigationOptions = {
  tabBarLabel: '🚴🏼 Velib\'',
  tabBarOptions: tabStyle,
};

MapStack.navigationOptions = {
  tabBarLabel: '📍 Map',
  tabBarOptions: tabStyle,
};

Exo1Stack.navigationOptions = {
  tabBarLabel: '📝 Exercice n°1',
  tabBarOptions: tabStyle,
};

export default createBottomTabNavigator({
  ListStack,
  MapStack,
  Exo1Stack,
});