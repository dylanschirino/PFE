import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $headerColor: '#124D73',
});

module.exports = EStyleSheet.create({
  headContent:{
    position:'relative'
  },
  photo:{
    width:'100%',
    height:151,
    position:'absolute'
  },
  arrow:{
    width:25.5,
    height:18,
    zIndex:1,
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
    width:'50%',
    alignSelf:'center',
    textAlign:'center',
    marginTop:20,
    textShadowColor:'rgba(0,0,0,0.5)',
    textShadowRadius:4,
    textShadowOffset:{height:2},
  }
});
