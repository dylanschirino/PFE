import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $headerColor: '#124D73',
});

module.exports = EStyleSheet.create({
  header:{
    backgroundColor:'$headerColor',
    flexDirection:'row',
    position:'relative'
  },
  limitFirst:{
    flex:0.2,
    alignItems:'center',
    width:'40%',
    marginTop:37,
    borderRightWidth:2,
    borderColor:"#FFFFFF",
    marginBottom:15,
  },
  limitSecond:{
    flex:0.2,
    alignItems:'center',
    width:'40%',
  },
  amount:{
    fontSize:24,
    color:'#FFFFFF',
    fontFamily:'droidsans',
    textAlign:'center',
  },
  amountLimit:{
    fontSize:24,
    color:'#FFFFFF',
    fontFamily:'droidsans',
    textAlign:'center',
    width:'26%',
    paddingBottom:25,
  },
  limitContainer:{
    marginTop:37,
    height:20,
    flexDirection:'row',
  },
  label:{
    marginTop:10,
    fontSize:14,
    fontFamily:'droidsans',
    color:'#89B0DB',
  },
  labelLimit:{
    marginTop:18,
    fontSize:14,
    fontFamily:'droidsans',
    color:'#89B0DB',
  },
  button:{
    marginTop:7,
  },
  buttonImg:{
    width:5,
    height:16,
  },
  logoutImg:{
    width:29,
    height:29,
  },
  logout:{
    position:'absolute',
    right:10,
    top:24,
  },
  buttonImgCheck:{
    width:15,
    height:15,
    marginLeft:10,
  },
  progressBar:{
    width:'70%',
    alignSelf:'center',
    marginBottom:5,
    marginTop:5,
    marginRight:5,
  },
  progressView:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    borderRadius:8,
    borderColor:'#FFFFFF',
    width:'80%'
  },
  progressContainer:{
    backgroundColor:'$headerColor',
    flexDirection:'column',
    alignItems:'center',
    paddingBottom:15,
    position:'relative',
  },
  percent:{
    fontSize:9,
    fontFamily:'lato-regular',
    color:'#FFFFFF',
    marginRight:10,
  },
  chartContainer:{
    alignItems:'center',
    flex:1,
    position:'relative',
  },
  lastDepenseContainer:{
    alignItems:'center',
    flex:1.5,
  },
  chart:{
    width:'100%',
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'rgba(81,142,182,0.3)',
  },
  depenseHeader:{
    backgroundColor:'#F8FCFF',
    paddingTop:15,
    paddingBottom:13,
    width:'100%',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#518DB6'
  },
  depenseHeaderTitle:{
    fontFamily:'droidsans',
    fontSize:14,
    lineHeight:0,
    color:'#002E48',
    alignSelf:'center'
  },
  depenseContainer:{
    width:'100%',
    borderBottomWidth:1,
    borderColor:'#F8FCFF',
    borderColor:'#F3F8FB',
  },
  depenseContainerOdd:{
    width:'100%',
    borderBottomWidth:1,
    borderColor:'#F3F8FB',
    backgroundColor:'#F8FCFF'
  },
  depenseContent:{
    paddingTop:25,
    paddingBottom:20,
    flexDirection:'row',
    width:'90%',
    alignSelf:'center',
    justifyContent:'space-between',
  },
  price:{
    fontFamily:'droidsans',
    fontSize:16,
    color:'#528DB5',
    marginLeft:15,
    textAlign:'left',
    alignSelf:'center'
  },
  title:{
    fontFamily:'lato-regular',
    fontSize:16,
    color:'#333333',
    alignSelf:'center'
  },
  date:{
    fontFamily:'droidsans',
    fontSize:11,
    color:'#528DB5',
    lineHeight:15,
    width:50,
    textAlign:'center'
  },
  infoContainer:{
    position:'absolute',
    top:20,
    borderRadius:8,
    width:276,
    paddingTop:10,
    paddingBottom:10,
    borderWidth:1,
    borderColor:'#E5A23F',
    borderRadius:8,
    flex:1,
    backgroundColor:'#FFFDF4',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  infoTitle:{
    textAlign:'center',
    fontSize:15,
    fontFamily:'droidsans',
    color:'#E5A23F',
    marginLeft:10,
  },
  infoIcone:{
    width:30,
    height:30,
  },
  infoIconeStorm:{
    width:30,
    height:29,
  },
  infoContainerStorm:{
    position:'absolute',
    top:20,
    borderRadius:8,
    width:276,
    paddingTop:10,
    paddingBottom:10,
    borderWidth:1,
    borderColor:'#949DA8',
    borderRadius:8,
    flex:1,
    backgroundColor:'#ECEFF4',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  infoTitleStorm:{
    textAlign:'center',
    fontSize:15,
    fontFamily:'droidsans',
    color:'#949DA8',
    marginLeft:10,
  },
  depenseContainerCustom:{
    flex:1,
  },
  noContentTitle:{
    fontSize:18,
    fontFamily:'lato-regular',
    color:'#333333',
    paddingTop:70,
    paddingBottom:10,
    textAlign:'center',
  },
  noContentButton:{
    backgroundColor:'#518DB6',
    borderRadius:8,
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
  },
  noContentButtonTitle:{
    fontSize:16,
    fontFamily:'lato-regular',
    color:'#FFFFFF',
    borderRadius:8,
    paddingTop:12,
    paddingBottom:12,
    textAlign:'center',
  },
  '@media (max-width: 320px)':{
    depenseContent:{
      paddingTop:15,
      paddingBottom:15,
    },
    noContentTitle:{
      paddingTop:45,
    },
  },
  '@media (min-width:380px) and (max-width:768px)':{
    header:{
      height:150,
    },
  }
});
