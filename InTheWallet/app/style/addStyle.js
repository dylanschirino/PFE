import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $mainBckg: '#F8FCFF',
  $nameBckg:'#6FA4C7',
  $montantBckg:'#7AB3E3',
  $mensualiteBckg:'#6AACE2',
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
  dateContainer:{
    paddingTop:25,
    paddingBottom:25,
    alignItems:'center',
  },
  nameContainerCustom:{
    backgroundColor:'$nameBckg',
    paddingTop:20,
    paddingBottom:20,
    alignItems:'center',
  },
  montantContainer:{
    paddingTop:25,
    paddingBottom:25,
    alignItems:'center',
    backgroundColor:'$montantBckg',
  },
  montantContainerDepense:{
    paddingTop:20,
    paddingBottom:20,
    alignItems:'center',
    backgroundColor:'$montantBckg',
  },
  mensualiteContainer:{
    paddingTop:15,
    paddingBottom:25,
    backgroundColor:'$mensualiteBckg',
    alignItems:'center',
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
  inputBoxEpargne:{
    width:'80%',
    alignSelf:'center',
    borderBottomWidth:1,
    borderBottomColor:'#295174',
    position:'relative',
    paddingBottom:2,
  },
  inputOptionBox:{
    width:'80%',
    alignSelf:'center',
    flexDirection:'column'
  },
  pickerButton:{
    textAlign:'center',
    fontFamily:'lato-regular',
    fontSize:14,
    color:'$nameBckg',
  },
  input:{
    height:20,
    textAlign:'center',
    marginBottom:5,
    color:'#FFFFFF',
    fontFamily:'lato-regular',
    fontSize:16,
  },
  inputDate:{
    height:20,
    textAlign:'center',
    marginBottom:5,
    color:'#333333',
    fontFamily:'lato-regular',
    fontSize:16,
  },
  inputPicker:{
    height:20,
  },
  picker:{
    height:20,
    flexGrow:1,
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
    bottom:2,
    zIndex:11,
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
    flexDirection:'row',
    alignItems:'center',
    borderRadius:8,
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
    marginBottom:18.4,
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
  calendarIcone:{
    width:37,
    height:37
  },
  iconCash:{
    width:41,
    height:41,
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
