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
    alignItems:'center',
    justifyContent:'center',
  },
  container:{
    flexDirection:'column',
    height:57,
    flex:0.23,
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
  noCatText:{
    paddingTop:5,
    textAlign:'center',
    color:'$borderColor',
    fontFamily:'lato-regular',
    fontSize:15,
    width:'100%',
  },
  listCustom:{
    flexGrow:1,
    width:'100%',
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
  depenseContainerOdd:{
    position:'relative',
    flexDirection:'row',
    paddingLeft:30,
    paddingTop:23,
    paddingBottom:23,
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'$lightBlue',
    backgroundColor:'#F8FCFF',
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
    width:66,
    height:66,
    alignItems:'center',
    justifyContent:'center',
  },
  img:{
    width:61,
    height:61,
    borderRadius:31,
  },
  imgThumb:{
    width:36,
    height:30,
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
    fontSize:17,
    fontFamily:'lato-regular',
    letterSpacing:0.75,
    color:'$textColor',
    marginLeft:6,
  },
  nameCustom:{
    fontSize:22,
    fontFamily:'lato-regular',
    letterSpacing:0.75,
    color:'$textColor',
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
  },
  quickLinkContainer:{
    backgroundColor:'#F8FCFF',
    flexGrow:0.1,
    height:20,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  quickLinkBorder:{
    flexDirection:'row',
    borderWidth:1,
    borderRadius:10,
    borderColor:'$mainColor',
  },
  quickLink:{
    width:95,
  },
  quickLinkText:{
    fontSize:12,
    fontFamily:'droidsans',
    textAlign:'center',
    color:'$mainColor',
  },
  quickLinkTextActive:{
    fontSize:12,
    fontFamily:'droidsans',
    color:'#FFFFFF',
    textAlign:'center',
  },
  quickLinkContent:{
    borderTopRightRadius:8,
    borderBottomRightRadius:8,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
    paddingTop:8,
    paddingBottom:8,
    paddingLeft:40,
    paddingRight:40,
  },
  quickLinkContentActive:{
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
    paddingTop:8,
    paddingBottom:8,
    paddingLeft:30,
    paddingRight:30,
    borderColor:'$mainColor',
    backgroundColor:'$mainColor',
  },
  quickLinkContentRight:{
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
    paddingTop:8,
    paddingBottom:8,
    paddingLeft:30,
    paddingRight:30,
  },
  quickLinkContentActiveLeft:{
    borderTopRightRadius:8,
    borderBottomRightRadius:8,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
    paddingTop:8,
    paddingBottom:8,
    paddingLeft:40,
    paddingRight:40,
    borderColor:'$mainColor',
    backgroundColor:'$mainColor',
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
    borderColor:'$mainColor',
  },
  progressContainer:{
    flexDirection:'column',
    alignItems:'center',
    paddingTop:10,
  },
  percent:{
    fontSize:9,
    fontFamily:'lato-regular',
    color:'$mainColor',
    marginRight:10,
  },
  noContent:{
    paddingTop:100,
    alignItems:'center',
  },
  noContentIcon:{
    width:152,
    height:95
  },
  noContentTitle:{
    fontSize:18,
    fontFamily:'lato-regular',
    color:'#333333',
    paddingTop:30,
    paddingBottom:10,
    textAlign:'center',
  },
  noContentButton:{
    backgroundColor:'#518DB6',
    borderRadius:8,
    marginTop:10,
    paddingLeft:10,
    paddingRight:10,
    width:'80%',
    alignSelf:'center',
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
    container:{
      flexDirection:'column',
      height:50,
      flex:0.3,
    },
    name:{
      fontSize:16,
      letterSpacing:0.75,
    },
    nameCustom:{
      fontSize:18,
    },
    containerInfo:{
      marginLeft:10,
    },
    noContent:{
      paddingTop:50
    },
  },
  '@media (min-width:414px) and (max-width:765px)':{
    categorie:{
      height:37,
      alignItems:'center',
      justifyContent:'center',
    },
  },
  '@media (min-width:768px)':{
    categorie:{
      height:27,
      alignItems:'center',
      justifyContent:'center',
    },
    container:{
      flexDirection:'column',
      height:57,
      flex:0.15,
    },
    listCustom:{
      flexGrow:1,
      width:'100%',
    },
    noContent:{
      paddingTop:250,
    },
    noContentIcon:{
      width:185,
      height:115
    },
    noContentTitle:{
      fontSize:24,
      paddingBottom:20,
      textAlign:'center',
    },
    noContentButton:{
      paddingLeft:15,
      paddingRight:15,
    },
    noContentButtonTitle:{
      fontSize:18,
      fontFamily:'lato-regular',
      color:'#FFFFFF',
      borderRadius:8,
      paddingTop:15,
      paddingBottom:15,
      textAlign:'center',
    },
    catText:{
      fontSize:18,
      marginLeft:15,
      marginRight:15,
    },
    noCatText:{
      fontSize:18,
    },
    price:{
      fontSize:24,
      fontFamily:'lato-bold',
      color:'$mainColor',
      letterSpacing:1,
    },
    name:{
      fontSize:24,
      marginLeft:10,
    },
    nameCustom:{
      fontSize:22,
    },
    label:{
      fontSize:16,
    },
    date:{
      fontSize:16,
      marginLeft:17,
    },
    depenseContainer:{
      paddingLeft:40,
      paddingTop:33,
      paddingBottom:33,
    },
    depenseContainerOdd:{
      paddingLeft:40,
      paddingTop:33,
      paddingBottom:33,
    },
    smallInfo:{
      width:80,
      alignItems:'center',
      justifyContent:'space-between',
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:10,
      paddingRight:10,
    },
    imgRepeat:{
      width:20,
      height:20,
    },
    imgPayement:{
      width:29,
      height:21,
    },
    quickLinkText:{
      fontSize:16,
      paddingTop:10,
      paddingBottom:10,
    },
    quickLinkTextActive:{
      fontSize:16,
      paddingTop:10,
      paddingBottom:10,
    },
  }
});
