import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';//Pacote de Icons
import Landing from '../pages/Landing'
import Favorites from '../pages/Favorites'

const { Navigator, Screen } = createBottomTabNavigator();

function Tabs(){
    return (
            <Navigator>
                <Screen component={Landing} name="Test" />
                <Screen component={Favorites} name="Fav" />
            </Navigator>

)
}

export default Tabs