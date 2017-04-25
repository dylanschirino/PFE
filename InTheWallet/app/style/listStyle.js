import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $borderColor:'#376EB5',
  $mainColor:'#538EB6',
  $infoBckg:'#F2F2E8',
  $textColor:'#333333',
  $lightBlue:'#F3F8FB',
});

module.exports = EStyleSheet.create({
  categorie:{
    height:27,
    justifyContent:'space-around',
  },
  container:{
    flexDirection:'column',
    height:50,
    flexGrow:1,
  },
  catText:{
    borderWidth:1,
    borderColor:'$borderColor',
    borderRadius:5,
    marginLeft:10,
    marginRight:10,
    padding:4,
    color:'$borderColor',
    fontFamily:'lato-regular',
    fontSize:14,
  },
  img:{
    width:62,
    height:62,
    borderRadius:31,
  },
  search:{
    flex:0,
  },
  list:{
    height:800,
    flex:14,
  },
  listScroll:{
    height:800,
    flex:14,
  },
  depenseContainer:{
    position:'relative',
    flexDirection:'row',
    paddingLeft:30,
    paddingTop:23,
    paddingBottom:23,
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'$lightBlue',
  },
  smallInfo:{
    position:'absolute',
    top:0,
    right:0,
    flexDirection:'row',
    backgroundColor:'$infoBckg',
    width:60,
    alignItems:'center',
    justifyContent:'space-between',
    paddingTop:4,
    paddingBottom:4,
    paddingLeft:8,
    paddingRight:8,
  },
  imgRepeat:{
    width:15,
    height:15,
  },
  imgPayement:{
    width:21,
    height:15,
  },
  thumb:{
    borderWidth:3,
    borderColor:'$mainColor',
    borderRadius:50,
  },
  containerInfo:{
    alignSelf:'flex-start',
    marginLeft:25,
  },
  mainInfo:{
    flexDirection:'row',
    paddingTop:7,
  },
  secondInfo:{
    flexDirection:'row',
    paddingTop:15,
    alignItems:'center',
  },
  price:{
    fontSize:18,
    fontFamily:'lato-bold',
    color:'$mainColor',
    letterSpacing:0.75,
  },
  name:{
    fontSize:18,
    fontFamily:'lato-regular',
    letterSpacing:0.75,
    color:'$textColor',
    marginLeft:6,
  },
  label:{
    fontSize:12,
    fontFamily:'droidsans',
  },
  date:{
    fontSize:14,
    fontFamily:'lato-regular',
    letterSpacing:0.58,
    color:'$mainColor',
    marginLeft:17,
  },
  swipeContainer:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },
  delete:{
    width:27.44,
    height:35,
  },
  edit:{
    width:11,
    height:35
  }
});
