import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#f2c627',
      flex: 1,
      alignItems: 'center'
   },
   card_description: {
      height: '75%',
      width: '80%',
      backgroundColor: '#000',
      alignItems: 'center',
      borderRadius: 20,
      marginTop: 50
   },
   img_description: {
      width: 332,
      height: 350,
      borderRadius: 20
   },
   title: {
      position: 'absolute',
      top: 240,
      left: 15,
      zIndex: 10
   },
   name: {
      color: '#fff',
      fontSize: 30,
      textTransform: 'uppercase'
   },
   full_name: {
      color: '#fff',
      fontSize: 18,
      textTransform: 'uppercase'
   },
   btn_backHome: {
      position: 'absolute',
      width: 20,
      height: 20,
      left: -140,
      bottom: -25
   },
   propriedades: {
      zIndex: 10,
      marginTop:10
   },
   text_prop: {
      color: '#fff',
      fontSize: 18,
      textTransform: 'uppercase',
      marginBottom: 10
   },
   corte: {
      position: 'absolute',
      width: '100%',
      top: 230
   },
   corte2: {
      position: 'absolute',
      width: '92%',
      height: 300,
      bottom: 10,
      borderRadius: 10
   },
   btn_game: {
      marginTop: 10,
      backgroundColor: '#DEAA25',
      width: 100,
      height: 100,
      borderRadius: 100,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center'
   },
   img_logo: {
      width: 80,
      height: 80
   }
})

export default styles
