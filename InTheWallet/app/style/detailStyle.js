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
    justifyContent:'flex-start',
    position:'absolute',
    left:15,
    top:20,
  },
  arrow:{
    width:25.5,
    height:18,
    marginTop:1,
    marginLeft:3,
  },
  title:{
    color:'#FFFFFF',
    fontFamily:'droidsans',
    fontWeight:'600',
    fontSize:18,
    lineHeight:28,
    letterSpacing:0.8,
    textAlign:'center',
  },
  content:{
    backgroundColor:'$contentBckg',
    flex:1,
  },
  contentHead:{
    flexDirection:'row',
    backgroundColor:'#6594B5',
    alignItems:'center',
    justifyContent:'center',
    position:'relative',
    paddingTop:15,
    paddingBottom:15,
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
  },
  '@media (max-width: 320px)':{
    headContent:{
      position:'relative',
      height:100,
    },
    contentHead:{
      paddingTop:8,
      paddingBottom:8,
    },
    link:{
      position:'absolute',
      left:30,
      top:13,
    },
    title:{
      color:'#FFFFFF',
      fontFamily:'droidsans',
      fontWeight:'600',
      fontSize:16,
      lineHeight:24,
    },
    arrow:{
      width:20.5,
      height:13,
      marginTop:2,
      marginLeft:3,
    },
    contentInfo:{
      marginLeft:32,
      marginTop:15,
    },
    info:{
      marginBottom:13,
    },
  }
});
