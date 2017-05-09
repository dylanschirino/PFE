import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $contentBckg: '#F8FCFF',
  $mainColor:'#518EB6'
});

module.exports = EStyleSheet.create({
  quickLinkContainerCustom:{
    backgroundColor:'#FFFFFF',
    flex:0,
    height:60,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  imgAnnuler:{
    width:25,
    height:25,
  },
  contentInfo:{
    flex:2,
    backgroundColor:'$contentBckg',
  },
  container:{
    width:'80%',
    alignSelf:'center',
  },
  head:{
    flexDirection:'row',
    paddingTop:40,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize:24,
    fontFamily:'droidsans',
    marginLeft:20,
    color:'$mainColor',
    letterSpacing:1,
  },
  clockContainer:{
    width:150,
    height:150,
    alignSelf:'center',
    backgroundColor:'$mainColor',
    marginTop:50,
    marginBottom:50,
    borderRadius:150,
    justifyContent:'center',
    alignItems:'center',
  },
  clockBorder:{
    width:142,
    height:142,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#FFFFFF',
    borderWidth:1,
    borderRadius:140,
  },
  timer:{
    width:'25%',
    textAlign:'center',
    color:'#FFFFFF',
    fontSize:18,
    fontFamily:'lato-light',
    lineHeight:28,
  },
  row:{
    justifyContent:'space-between',
    flexDirection:'row',
    marginBottom:20,
  },
  content:{
    alignItems:'flex-start',
    width:'45%',
  },
  label:{
    fontSize:14,
    fontFamily:'droidsans',
    letterSpacing:0.5,
    lineHeight:24,
    color:'$mainColor',
  },
  response:{
    fontSize:16,
    fontFamily:'lato-regular',
    lineHeight:26,
  }
});
