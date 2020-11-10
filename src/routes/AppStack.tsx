import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GiveClasses from '../pages/GiveClasses'
import Landing from '../pages/Landing';
import StudyTabs from './StudyTabs';
import Tabs from './TestTabs'

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false,}}>
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
                <Screen name="Study" component={StudyTabs} />
                <Screen name="Tabs" component={Tabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;