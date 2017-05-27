import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $Bckg: '#295174'
});


module.exports = EStyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'$Bckg',
    alignItems:'center',
    justifyContent:'center',
  },
  img:{
    width:145,
    height:194,
    marginTop:40,
    marginBottom:40,
  },
  mainContent:{
    alignItems:'center',
  },
  title:{
    fontFamily:'droidsans',
    fontSize:20,
    color:'#FFFFFF',
    textAlign:'center',
  }
});
