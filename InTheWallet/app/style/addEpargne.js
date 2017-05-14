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
    borderRadius:8,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
    borderWidth:1,
    borderColor:'$mainColor',
  },
  quickLinkContentActive:{
    borderRadius:8,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
    borderWidth:1,
    borderColor:'$mainColor',
    backgroundColor:'$mainColor',
  },
  quickLinkContentRight:{
    borderRadius:8,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
    borderWidth:1,
    borderColor:'$mainColor',
  },
  quickLinkContentActiveLeft:{
    borderRadius:8,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
    borderWidth:1,
    borderColor:'$mainColor',
    backgroundColor:'$mainColor',
  },
  labelBlue:{
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
  '@media (max-width: 320px)':{
    quickLinkContainer:{
      flex:0,
      paddingTop:7,
      paddingBottom:7,
    },
    pretContainer:{
      paddingTop:13.9,
      paddingBottom:13.9,
    },
  }
});
