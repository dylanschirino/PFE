import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $headerColor: '#124D73',
});

module.exports = EStyleSheet.create({
  header:{
    backgroundColor:'$headerColor',
    flexDirection:'row',
  },
  limitFirst:{
    flex:1,
    alignItems:'center',
    width:'50%',
    marginTop:37,
    borderRightWidth:2,
    borderColor:"#FFFFFF",
    marginBottom:15,
  },
  limitSecond:{
    flex:1,
    alignItems:'center',
    width:'50%',
    marginTop:37,
    marginBottom:15,
  },
  amount:{
    fontSize:24,
    color:'#FFFFFF',
    fontFamily:'droidsans',
  },
  label:{
    marginTop:10,
    fontSize:14,
    fontFamily:'droidsans',
    color:'#89B0DB',
  },

  progressBar:{
    width:'70%',
    alignSelf:'center',
    marginBottom:5,
    marginTop:5,
    marginRight:10,
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
    paddingBottom:15,
    width:'100%',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#518DB6'
  },
  depenseHeaderTitle:{
    fontFamily:'droidsans',
    fontSize:14,
    color:'#002E48',
    alignSelf:'center'
  },
  depenseContainer:{
    width:'100%',
    borderBottomWidth:1,
    borderColor:'#F3F8FB'
  },
  depenseContainerCustom:{
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
    fontSize:12,
    color:'#528DB5',
    lineHeight:15,
    width:40,
    textAlign:'center'
  },
  menu:{
    width:'100%',
    backgroundColor:'#538EB6',
    flexDirection:'row',
    justifyContent:'space-around',
    height:42,
  },
  menuContent:{
    height:42,
    width:'95%',
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  menuLink:{
    alignItems:'center',
    paddingTop:5,
    paddingBottom:5,
  },
  icone:{
    width:20,
    height:20,
  },
  iconeEpargne:{
    width:26,
    height:20,
  },
  iconePret:{
    width:16,
    height:20,
  },
  iconeAdd:{
    width:30,
    height:30
  },
  menuLabel:{
    fontSize:10,
    color:'#FFFFFF',
    paddingTop:2,
  },
  menuLinkAdd:{
    position:'relative',
    bottom:20,
    right:5,
  },
  add:{
    backgroundColor:'#FFFFFF',
    paddingTop:9,
    paddingBottom:38,
    width:50,
    height:50,
    alignItems:'center',
    borderRadius:50,
    borderWidth:1,
    borderColor:'#538EB6'
  }
});
