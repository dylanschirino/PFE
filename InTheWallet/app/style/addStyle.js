import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $mainBckg: '#F8FCFF',
  $nameBckg:'#6FA4C7',
});

module.exports = EStyleSheet.create({
  mainContent:{
    flex:1,
    backgroundColor:'$mainBckg',
  },
  nameContainer:{
    marginTop:22,
    backgroundColor:'$nameBckg',
    paddingTop:20,
    paddingBottom:15,
    alignItems:'center',
  },
  label:{
    fontFamily:'droidsans',
    fontSize:14,
    color:'#FFFFFF',
    paddingBottom:10,
  },
  inputBox:{
    width:'80%',
    alignSelf:'center',
    borderBottomWidth:1,
    borderBottomColor:'#FFFFFF',
    position:'relative'
  },
  input:{
    height:20,
    textAlign:'center',
    marginBottom:5,
  },
  icone:{
    width:15,
    height:15,
    position:'absolute',
  }
});
