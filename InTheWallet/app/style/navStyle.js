import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $headerColor: '#518BB2',
});

module.exports = EStyleSheet.create({
  header:{
    backgroundColor:'$headerColor',
  },
  navBar:{
    marginTop:35,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:10,
    alignItems:'center',
  },
  backLink:{
    flexDirection:'row',
  },
  backIcone:{
    width:8.66,
    height:15,
    marginLeft:10,
  },
  backText:{
    fontSize:16,
    marginLeft:10,
    color:'#FFFFFF',
    position:'relative',
    bottom:2,
  },
  navTitle:{
    color:'#FFFFFF',
    fontWeight:'500',
    fontSize:16,
    marginRight:20,
    position:'relative',
    bottom:2,
  },
  add:{
    marginRight:31,
  },
  addIcone:{
    width:25,
    height:25,
  }
});