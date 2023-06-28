import axios from 'axios'
import { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native'

const apiUrl = 'https://superheroapi.com/api/6755748551123703'

const Game = () => {
   const [superHeroId1, setSuperHeroId1] = useState(70)
   const [superHeroId2, setSuperHeroId2] = useState(150)
   const [superheroData1, setSuperheroData1] = useState(null)
   const [superheroData2, setSuperheroData2] = useState(null)

   useEffect(() => {
      const fetchData1 = async () => {
         try {
            const response = await axios.get(`${apiUrl}/${superHeroId1}`)
            setSuperheroData1(response.data)
         } catch (error) {
            console.error(error)
         }
      }

      const fetchData2 = async () => {
         try {
            const response = await axios.get(`${apiUrl}/${superHeroId2}`)
            setSuperheroData2(response.data)
         } catch (error) {
            console.error(error)
         }
      }

      fetchData1()
      fetchData2()
   }, [superHeroId1, superHeroId2])

   function getRandomNumber() {
      const min = 1
      const max = 731
      setSuperHeroId1(Math.floor(Math.random() * (max - min + 1)) + min)
      setSuperHeroId2(Math.floor(Math.random() * (max - min + 1)) + min)
   }

   return (
      <SafeAreaView>
         <View>
            {superheroData1 && (
               <View>
                  <TouchableOpacity>
                     <Image
                        source={{ uri: superheroData1.image.url }}
                        style={{ width: 150, height: 150 }}
                     />
                  </TouchableOpacity>
                  <Text>Nome: {superheroData1.name}</Text>
                  <Text>
                     intelligence: {superheroData1.powerstats.intelligence}
                  </Text>
                  <Text>strength: {superheroData1.powerstats.strength}</Text>
                  <Text>speed: {superheroData1.powerstats.speed}</Text>
                  <Text>
                     durability: {superheroData1.powerstats.durability}
                  </Text>
                  <Text>power: {superheroData1.powerstats.power}</Text>
                  <Text>combat: {superheroData1.powerstats.combat}</Text>
               </View>
            )}
         </View>
         <View>
            {superheroData2 && (
               <View>
                  <TouchableOpacity>
                     <Image
                        source={{ uri: superheroData2.image.url }}
                        style={{ width: 150, height: 150 }}
                     />
                  </TouchableOpacity>
                  <Text>Nome: {superheroData2.name}</Text>
                  <Text>
                     intelligence: {superheroData2.powerstats.intelligence}
                  </Text>
                  <Text>strength: {superheroData2.powerstats.strength}</Text>
                  <Text>speed: {superheroData2.powerstats.speed}</Text>
                  <Text>
                     durability: {superheroData2.powerstats.durability}
                  </Text>
                  <Text>power: {superheroData2.powerstats.power}</Text>
                  <Text>combat: {superheroData2.powerstats.combat}</Text>
               </View>
            )}
         </View>

         <TouchableOpacity onPress={getRandomNumber}>
            <Text>Jogar</Text>
         </TouchableOpacity>
      </SafeAreaView>
   )
}

export default Game
