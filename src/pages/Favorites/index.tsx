import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

function Favorites(){
    const [favorites, setFavorites] = useState([]);

    //Disparar algo assim que o component é exibido em tela
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            //JSONpara salvar array em formato de texto
            if(response){
                const favoritedTeachers = JSON.parse(response);
                
                setFavorites(favoritedTeachers);
            }
        });
    }
    //será sxecutada toda vez que a tela entrar em fóco
    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((teacher: Teacher) =>{
                    return (
                        <TeacherItem 
                            key={teacher.id}
                            teacher={teacher}//dados do professor
                            favorited={true}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Favorites;