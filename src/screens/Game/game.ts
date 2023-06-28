import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
   container: {
      backgroundColor: '#000',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },
   card1: {
      flexDirection: 'row-reverse',
      marginBottom: 100,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center'
   },
   img_card1: {
      borderWidth: 4,
      borderColor: '#EA232880',
      width: 200,
      height: 300,
      marginRight: 30
   },
   atributos_card1: {
      backgroundColor: '#EA232880',
      height: 150,
      width: 150,
      alignItems: 'flex-start',
      textAlign: 'left',
      justifyContent: 'center',
      borderBottomLeftRadius: 50,
      borderTopStartRadius: 50,
      paddingLeft: 10
   },
   name1: {
      position: 'absolute',
      color: '#fff',
      fontSize: 40,
      bottom: 10,
      width: 250,
      fontWeight: 'bold'
   },
   card2: {
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center'
   },
   img_card2: {
      borderWidth: 4,
      borderColor: '#007FFE80',
      width: 200,
      height: 300,
      marginLeft: 30
   },
   atributos_card2: {
      backgroundColor: '#007FFE80',
      height: 150,
      width: 150,
      alignItems: 'flex-start',
      textAlign: 'right',
      justifyContent: 'center',
      borderBottomRightRadius: 50,
      borderTopEndRadius: 50,
      paddingLeft: 10
   },
   name2: {
      color: '#fff',
      position: 'absolute',
      fontSize: 40,
      bottom: -25,
      width: 250,
      fontWeight: 'bold'
   },
   text_prop: {
      color: '#fff',
      fontSize: 14,
      textTransform: 'uppercase'
   },
   btn_jogar: {
      position: 'absolute',
      top:380
   },
   img_jogar: {
      width: 150,
      height: 150
   },
   btn_sair: {
      width: 50,
      height: 50
   },
   sair: {
      position: 'absolute',
      top: 70,
      left: 40
   }
})

export default styles
