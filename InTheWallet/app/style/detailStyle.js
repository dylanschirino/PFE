import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $contentBckg: '#F8FCFF',
  $label:'#558FB6',
});

module.exports = EStyleSheet.create({
  headContent:{
    position:'relative',
    height:151,
  },
  photo:{
    width:'100%',
    height:151,
    position:'absolute',
  },
  link:{
    zIndex:1,
  },
  arrow:{
    width:25.5,
    height:18,
    marginTop:25,
    marginLeft:20,
  },
  title:{
    backgroundColor:'transparent',
    color:'#FFFFFF',
    fontFamily:'droidsans',
    fontWeight:'600',
    fontSize:20,
    lineHeight:28,
    letterSpacing:0.8,
    width:'60%',
    alignSelf:'center',
    textAlign:'center',
    marginTop:20,
    textShadowColor:'rgba(0,0,0,0.5)',
    textShadowRadius:4,
    textShadowOffset:{height:2},
  },
  content:{
    backgroundColor:'$contentBckg',
    flex:1,
  },
  contentInfo:{
    marginLeft:32,
    marginTop:15,
  },
  label:{
    fontSize:14,
    fontFamily:'droidsans',
    color:'$label',
    marginBottom:5,
  },
  info:{
    fontSize:16,
    color:'#333333',
    letterSpacing:0.67,
    fontFamily:'lato-regular',
    marginBottom:15,
    width:'70%',
    lineHeight:26,
  }
});