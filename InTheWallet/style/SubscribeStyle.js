import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $titleColor: '#235182'
});

module.exports = EStyleSheet.create({
  title:{
    fontFamily:'lato-light',
    fontSize:32,
    textAlign:'center',
    marginTop:50,
    color: '$titleColor'
  },
  svg:{
    flex:1,
  }
});
