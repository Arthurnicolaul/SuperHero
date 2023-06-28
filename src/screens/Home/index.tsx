import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {
   Image,
   SafeAreaView,
   View,
   Text,
   TextInput,
   FlatList,
   TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Btn_sair from '../../assets/image/Btn_sair.png'
import Search from '../../assets/image/Search.png'
import Back from '../../assets/image/Back.png'
import Next from '../../assets/image/Next.png'
import Marvel from '../../assets/image/Marvel.png'
import Dc from '../../assets/image/Dc.png'
import DhComics from '../../assets/image/Dark_Horse_Comics.png'
import Corte from '../../assets/image/CorteImg.png'
import Corte2 from '../../assets/image/Corte2.png'
import Proximo from '../../assets/image/Proximo.png'
import Logo from '../../assets/image/logo_name.png'

import styles from './home'

const apiUrl = 'https://superheroapi.com/api/6755748551123703'

const Home = () => {
   const [superheroData, setSuperheroData] = useState(null)
   const [superheroes, setSuperheroes] = useState([])
   const [nameHero, setNameHero] = useState('')
   const [superHeroId, setSuperHeroId] = useState(1)

   const navigation = useNavigation()

   useEffect(() => {
      axios
         .get(`${apiUrl}/search/${nameHero}`)
         .then(response => {
            setSuperheroes(response.data.results)
         })
         .catch(error => {
            console.error(error)
         })
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

   function handlePlus() {
      setSuperHeroId(superHeroId + 1)
   }

   function handleDown() {
      if (superHeroId > 1) {
         setSuperHeroId(superHeroId - 1)
      }
   }

   function handleDescription(superHeroId) {
      navigation.navigate('Description', { paramKey: superHeroId })
   }

   const handleGame = () => {
      navigation.navigate('Game' as never)
   }

   function handleChangePublisher() {
      if (superheroData.biography.publisher === 'Marvel Comics') {
         {
            Marvel
         }
      } else if (superheroData.biography.publisher === 'DC Comics') {
         {
            Dc
         }
      } else if (superheroData.biography.publisher === 'Dark Horse Comics') {
      }
   }
   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.header}>
            <TouchableOpacity onPress={handleLogout} style={styles.btn}>
               <Image source={Btn_sair} style={styles.btn_sair} />
            </TouchableOpacity>
            <TextInput
               style={styles.input}
               placeholder="BUSQUE SEU HEROI !"
               value={nameHero}
               onChangeText={text => setNameHero(text)}
            />
            <Image source={Search} style={styles.btn_search} />
         </View>

         {superheroes ? (
            <FlatList
               data={superheroes}
               horizontal={true}
               keyExtractor={item => item.id.toString()}
               renderItem={({ item }) => (
                  <View style={styles.card_pesquisa}>
                     <TouchableOpacity
                        onPress={() => handleDescription(item.id)}
                     >
                        <Image
                           source={{ uri: item.image.url }}
                           style={styles.img_pesquisa}
                        />
                     </TouchableOpacity>
                     <Text style={styles.name_pesquisa}>{item.name}</Text>
                  </View>
               )}
            />
         ) : (
            superheroData && (
               <View style={styles.card}>
                  <View style={styles.img_card}>
                     <Image
                        source={{ uri: superheroData.image.url }}
                        style={styles.img}
                     />
                  </View>

                  <View style={styles.title}>
                     <Text style={styles.name}>{superheroData.name}</Text>
                     <View style={styles.logo}>
                        {superheroData.biography.publisher ===
                        'Marvel Comics' ? (
                           <Image source={Marvel} style={styles.img_marvel} />
                        ) : superheroData.biography.publisher ===
                          'DC Comics' ? (
                           <Image source={Dc} style={styles.img_dc} />
                        ) : (
                           <Image source={DhComics} style={styles.img_dh} />
                        )}
                     </View>
                     <Text style={styles.full_name}>
                        {superheroData.biography['full-name']}
                     </Text>
                  </View>
                  <View style={styles.properties}>
                     <Text style={styles.text_properties}>
                        Apelido: {superheroData.biography.aliases}
                     </Text>
                     <Text style={styles.text_properties_height}>
                        Altura: {superheroData.appearance.height[1]}
                     </Text>
                     <Text style={styles.text_properties_weight}>
                        Peso: {superheroData.appearance.weight[1]}
                     </Text>
                     <TouchableOpacity
                        onPress={() => handleDescription(superHeroId)}
                     >
                        <Image source={Proximo} style={styles.btn_detalhe} />
                     </TouchableOpacity>
                  </View>

                  <Image source={Corte} style={styles.corte} />
                  <Image source={Corte2} style={styles.corte2} />
                  <View style={styles.btn_arrow}>
                     <TouchableOpacity onPress={handleDown}>
                        <Image source={Back} style={styles.btn_back} />
                     </TouchableOpacity>

                     <TouchableOpacity onPress={handlePlus}>
                        <Image source={Next} style={styles.btn_next} />
                     </TouchableOpacity>
                  </View>
               </View>
            )
         )}

         <TouchableOpacity onPress={handleGame} style={styles.btn_game}>
            <Image source={Logo} style={styles.img_logo} />
         </TouchableOpacity>
      </SafeAreaView>
   )
}
export default Home
