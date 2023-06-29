import { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import BtnJogar from '../../assets/image/Btn_jogar.png'
import Sair from '../../assets/image/exit.png'
import styles from './game'

const apiUrl = 'https://superheroapi.com/api/6755748551123703'

const Game = () => {
   const [superHeroId1, setSuperHeroId1] = useState(70)
   const [superHeroId2, setSuperHeroId2] = useState(150)
   const [superheroData1, setSuperheroData1] = useState(null)
   const [superheroData2, setSuperheroData2] = useState(null)
   const navigation = useNavigation()

   const MAX_SUPERHERO_ID = 731
   const MIN_SUPERHERO_ID = 1

   useEffect(() => {
      const fetchSuperheroData1 = async () => {
         try {
            const response = await axios.get(`${apiUrl}/${superHeroId1}`)
            setSuperheroData1(response.data)
         } catch (error) {
            console.error(error)
         }
      }

      const fetchSuperheroData2 = async () => {
         try {
            const response = await axios.get(`${apiUrl}/${superHeroId2}`)
            setSuperheroData2(response.data)
         } catch (error) {
            console.error(error)
         }
      }

      fetchSuperheroData1()
      fetchSuperheroData2()
   }, [superHeroId1, superHeroId2])

   function getRandomNumber() {
      setSuperHeroId1(
         Math.floor(Math.random() * (MAX_SUPERHERO_ID - MIN_SUPERHERO_ID + 1)) +
            MIN_SUPERHERO_ID
      )
      setSuperHeroId2(
         Math.floor(Math.random() * (MAX_SUPERHERO_ID - MIN_SUPERHERO_ID + 1)) +
            MIN_SUPERHERO_ID
      )
   }

   const handleBackHome = () => {
      navigation.navigate('Home' as never)
   }
   return (
      <SafeAreaView style={styles.container}>
         <TouchableOpacity style={styles.sair} onPress={handleBackHome}>
            <Image source={Sair} style={styles.btn_sair} />
         </TouchableOpacity>
         <View>
            {superheroData1 && (
               <View style={styles.card1}>
                  <Image
                     source={{ uri: superheroData1.image.url }}
                     style={styles.img_card1}
                  />
                  <View style={styles.atributos_card1}>
                     <Text style={styles.text_prop}>
                        intelligence: {superheroData1.powerstats.intelligence}
                     </Text>
                     <Text style={styles.text_prop}>
                        strength: {superheroData1.powerstats.strength}
                     </Text>
                     <Text style={styles.text_prop}>
                        speed: {superheroData1.powerstats.speed}
                     </Text>
                     <Text style={styles.text_prop}>
                        durability: {superheroData1.powerstats.durability}
                     </Text>
                     <Text style={styles.text_prop}>
                        power: {superheroData1.powerstats.power}
                     </Text>
                     <Text style={styles.text_prop}>
                        combat: {superheroData1.powerstats.combat}
                     </Text>
                  </View>
                  <Text style={styles.name1}>{superheroData1.name}</Text>
               </View>
            )}
         </View>
         <View>
            {superheroData2 && (
               <View style={styles.card2}>
                  <Image
                     source={{ uri: superheroData2.image.url }}
                     style={styles.img_card2}
                  />

                  <View style={styles.atributos_card2}>
                     <Text style={styles.text_prop}>
                        intelligence: {superheroData2.powerstats.intelligence}
                     </Text>
                     <Text style={styles.text_prop}>
                        strength: {superheroData2.powerstats.strength}
                     </Text>
                     <Text style={styles.text_prop}>
                        speed: {superheroData2.powerstats.speed}
                     </Text>
                     <Text style={styles.text_prop}>
                        durability: {superheroData2.powerstats.durability}
                     </Text>
                     <Text style={styles.text_prop}>
                        power: {superheroData2.powerstats.power}
                     </Text>
                     <Text style={styles.text_prop}>
                        combat: {superheroData2.powerstats.combat}
                     </Text>
                  </View>
                  <Text style={styles.name2}>{superheroData2.name}</Text>
               </View>
            )}
         </View>

         <TouchableOpacity onPress={getRandomNumber} style={styles.btn_jogar}>
            <Image source={BtnJogar} style={styles.img_jogar} />
         </TouchableOpacity>
      </SafeAreaView>
   )
}

export default Game
