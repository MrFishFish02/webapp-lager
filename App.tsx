import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from "./components/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Base } from './styles';
import { useState } from 'react';
import Pick from "./components/Pick"

export default function App() {
  const Tab = createBottomTabNavigator();
  const [products, setProducts] = useState<any[]>([]);

  return (
    <SafeAreaView style={Base.container}>
      <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Lager") {
            iconName = "home";
        } else if (route.name === "Plock")  {
            iconName = "list";
        } else {
            iconName = "alert";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#03c588',
    tabBarInactiveTintColor: 'gray',
  })}
>
<Tab.Screen name="Lager">
  {() => <Home products={products} setProducts={setProducts} />}
</Tab.Screen>
<Tab.Screen name="Plock">
  {() => <Pick setProducts={setProducts} />}
</Tab.Screen>
</Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
