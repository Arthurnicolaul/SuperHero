import React from 'react'
import { useContext } from 'react'
import { Image, TextInput, TouchableOpacity, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../Context/Auth'

import Btn_sair from '../../assets/image/Btn_sair.png'
import Search from '../../assets/image/Search.png'

import styles from './HeadStyle '

const Header = ({ handleLogout, buscaHeroi }) => {
   const { nome } = useContext(AuthContext)
   const navigation = useNavigation()

   return (
      <View style={styles.headerContainer}>
         <View style={styles.header}>
            <TouchableOpacity onPress={handleLogout} style={styles.btn}>
               <Image source={Btn_sair} style={styles.btn_sair} />
            </TouchableOpacity>
            <TextInput
               style={styles.input}
               placeholder="BUSQUE SEU HEROI !"
               onChangeText={text => buscaHeroi(text)}
            />
            <Image source={Search} style={styles.btn_search} />
         </View>

         <Text style={styles.boasVindas}>Bem Vindo: {nome}</Text>
      </View>
   )
}

export default Header
