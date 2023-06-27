import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import axios from 'axios'

const apiUrl = 'https://superheroapi.com/api/6755748551123703'

const CardDescription = ({ route }) => {
   const { paramKey } = route.params
   const [superheroData, setSuperheroData] = useState(null)

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

   return (
      <SafeAreaView>
         {superheroData ? (
            <View>
               <Text>Nome: {superheroData.name}</Text>
               <Image
                  source={{ uri: superheroData.image.url }}
                  style={{ width: 150, height: 150 }}
               />
               <Text>
                  intelligence: {superheroData.powerstats.intelligence}
               </Text>
               <Text>strength: {superheroData.powerstats.strength}</Text>
               <Text>speed: {superheroData.powerstats.speed}</Text>
               <Text>durability: {superheroData.powerstats.durability}</Text>
               <Text>power: {superheroData.powerstats.power}</Text>
               <Text>combat: {superheroData.powerstats.combat}</Text>
            </View>
         ) : (
            <Text>Carregando...</Text>
         )}
      </SafeAreaView>
   )
}

export default CardDescription
