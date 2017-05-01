import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $mainBckg: '#F8FCFF',
  $nameBckg:'#6FA4C7',
  $montantBckg:'#7AB3E3',
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
});
