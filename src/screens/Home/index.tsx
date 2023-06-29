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
   TouchableOpacity,
   Button
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const apiUrl = 'https://superheroapi.com/api/6755748551123703'

const Home = () => {
   const [superheroData, setSuperheroData] = useState(null)
   const [superheroes, setSuperheroes] = useState([])
   const [name, setName] = useState('')
   const [superHeroId, setSuperHeroId] = useState(1)

   const navigation = useNavigation()

   useEffect(() => {
      axios
         .get(`${apiUrl}/search/${name}`)
         .then(response => {
            setSuperheroes(response.data.results)
         })
         .catch(error => {
            console.error(error)
         })
   }, [name])

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
   return (
      <SafeAreaView>
         
         <Button title="Sair" onPress={handleLogout} />
         <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Digite o nome do herói"
            value={name}
            onChangeText={text => setName(text)}
         />

         {superheroes ? (
            <FlatList
               data={superheroes}
               horizontal={true}
               keyExtractor={item => item.id.toString()}
               renderItem={({ item }) => (
                  <View>
                     <TouchableOpacity
                        onPress={() => handleDescription(item.id)}
                     >
                        <Image
                           source={{ uri: item.image.url }}
                           style={{ width: 150, height: 150 }}
                        />
                     </TouchableOpacity>
                     <Text>Nome: {item.name}</Text>
                  </View>
               )}
            />
         ) : (
            superheroData && (
               <View>
                  <TouchableOpacity
                     onPress={() => handleDescription(superHeroId)}
                  >
                     <Image
                        source={{ uri: superheroData.image.url }}
                        style={{ width: 150, height: 150 }}
                     />
                  </TouchableOpacity>
                  <Text>Nome: {superheroData.name}</Text>
                  <TouchableOpacity onPress={handlePlus}>
                     <Text>Ver mais</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={handleDown}>
                     <Text>voltar</Text>
                  </TouchableOpacity>
               </View>
            )
         )}

         <TouchableOpacity onPress={handleGame}>
            <Text>Game</Text>
         </TouchableOpacity>
      </SafeAreaView>
   )
}
export default Home
