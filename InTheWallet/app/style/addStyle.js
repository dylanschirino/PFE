import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $mainBckg: '#F8FCFF',
  $nameBckg:'#6FA4C7',
  $montantBckg:'#7AB3E3',
});

module.exports = EStyleSheet.create({
  mainContent:{
    flex:1,
    backgroundColor:'$mainBckg',
  },
  nameContainer:{
    marginTop:22,
    backgroundColor:'$nameBckg',
    paddingTop:20,
    paddingBottom:20,
    alignItems:'center',
  },
  montantContainer:{
    paddingTop:20,
    paddingBottom:20,
    alignItems:'center',
    backgroundColor:'$montantBckg',
  },
  optionContainer:{
    alignItems:'center',
    paddingTop:20,
    paddingBottom:17,
    borderBottomWidth:1,
    borderBottomColor:'$nameBckg',
  },
  label:{
    fontFamily:'droidsans',
    fontSize:14,
    color:'#FFFFFF',
    paddingBottom:10,
  },
  labelOptions:{
    fontFamily:'droidsans',
    fontSize:14,
    color:'$nameBckg',
    paddingBottom:10,
  },
  inputBox:{
    width:'80%',
    alignSelf:'center',
    borderBottomWidth:1,
    borderBottomColor:'#FFFFFF',
    position:'relative'
  },
  inputOptionBox:{
    width:'80%',
    alignSelf:'center',
    position:'relative'
  },
  input:{
    height:20,
    textAlign:'center',
    marginBottom:5,
    color:'#FFFFFF',
    fontFamily:'lato-regular',
    fontSize:16,
  },
  inputPicker:{
    height:20,
  },
  picker:{
    height:20,
    backgroundColor:'red'
  },
  inputCategorie:{
    height:20,
    textAlign:'center',
    marginBottom:5,
    color:'$nameBckg',
    fontFamily:'lato-regular',
    fontSize:16,
  },
  icone:{
    width:15,
    height:15,
    position:'absolute',
    bottom:8,
  },
  euroIcone:{
    width:50,
    height:50,
  },
  refreshIcone:{
    width:18,
    height:21,
    position:'absolute',
    bottom:5,
  },
  inputMontantBox:{
    width:'85%',
    alignSelf:'center',
    flexDirection:'row',
  },
  inputMontant:{
    flex:1,
    color:'#FFFFFF',
    textAlign:'center',
    marginLeft:30,
    fontFamily:'droidsans',
    fontSize:32,
  },
  buttonMontant:{
    backgroundColor:'#FFFFFF',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:8,
  },
  buttonLabel:{
    fontFamily:'droidsans',
    fontSize:24,
    color:'#5999CE',
  },
  buttonLabelLess:{
    fontFamily:'droidsans',
    fontSize:24,
    color:'#5999CE',
    paddingTop:21,
    paddingBottom:0,
  },
  buttonMoreLess:{
    paddingLeft:17,
    paddingRight:17,
  },
  buttonMoreLessOne:{
    paddingTop:11,
    paddingBottom:11,
    paddingLeft:17,
    paddingRight:17,
    borderRightWidth:1,
    borderRightColor:'#5999CE'
  },
  bigContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  pictureContainer:{
    alignItems:'center',
    width:'50%',
  },
  pictureContainerTwo:{
    paddingTop:15,
    alignItems:'center',
    width:'50%',
    borderLeftWidth:1,
    borderLeftColor:'$nameBckg'
  },
  labelChoose:{
    fontFamily:'droidsans',
    fontSize:14,
    color:'$nameBckg',
    textAlign:'center',
    paddingBottom:10,
  },
  chooseContainer:{
    flexDirection:'row',
    marginBottom:14,
    paddingTop:5,
  },
  chooseContainerPhoto:{
    flexDirection:'row',
    marginBottom:14,
    paddingTop:5,
  },
  buttonChoose:{
    width:71,
    height:71,
    borderRadius:71,
    backgroundColor:'#F2F2E8',
    alignItems:'center',
    justifyContent:'center',
    marginRight:12,
    marginLeft:12,
  },
  buttonChooseActived:{
    width:71,
    height:71,
    borderRadius:71,
    backgroundColor:'$nameBckg',
    alignItems:'center',
    justifyContent:'center',
    marginRight:12,
    marginLeft:12,
  },
  pictureChoose:{
    width:85,
    height:85,
    borderRadius:85,
    borderWidth:2,
    borderColor:'#538EB6',
    alignItems:'center',
    justifyContent:'center',
  },
  iconCredit:{
    width:48,
    height:34,
  },
  iconCash:{
    width:52,
    height:30,
  },
  iconPhoto:{
    width:48,
    height:40,
  },
  actionContainer:{
    flexDirection:'row',
  },
  cancelContainer:{
    backgroundColor:'#E3F4FF',
    width:'50%',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:20,
    paddingBottom:20,
  },
  checkContainer:{
    backgroundColor:'#D2EDFF',
    width:'50%',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:20,
    paddingBottom:20,
  },
  cancelIcon:{
    width:30,
    height:30,
  },
  checkIcon:{
    width:30,
    height:21,
  }
});
