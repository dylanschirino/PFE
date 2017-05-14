import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $Blue: '#235182'
});


module.exports = EStyleSheet.create({
  introContainer: {
    borderWidth:1,
    borderColor:'$Blue',
    borderRadius:5,
    marginTop:35,// 15px on arrive a la StatusBar + 20px de margin
    margin:20,
    flex:1,
  },
  container: {
    alignItems:'center',
  },
  img:{
    width:257,
    height:251,
    marginTop:25,
    marginBottom:35,
  },
  titleIntro:{
    fontSize:20,
    color:'$Blue',
    marginBottom:20,
    fontFamily:'droidsans',
  },
  introText:{
    fontSize:18,
    textAlign:'center',
    fontWeight:'100',
    lineHeight:24,
    color:'$Blue',
    paddingLeft:30,
    paddingRight:30,
    paddingBottom:40,
    fontFamily:'lato-light',
  },
  switchContainer:{
    flexDirection:'row',
    marginBottom:60,
    marginRight:21,
  },
  switcher:{
    width:19.75,
    height:15,
    borderWidth:1,
    borderColor:'$Blue',
    borderRadius:2.5,
    marginLeft:26.33,
  },
  button:{
    backgroundColor:'$Blue',
    paddingTop:15,
    paddingBottom:15,
    borderRadius:8,
    alignItems:'center',
    alignSelf:'stretch',
    marginLeft:26,
    marginRight:26,
  },
  buttonCustom:{
    backgroundColor:'$Blue',
    paddingTop:15,
    paddingBottom:15,
    borderRadius:8,
    alignItems:'center',
    alignSelf:'stretch',
    marginLeft:26,
    marginTop:45,
    marginRight:26,
  },
  buttonCustom2:{
    backgroundColor:'$Blue',
    paddingTop:15,
    paddingBottom:15,
    borderRadius:8,
    alignItems:'center',
    alignSelf:'stretch',
    marginLeft:26,
    marginTop:27,
    marginRight:26,
  },
  buttonText:{
    color:'#FFFFFF',
    fontFamily:'droidsans'
  },
  active:{
    backgroundColor:'$Blue',
    borderRadius:2.5,
    width:19.75,
    height:15,
    borderWidth:1,
    borderColor:'$Blue',
    borderRadius:2.5,
    marginLeft:26.33,
  },

  '@media (max-width: 320px)':{
    introContainer: {
      marginTop:25,// 15px on arrive a la StatusBar + 20px de margin
      margin:15,
      borderWidth:0,
    },
    img:{
      marginTop:15,
      marginBottom:20,
    },
    introText:{
      paddingBottom:25,
    },
    switchContainer:{
      marginBottom:30,
    },
    titleIntro:{
      marginBottom:10,
    },
    button:{
      width:'80%',
      alignSelf:'center',
    },
  }
});
