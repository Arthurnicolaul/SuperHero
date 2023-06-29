import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import Corte from '../../assets/image/CorteImg.png'
import Corte2 from '../../assets/image/Corte2.png'
import BackHome from '../../assets/image/Anterior.png'
import Logo from '../../assets/image/logo_name.png'

import styles from './cardaDescription'

const apiUrl = 'https://superheroapi.com/api/6755748551123703'

const CardDescription = ({ route }) => {
   const { paramKey } = route.params
   const [superheroData, setSuperheroData] = useState(null)
   const navigation = useNavigation()
   useEffect(() => {
      axios
         .get(`${apiUrl}/${paramKey}`)
         .then(response => {
            setSuperheroData(response.data)
         })
         .catch(error => {
            console.error(error)
         })
   }, [paramKey])

   const handleBackHome = () => {
      navigation.navigate('Home' as never)
   }

   const handleGame = () => {
      navigation.navigate('Game' as never)
   }

   return (
      <SafeAreaView style={styles.container}>
         {superheroData ? (
            <View style={styles.card_description}>
               <Image
                  source={{ uri: superheroData.image.url }}
                  style={styles.img_description}
               />
               <View style={styles.title}>
                  <Text style={styles.name}>{superheroData.name}</Text>
                  <Text style={styles.full_name}>
                     {superheroData.biography['full-name']}
                  </Text>
               </View>
               <View style={styles.propriedades}>
                  <Text style={styles.text_prop}>
                     intelligence: {superheroData.powerstats.intelligence}
                  </Text>
                  <Text style={styles.text_prop}>
                     strength: {superheroData.powerstats.strength}
                  </Text>
                  <Text style={styles.text_prop}>
                     speed: {superheroData.powerstats.speed}
                  </Text>
                  <Text style={styles.text_prop}>
                     durability: {superheroData.powerstats.durability}
                  </Text>
                  <Text style={styles.text_prop}>
                     power: {superheroData.powerstats.power}
                  </Text>
                  <Text style={styles.text_prop}>
                     combat: {superheroData.powerstats.combat}
                  </Text>
               </View>

               <Image source={Corte} style={styles.corte} />
               <Image source={Corte2} style={styles.corte2} />
               <TouchableOpacity onPress={handleBackHome}>
                  <Image source={BackHome} style={styles.btn_backHome} />
               </TouchableOpacity>
            </View>
         ) : (
            <Text>Carregando...</Text>
         )}

         <TouchableOpacity onPress={handleGame} style={styles.btn_game}>
            <Image source={Logo} style={styles.img_logo} />
         </TouchableOpacity>
      </SafeAreaView>
   )
}

export default CardDescription
