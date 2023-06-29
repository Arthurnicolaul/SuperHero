import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   headerContainer: {
      backgroundColor: '#f2c627',
      display: 'flex',
      alignItems: 'center'
   },
   header: {
      alignItems: 'center',
      textAlign: 'center',
      flexDirection: 'row'
   },
   btn: {
      marginRight: 10
   },
   btn_sair: {
      width: 30,
      height: 30
   },
   input: {
      backgroundColor: '#deaa25',
      width: '90%',
      height: 40,
      borderRadius: 10,
      textAlign: 'center'
   },
   btn_search: {
      width: 20,
      height: 20,
      position: 'absolute',
      right: 25
   },
   boasVindas: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'black',
      fontSize: 25,
      marginTop:15
   }
})

export default styles
