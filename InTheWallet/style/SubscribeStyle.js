import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $titleColor: '#235182',
  $bodyColor:'#F8FDFF',
  $input:'#538EB6',
});

module.exports = EStyleSheet.create({
  body:{
    backgroundColor:'$bodyColor',
    flex:1,
  },
  titleContainer:{
    alignSelf:'center',
    borderBottomWidth:1,
    borderColor:'$titleColor',
    marginBottom:75,
  },
  titleLoginContainer:{
    alignSelf:'center',
    borderBottomWidth:1,
    borderColor:'$titleColor',
    marginBottom:33,
  },
  logoContainer:{
    alignSelf:'center',
    marginBottom:33,
  },
  logo:{
    width:120,
    height:113,
  },
  title:{
    fontFamily:'lato-light',
    fontSize:32,
    textAlign:'center',
    marginTop:50,
    color: '$titleColor',
    paddingBottom:5,
  },
  inputContainer:{
    width:'83%',
    alignSelf:'center',
  },
  icon:{
    width:30,
    height:25,
    marginRight:5,
  },
  label:{
    flexWrap:'nowrap',
    fontSize:12,
    lineHeight:30,
    color:'$titleColor',
  },
  inputBox:{
    borderBottomWidth:1,
    borderColor:'$input',
    marginBottom:25,
  },
  input:{
    height:30,
    color:'$input',
  },
  button:{
    paddingTop:19,
    paddingBottom:19,
    borderWidth:1,
    borderColor:'$input',
    borderRadius:8,
    alignItems:'center',
    alignSelf:'stretch',
    marginBottom:60,
  },
  buttonConnexion:{
    paddingTop:19,
    paddingBottom:19,
    borderWidth:1,
    borderColor:'$input',
    borderRadius:8,
    alignItems:'center',
    alignSelf:'stretch',
    marginBottom:50,
  },
  buttonText:{
    color:'$input',
    fontFamily:'lato-regular',
    fontSize:16,
  },
  cercle:{
    width:'100%',
    height:100,
  },
  linkContainer:{
    borderBottomWidth:1,
    borderColor:'#34586B',
    alignSelf:'center',
    marginBottom:10,
  },
  link:{
    fontFamily:'lato-regular',
    fontSize:13,
    color:'#34586B',
    alignSelf:'center',
  }
});
