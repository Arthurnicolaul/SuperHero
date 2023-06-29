import React from 'react'
import { useEffect, useState } from 'react'
import { SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import BtnJogar from '../../assets/image/Btn_jogar.png'
import Sair from '../../assets/image/exit.png'
import styles from '../../Components/CardBatalha/Card'
import Card from '../../Components/CardBatalha/Card1'

const apiUrl = 'https://superheroapi.com/api/6755748551123703'
const MAX_SUPERHERO_ID = 731
const MIN_SUPERHERO_ID = 1

const Game = () => {
   const [superHeroId1, setSuperHeroId1] = useState(70)
   const [superHeroId2, setSuperHeroId2] = useState(150)
   const [superheroData1, setSuperheroData1] = useState(null)
   const [superheroData2, setSuperheroData2] = useState(null)
   const navigation = useNavigation()

   useEffect(() => {
      const fetchSuperheroData = async (superHeroId, setSuperheroData) => {
         try {
            const response = await axios.get(`${apiUrl}/${superHeroId}`)
            setSuperheroData(response.data)
         } catch (error) {
            console.error(error)
         }
      }

      fetchSuperheroData(superHeroId1, setSuperheroData1)
      fetchSuperheroData(superHeroId2, setSuperheroData2)
   }, [superHeroId1, superHeroId2])

   function getRandomNumber() {
    if(superheroData1.powerstats.power !== null && superheroData2.powerstats.power !== null )
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
      console.log('voltando')
   }

   return (
      <SafeAreaView style={styles.container}>
         <TouchableOpacity style={styles.sair} onPress={handleBackHome}>
            <Image source={Sair} style={styles.btn_sair} />
         </TouchableOpacity>

         {superheroData1 && (
            <Card
               superheroData={superheroData1}
               cardStyle={styles.card1}
               imageStyle={styles.img_card1}
               attributeStyle={styles.atributos_card1}
               nameStyle={styles.name1}
            />
         )}

         {superheroData2 && (
            <Card
               superheroData={superheroData2}
               cardStyle={styles.card2}
               imageStyle={styles.img_card2}
               attributeStyle={styles.atributos_card2}
               nameStyle={styles.name2}
            />
         )}

         <TouchableOpacity onPress={getRandomNumber} style={styles.btn_jogar}>
            <Image source={BtnJogar} style={styles.img_jogar} />
         </TouchableOpacity>
      </SafeAreaView>
   )
}

export default Game
