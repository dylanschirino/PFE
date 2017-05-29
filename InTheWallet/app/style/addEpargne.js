import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $mainBckg: '#F8FCFF',
  $nameBckg:'#6FA4C7',
  $montantBckg:'#7AB3E3',
  $mainColor:'#538EB6'
});

module.exports = EStyleSheet.create({
  quickLinkContainer:{
    backgroundColor:'#F8FCFF',
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  },
  containerForm:{
    position:'relative',
    top:-20,
  },
  quickLink:{
    width:95,
  },
  quickLinkText:{
    fontSize:12,
    borderRadius:8,
    fontFamily:'droidsans',
    color:'$mainColor',
    paddingTop:5,
    paddingBottom:5,
    alignSelf:'center',
  },
  quickLinkTextActive:{
    fontSize:12,
    borderRadius:8,
    fontFamily:'droidsans',
    color:'#FFFFFF',
    paddingTop:5,
    paddingBottom:5,
    alignSelf:'center',
  },
  quickLinkContent:{
    borderTopRightRadius:8,
    borderBottomRightRadius:8,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
    paddingLeft:40,
    paddingRight:40,
  },
  quickLinkBorder:{
    flexDirection:'row',
    borderWidth:1,
    borderRadius:10,
    borderColor:'$mainColor',
  },
  quickLinkContentActive:{
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
    paddingLeft:30,
    paddingRight:30,
    backgroundColor:'$mainColor',
  },
  quickLinkContentRight:{
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
    paddingLeft:30,
    paddingRight:30,
  },
  quickLinkContentActiveLeft:{
    borderTopRightRadius:8,
    borderBottomRightRadius:8,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
    paddingLeft:40,
    paddingRight:40,
    borderColor:'$mainColor',
    backgroundColor:'$mainColor',
  },
  labelBlue:{
      fontFamily:'droidsans',
      fontSize:14,
      color:'#275174',
      paddingBottom:10,
  },
  labelBluePret:{
      fontFamily:'droidsans',
      fontSize:14,
      color:'#275174',
      paddingBottom:10,
  },
  pretContainer:{
    alignItems:'center',
    paddingTop:20,
    paddingBottom:20,
    flexDirection:'row',
  },
  pretContainer2:{
    alignItems:'center',
    paddingTop:20,
    paddingBottom:20,
    flexDirection:'row',
  },
  pretOption:{
    width:'50%',
    alignItems:'center',
  },
  inputBoxPret:{
    borderBottomColor:'#295174',
    borderBottomWidth:1,
    width:'40%',
    paddingBottom:10,
  },
  inputOption:{
    textAlign:'center',
    color:'#333333',
    fontSize:18,
    fontFamily:'lato-light',
    height:20,
  },
  inputOptionDate:{
    height:20,
    marginBottom:2,
    alignItems:'center',
    width:'42%',
  },
  percent:{
    position:'absolute',
    right:0,
    top:0,
    fontSize:16,
    fontFamily:'lato-regular'
  },
  '@media (max-width: 320px)':{
    quickLinkContainer:{
      flex:0,
      paddingTop:11.2,
      paddingBottom:11.2,
    },
    pretContainer:{
      paddingTop:13.9,
      paddingBottom:13.9,
    },
    pretContainer2:{
      paddingTop:13.9,
      paddingBottom:13.9,
    },
    labelBlue:{
        fontFamily:'droidsans',
        fontSize:14,
        color:'#275174',
        paddingBottom:2,
    },
    labelBluePret:{
        fontFamily:'droidsans',
        fontSize:14,
        color:'#275174',
        paddingBottom:9.4,
    },
  },
  '@media (min-width:414px) and (max-width:765px)':{
    quickLinkContainer:{
      backgroundColor:'#F8FCFF',
      flex:0,
      paddingTop:16.4,
      paddingBottom:16.4,
    },
    pretContainer:{
      alignItems:'center',
      paddingTop:40,
      paddingBottom:40,
      flexDirection:'row',
    },
    pretContainer2:{
      paddingTop:36.4,
      paddingBottom:36.4,
    }
  },
  '@media (min-width:768px)':{
    quickLinkContainer:{
      backgroundColor:'#F8FCFF',
      flex:0,
      paddingTop:20,
      paddingBottom:20,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
    },
    quickLinkText:{
      fontSize:16,
      borderRadius:10,
      fontFamily:'droidsans',
      color:'$mainColor',
      paddingTop:10,
      paddingBottom:10,
      alignSelf:'center',
    },
    quickLinkTextActive:{
      fontSize:16,
      borderRadius:10,
      fontFamily:'droidsans',
      color:'#FFFFFF',
      paddingTop:10,
      paddingBottom:10,
      alignSelf:'center',
    },
    labelBlue:{
        fontFamily:'droidsans',
        fontSize:18,
        color:'#275174',
        paddingBottom:21.4,
    },
    pretContainer:{
      alignItems:'center',
      paddingTop:65.9,
      paddingBottom:65.9,
      flexDirection:'row',
    },
    pretContainer2:{
      alignItems:'center',
      paddingTop:53.7,
      paddingBottom:53.7,
      flexDirection:'row',
    },
    inputOption:{
      textAlign:'center',
      color:'#333333',
      fontSize:18,
      fontFamily:'lato-light',
      height:26,
    },
  }
});
