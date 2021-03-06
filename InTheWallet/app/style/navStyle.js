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
    width:'25%',
  },
  backIcone:{
    width:8.66,
    height:15,
    marginLeft:10,
  },
  backText:{
    fontSize:15,
    marginLeft:7,
    color:'#FFFFFF',
    position:'relative',
    bottom:2,
  },
  navTitle:{
    color:'#FFFFFF',
    fontWeight:'500',
    fontSize:15,
    position:'relative',
    bottom:2,
    marginRight:40,
    width:'45%',
    textAlign:'center',
  },
  navTitleCustom:{
    color:'#FFFFFF',
    fontWeight:'500',
    fontSize:15,
    textAlign:'center',
    position:'relative',
    bottom:2,
    marginRight:110,
    textAlign:'center',
  },
  navTitleCustomLimit:{
    color:'#FFFFFF',
    fontWeight:'500',
    fontSize:15,
    textAlign:'center',
    position:'relative',
    bottom:2,
    marginRight:130,
    textAlign:'center',
  },
  navTitleCustomPret:{
    color:'#FFFFFF',
    fontWeight:'500',
    fontSize:15,
    textAlign:'center',
    position:'relative',
    bottom:2,
    marginRight:130,
    textAlign:'center',
  },
  add:{
    marginLeft:-30,
    marginRight:20,
  },
  addCustom:{
    marginRight:25,
  },
  addIcone:{
    width:25,
    height:25,
  },
  '@media (max-width: 320px)':{
    navTitleCustomLimit:{
      marginRight:100,
    },
    navTitleCustom:{
      marginRight:70,
    },
    navTitleCustomPret:{
      marginRight:100,
    },
    navTitle:{
      marginLeft:15,
    },
    add:{
      marginLeft:-30,
      marginRight:15,
    },
    addCustom:{
      marginRight:20,
    },
  },
  '@media (min-width:414px) and (max-width:765px)':{
    navTitleCustomLimit:{
      marginRight:150,
    },
    navTitleCustom:{
      marginRight:130,
    },
    navTitleCustomPret:{
      marginRight:150,
    },
    add:{
      marginLeft:-20,
      marginRight:20,
    },
    addCustom:{
      marginRight:10,
    },
  },
  '@media (min-width:768px)':{
    navBar:{
      marginTop:45,
      paddingBottom:15,
    },
    backIcone:{
      width:12.66,
      height:19,
      marginLeft:40,
    },
    backText:{
      fontSize:18,
      marginLeft:15,
      color:'#FFFFFF',
      position:'relative',
      bottom:2,
    },
    navTitle:{
      fontSize:18,
      marginRight:50,
    },
    navTitleCustom:{
      fontSize:18,
      marginRight:290,
    },
    navTitleCustomLimit:{
      fontSize:18,
      marginRight:320,
      bottom:2,
    },
    navTitleCustomPret:{
      fontSize:18,
      marginRight:320,
    },
    add:{
      marginLeft:0,
      marginRight:10,
    },
    addCustom:{
      marginRight:15,
    },
    addIcone:{
      width:30,
      height:30,
    },
  }
});
