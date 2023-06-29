import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F2C627'
  },
    input: {
      zIndex:3,
      height:30,
      width:200,
      borderWidth:1,
      marginBottom:10,
      paddingLeft:40,
      borderBottomColor: '#FFFFFF',
      borderBottomWidth: 1,
      color:'#f2f2f2'
    },
    errorText:{
      left:25,
      top:2,
      color:'red',
      fontWeight:'bold',
      fontSize:15
    },
    card:{
      zIndex:3,
      justifyContent:"center", 
      alignItems:"center",
      backgroundColor: '#000',
      height:300 ,
      width:250,
      left:8,
      borderRadius:10,
      top:120,
    },
    entrar:{
      top:5,
      width:150,
      height:40,
      borderRadius:50,
      backgroundColor:'white'
    },
    logo: {
      width:120,
      height:120,
      top:100,
      alignItems:"center"
    },
    eyeIcon: {
    position:"absolute",
    zIndex:9,
    left:0
    },
   
  });