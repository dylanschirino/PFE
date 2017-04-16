import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $borderColor:'#376EB5',
});

module.exports = EStyleSheet.create({
  categorie:{
    height:50,
    justifyContent:'space-around',
    paddingTop:10,
    paddingBottom:10,
  },
  catText:{
    borderWidth:1,
    borderColor:'$borderColor',
    borderRadius:5,
    marginLeft:10,
    marginRight:10,
    padding:5,
    color:'$borderColor',
    fontFamily:'lato-regular',
    fontSize:14,
  }

});
