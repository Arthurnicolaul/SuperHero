import React, { useEffect, useState, useContext } from 'react'
import {
   Image,
   KeyboardAvoidingView,
   SafeAreaView,
   TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

import Header from '../../Components/Header/Header'
import SearchResultCard from '../../Components/SearchResult/SearchResultCard'
import SuperheroCard from '../../Components/Card/SuperheroCard'

import Logo from '../../assets/image/logo_name.png'

import styles from '../Home/home'

const apiUrl = 'https://superheroapi.com/api/6755748551123703'

const Home = () => {
   const [superheroData, setSuperheroData] = useState(null)
   const [superheroes, setSuperheroes] = useState([])
   const [nameHero, setNameHero] = useState('')
   const [superHeroId, setSuperHeroId] = useState(1)

   const navigation = useNavigation()

   const buscaHeroi = nameHero => {
      axios
         .get(`${apiUrl}/search/${nameHero}`)
         .then(response => {
            setSuperheroes(response.data.results)
         })
         .catch(error => {
            console.error(error)
         })
   }

   useEffect(() => {
      buscaHeroi(nameHero)
   }, [nameHero])

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${apiUrl}/${superHeroId}`)
            setSuperheroData(response.data)
         } catch (error) {
            console.error(error)
         }
      }

      fetchData()
   }, [superHeroId])

   const handleLogout = async () => {
      try {
         await AsyncStorage.removeItem('user')
         navigation.navigate('Login' as never)
      } catch (error) {
         console.log('Erro ao remover o usuário do AsyncStorage:', error)
      }
   }

   const handlePlus = () => {
      setSuperHeroId(superHeroId + 1)
   }

   const handleDown = () => {
      if (superHeroId > 1) {
         setSuperHeroId(superHeroId - 1)
      }
   }

   const handleDescription = superHeroId => {
      navigation.navigate('Description', { paramKey: superHeroId })
   }

   const handleGame = () => {
      navigation.navigate('Game' as never)
   }

   return (
      <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
            style={[styles.container]}
            enabled={false}
            behavior="padding"
         >
         <Header handleLogout={handleLogout} buscaHeroi={buscaHeroi} />
      
            {superheroes ? (
               <SearchResultCard
                  superheroes={superheroes}
                  handleDescription={handleDescription}
               />
            ) : (
               superheroData && (
                  <SuperheroCard
                     superheroData={superheroData}
                     handleDescription={() => handleDescription(superHeroId)}
                     handlePlus={handlePlus}
                     handleDown={handleDown}
                     superHeroId={superHeroId}
                  />
               )
            )}

            <TouchableOpacity onPress={handleGame} style={styles.btn_game}>
               <Image source={Logo} style={styles.img_logo} />
            </TouchableOpacity>
         </KeyboardAvoidingView>
      </SafeAreaView>
   )
}

export default Home
