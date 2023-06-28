import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#f2c627',
      flex: 1,
      alignItems: 'center'
   },
   header: {
      alignItems: 'center',
      textAlign: 'center',
      flexDirection: 'row',
      padding: 15
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
      height: 35,
      borderRadius: 10,
      textAlign: 'center'
   },
   btn_search: {
      width: 20,
      height: 20,
      position: 'absolute',
      right: 25
   },
   card: {
      height: '75%',
      width: '80%',
      backgroundColor: '#000',
      alignItems: 'center',
      borderRadius: 20,
      marginTop: 20
   },
   img_card: {
      width: 332,
      height: 350,
      borderRadius: 20
   },
   img: {
      width: '100%',
      height: '100%',
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
   btn_arrow: {
      flexDirection: 'row',
      position: 'absolute',
      top: 280,
      gap: 340
   },
   btn_back: {
      height: 50,
      width: 30
   },
   btn_next: {
      height: 50,
      width: 30
   },
   properties: {
      width: '90%',
      height: '45%',
      justifyContent: 'center',
      borderRadius: 10,
      position: 'absolute',
      top: 280,
      zIndex: 10
   },
   text_properties: {
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 16
   },
   text_properties_height: {
      color: 'rgba(255, 255, 255, 0.51)',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      marginTop: 30
   },
   text_properties_weight: {
      color: 'rgba(255, 255, 255, 0.51)',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center'
   },
   title_img: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   img_marvel: {
      width: 60,
      height: 30
   },
   img_dc: {
      width: 60,
      height: 60
   },
   img_dh: {
      width: 40,
      height: 50
   },
   logo: {
      position: 'absolute',
      left: 250
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
   btn_detalhe: {
      position: 'absolute',
      width: 20,
      height: 20,
      right: 10,
      bottom: -90
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
   },
   card_pesquisa: {
      alignItems: 'center',
      justifyContent: 'center'
   },
   img_pesquisa: {
      width: 160,
      height: 450,
      margin: 20,
      borderRadius:10
   },
   name_pesquisa: {
      color: 'rgba(255, 255, 255, .6)',
      fontSize: 20
   }
})

export default styles
