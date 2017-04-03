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
    marginTop:47,
    borderRightWidth:2,
    borderColor:"#FFFFFF",
    marginBottom:15,
  },
  limitSecond:{
    flex:1,
    alignItems:'center',
    width:'50%',
    marginTop:47,
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
  }
});
