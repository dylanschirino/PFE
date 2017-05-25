import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,  StatusBar, Image,ProgressViewIOS,Alert,TextInput,AsyncStorage,PushNotificationIOS} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Form from 'react-native-form';
import axios from 'axios';
import Chart from 'react-native-chart';
import Display from 'react-native-display';
import TimerMixin from 'react-timer-mixin';
import Load from "react-native-loading-gif";
import DeviceInfo from 'react-native-device-info';
var PushNotification = require('react-native-push-notification');
import RNLocalNotifications from 'react-native-local-notifications';

let styles = require('../style/homeStyle'),
    menu = require('../style/menuStyle');


import Depense from "./depense/depense";
import Details from './depense/details';
import Epargne from "./epargne/epargne";
import Pret from './pret/pret';
import addDepense from './depense/addDepense';
import addPret from './pret/addPret';
import addEpargne from './epargne/addEpargne';
import Limit from './Limit';
import Login from './login/Login';

let Home = React.createClass ({
    mixins: [TimerMixin],
  componentDidMount() {
    var config = {
      'headers': { 'Authorization': 'Bearer ' + this.props.token }
    };

    axios.get('http://104.131.74.22:8080/home?user='+this.props.username,config
      )
      .then(response => {
        let dataTab = response.data['data'];
        if(dataTab.length == 0){
          this.setState({limit:0})
        }
        else {
          const limit = dataTab[dataTab.length-1]['maxdepense'];
          this.setState({ limit });
        }
      });

    axios.get('http://104.131.74.22:8080/depense?user='+this.props.username,config)
      .then( response => {
        const depenseObject = response.data['data'];
        if (depenseObject.length == 0 ){
          this.setState({total:0});
          const depenseArray = Object.keys(depenseObject).map(key => depenseObject[key]);
          this.setState({ depenseArray });
        }
        else {
          var depense = response.data['data'][0]['id'];
          const depenseArray = Object.keys(depenseObject).map(key => depenseObject[key]);
          this.setState({ depenseArray });
          var arrayJanv = [], arrayFev = [], arrayMars = [],arrayAvril = [],arrayMai = [],arrayJuin = [],arrayJuil = [],arrayAout = [],arraySept = [],arrayOcto = [],arrayNov = [],arrayDec = [];
          var monthArray = ['JAN','FÉV','MARS','AVRIL','MAI','JUIN','JUIL','AOÛT','SEP','OCT','NOV','DÉC'];
          var currentDate = new Date();
          var currentMonth = monthArray[currentDate.getMonth()];

          for ( var i = 0; i< depenseArray.length; i++ ){
            var depense = response.data['data'][i]['montant'];
            var mois = response.data['data'][i]['month'];
            if( mois == 'JAN' ){
              arrayJanv.push(depense);
              var countJanv = 0;
              for(var j=0; j < arrayJanv.length; j++)
                {
                  countJanv += arrayJanv[j];
                  this.setState({janv:countJanv});
                  if(currentMonth == 'JAN'){
                    this.setState({total:countJanv});
                  }
                }
            }
            else if( mois == 'FÉV' ){
              arrayFev.push(depense);
              var countFev = 0;

              for(var j=0; j < arrayFev.length; j++)
                {
                  countFev += arrayFev[j];
                  this.setState({fev:countFev});
                  if( currentMonth = 'FÉV' ){
                    this.setState({total:countFev});
                  }
                }
            }
            else if( mois == 'MARS' ){
              arrayMars.push(depense);
              var countMars = 0;
              for(var j=0; j < arrayMars.length; j++)
                {
                  countMars += arrayMars[j];
                  this.setState({mars:countMars});
                  if(currentMonth == 'MARS'){
                    this.setState({total:countMars});
                  }
                }
            }
            else if( mois == 'AVRIL' ){
              arrayAvril.push(depense);
              var countAvril = 0;
              for(var j=0; j < arrayAvril.length; j++)
                {
                  countAvril += arrayAvril[j];
                  this.setState({avril:countAvril});
                  if(currentMonth == 'AVRIL'){
                    this.setState({total:countAvril});
                  }
                }
            }
            else if( mois == 'MAI' ){
              arrayMai.push(depense);
              var countMai = 0;
              for(var j=0; j < arrayMai.length; j++)
                {
                  countMai += arrayMai[j];
                  this.setState({mai:countMai});
                  if(currentMonth == 'MAI'){
                    this.setState({total:countMai});
                  }
                }
            }
            else if( mois == 'JUIN' ){
              arrayJuin.push(depense);
              var countJuin = 0;
              for(var j=0; j < arrayJuin.length; j++)
                {
                  countJuin += arrayJuin[j];
                  this.setState({juin:countJuin});
                  if(currentMonth == 'JUIN'){
                    this.setState({total:countJuin});
                  }
                }
            }
            else if( mois == 'JUIL' ){
              arrayJuil.push(depense);
              var countJuil = 0;
              for(var j=0; j < arrayJuil.length; j++)
                {
                  countJuil += arrayJuil[j];
                  this.setState({juil:countJuil});
                  if(currentMonth == 'JUIL'){
                    this.setState({total:countJuil});
                  }
                }
            }
            else if( mois == 'AOÛT' ){
              arrayAout.push(depense);
              var countAout = 0;
              for(var j=0; j < arrayAout.length; j++)
                {
                  countAout += arrayAout[j];
                  this.setState({aout:countAout});
                  if(currentMonth == 'AOÛT'){
                    this.setState({total:countAout});
                  }
                }
            }
            else if( mois == 'SEP' ){
              arraySept.push(depense);
              var countSept = 0;
              for(var j=0; j < arraySept.length; j++)
                {
                  countSept += arraySept[j];
                  this.setState({sept:countSept});
                  if(currentMonth == 'SEP'){
                    this.setState({total:countSept});
                  }
                }
            }
            else if( mois == 'OCT' ){
              arrayOcto.push(depense);
              var countOcto = 0;
              for(var j=0; j < arrayOcto.length; j++)
                {
                  countOcto += arrayOcto[j];
                  this.setState({oct:countOcto});
                  if(currentMonth == 'OCT'){
                    this.setState({total:countOcto});
                  }
                }
            }
            else if( mois == 'NOV' ){
              arrayNov.push(depense);
              var countNov = 0;
              for(var j=0; j < arrayNov.length; j++)
                {
                  countNov += arrayNov[j];
                  this.setState({nov:countNov});
                  if(currentMonth == 'NOV'){
                    this.setState({total:countNov});
                  }
                }
            }
            else if( mois == 'DÉC' ){
              arrayDec.push(depense);
              var countDec = 0;
              for(var j=0; j < arrayDec.length; j++)
                {
                  countDec += arrayDec[j];
                  this.setState({dec:countDec});
                  if(currentMonth == 'DÉC'){
                    this.setState({total:countDec});
                  }
                }
            }
          }
        }
      })
      .catch(function (error) {
        alert('Erreur:'+ error);
      });


    this.setTimeout( () => { this.toggleDisplayInfo()} ,5000);

    this.refs.Load.setTimeClose(1500);
    var pourcentage = (Math.floor(this.state.total)/Math.floor(this.state.limit))*100;
    if( pourcentage == 'NaN' || pourcentage == 'Infinity'){
      PushNotification.localNotificationSchedule({
        message: "Vous n'avez pas encodé de limite du mois",
        date: new Date(Date.now() + ( 86400 ))
      });
    }
    else if( pourcentage >= 0 && pourcentage <= 50 ){
      PushNotification.localNotificationSchedule({
        message: "Oh hey l'ami ! Felicitation continuez comme ça!",
        date: new Date(Date.now() + ( 86400 ))
      });
    }
    else if( pourcentage >= 81 && pourcentage <= 99 ){
      PushNotification.localNotificationSchedule({
        message: "Oh hey l'ami ! Attention vous n'êtes pas sur la bonne voie",
        date: new Date(Date.now() + ( 86400 ))
      });
    }
    else if( pourcentage >= 100){
      PushNotification.localNotificationSchedule({
        message: "Faites attention ! Vous avez dépasser la limite du mois",
        date: new Date(Date.now() + ( 86400 ))
      });
    }
  },
  getInitialState: function() {
    return {
      limit:'',
      name:'',
      total:'',
      depenseArray:[[],[]],
      user:this.props.username,
      tokenID:this.props.token,
      enable:false,
      enableInfo:true,
      janv:0,
      fev:0,
      mars:0,
      avril:0,
      mai:0,
      juin:0,
      juil:0,
      aout:0,
      sept:0,
      oct:0,
      nov:0,
      dec:0,

    }
  },
  toggleDisplay() {
    let toggle = !this.state.enable;
    this.setState({enable: toggle});
  },
  toggleDisplayInfo(){
    this.setState({enableInfo:false});
  },
  logOut(){
    AsyncStorage.multiRemove(['tokenID','username']);
    this.props.navigator.push({
      component: Login,
      title:'Login',
      navigationBarHidden:true,
    });
  },
  goDepense(){
    this.props.navigator.push({
      component: Depense,
      title:'Dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user, token:this.props.token}
    });
  },
  goEpargne(){
    this.props.navigator.push({
      component: Epargne,
      title:'Épargne',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token}
    });
  },
  goPret(){
    this.props.navigator.push({
      component: Pret,
      title:'Prêt',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token}
    });
  },
  goLimit(){
    this.props.navigator.push({
      component: Limit,
      title:'Limit',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token}
    });
  },
  addDepense(){
    this.props.navigator.push({
      component: addDepense,
      title:'Ajouter dépense',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    })
  },
  addPret(){
    this.props.navigator.push({
      component: addPret,
      title:'Ajouter prêt',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    })
  },
  addEpargne(){
    this.props.navigator.push({
      component: addEpargne,
      title:'Ajouter épargne',
      navigationBarHidden:true,
      passProps:{username:this.state.user,token:this.props.token},
    })
  },
  goDetails(id,name){
    let spendArray = this.state.depenseArray;

        this.props.navigator.push({
          component: Details,
          title:name,
          passProps:{depense_id:id,name:name,username:this.state.user,token:this.props.token},
          navigationBarHidden:true,
        });
  },
  renderInfo(){
    var pourcentage = (Math.floor(this.state.total)/Math.floor(this.state.limit))*100;
    if( pourcentage == 'NaN' || pourcentage == 'Infinity'){
      return(
        <Display enable={this.state.enableInfo} enterDuration={500} exitDuration={250} exit="fadeOutDown" enter="fadeInUp" style={styles.infoContainerCloud}>
          <Image source={require('../img/clouds.png')} style={styles.infoIconeCloud}
           />
         <Text style={styles.infoTitleCloud}>Aucune limite du mois fixé!</Text>
        </Display>
      )
    }
    else if( pourcentage >= 0 && pourcentage <= 50 ){
      return(
        <Display enable={this.state.enableInfo} enterDuration={500} exitDuration={250} exit="fadeOutDown" enter="fadeInUp" style={styles.infoContainer}>
          <Image source={require('../img/sun.png')} style={styles.infoIcone}
           />
         <Text style={styles.infoTitle}>Les vacances au soleil arrivent !</Text>
        </Display>
      )
    }
    else if( pourcentage >= 51 && pourcentage <= 99 ){
      var date = new Date();
      PushNotification.localNotificationSchedule({
        message: "Attention, vous devenez encore tenir la moitié du mois avec ce qu'il vous reste!",
        date: new Date(Date.now() + (1296000)) // in 15 days
      });
      return(
        <Display enable={this.state.enableInfo} enterDuration={500} exitDuration={250} exit="fadeOutDown" enter="fadeInUp" style={styles.infoContainerStorm}>
          <Image source={require('../img/storm.png')} style={styles.infoIconeStorm}
           />
         <Text style={styles.infoTitleStorm}>Ressaisissez vous!</Text>
        </Display>
      )
    }
    else if( pourcentage >= 100){
      return(
        <Display enable={this.state.enableInfo} enterDuration={500} exitDuration={250} exit="fadeOutDown" enter="fadeInUp" style={styles.infoContainerStorm}>
          <Image source={require('../img/storm.png')} style={styles.infoIconeStorm}
           />
         <Text style={styles.infoTitleStorm}>Vous avez dépassez la limite!</Text>
        </Display>
      )
    }
  },
  _renderDepense(){
    let length = this.state.depenseArray.length;
    if( this.state.depenseArray.length == 0 ){
      return(
            <View>
              <View style={styles.noContent}>
                <Text style={styles.noContentTitle}>Aucune dépense trouvée</Text>
              </View>
              <View style={styles.noContentButton}>
                <TouchableOpacity onPress={this.addDepense}>
                  <Text style={styles.noContentButtonTitle}>Ajouter votre première dépense</Text>
                </TouchableOpacity>
              </View>
            </View>
      )
    }
    else{
      if(DeviceInfo.isTablet() == true){
        let threeLast = this.state.depenseArray.slice(Math.max(length - 5, 0));
        return threeLast.map( ( oDepense, i ) => {
          var generateName = function(){
            if(DeviceInfo.isTablet() == true){
              return oDepense.name;
            }
            else{
              if(name != null && name.length >= 40 ){
                return oDepense.name.substring(0,20)+'...';
              }
              else{
                return oDepense.name;
              }
            }
          }
            return (
              <TouchableOpacity style={i % 2 ? styles.depenseContainerOdd:styles.depenseContainer} key={i} onPress={ ()=>{this.goDetails(oDepense.id, oDepense.name)}}>
                <View style={styles.depenseContent}>
                  <Text style={styles.price}>{oDepense.montant}€</Text>
                  <Text style={styles.title}>{generateName()}</Text>
                  <View>
                    <Text style={styles.date}>{oDepense.created_at}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
        } );
      }
      else{
        let threeLast = this.state.depenseArray.slice(Math.max(length - 3, 0));

        return threeLast.map( ( oDepense, i ) => {
          var name = oDepense.name;
          var generateName = function(){
            if(DeviceInfo.isTablet() == true){
              return oDepense.name;
            }
            else{
              if(name != null && name.length >= 26 ){
                return oDepense.name.substring(0,20)+'...';
              }
              else{
                return oDepense.name;
              }
            }
          }
            return (
              <TouchableOpacity style={i % 2 ? styles.depenseContainerOdd:styles.depenseContainer} key={i} onPress={ ()=>{this.goDetails(oDepense.id, oDepense.name)}}>
                <View style={styles.depenseContent}>
                  <Text style={styles.price}>{oDepense.montant}€</Text>
                  <Text style={styles.title}>{generateName()}</Text>
                  <View>
                    <Text style={styles.date}>{oDepense.created_at}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
        } );
      }
    }
  },
  _renderHeader(){
    return(
      <View style={styles.header}>
        <StatusBar barStyle="light-content"
        />
        <View style={styles.limitFirst}>
            <Text style={styles.amount}>{this.state.total}€</Text>
            <Text style={styles.label}> {'Dépenses du mois'.toUpperCase() } </Text>
          </View>
          <View style={styles.limitSecond} ref="limite">
            <TouchableOpacity style={styles.limitContainer} onPress={this.goLimit}>
              <View style={styles.button}>
                <Image style={styles.buttonImg} source={ require('../img/edit.png')}
                  />
              </View>
              <Text style={styles.amountLimit}>{this.state.limit}</Text>
            </TouchableOpacity>
            <Text style={styles.labelLimit}>{'Limite du mois'.toUpperCase() } </Text>
          </View>
          <TouchableOpacity style={styles.logout} onPress={
            () => Alert.alert(
            'Déconnexion',
            'Vos données seront sauvegardés si vous vous déconnectez',
            [
              {text: 'Se Déconnecter', onPress: () => {this.logOut()}},
              {text: 'Annuler', onPress: () => null},
            ]
            )
            }>
            <Image style={styles.logoutImg} source={ require('../img/logout.png')}
              />
          </TouchableOpacity>
      </View>
    )
  },
  _renderProgress(){
    return(
      <View style={styles.progressContainer}>
        <View style={styles.progressView}>
          <ProgressViewIOS style={styles.progressBar} trackTintColor={'#124D73'} progressTintColor='white' progress={this.state.total/this.state.limit}/>
          <Text style={styles.percent}>{((Math.floor(this.state.total)/Math.floor(this.state.limit))*100) | 0}%</Text>
        </View>
      </View>
    )
  },
  _renderChart(){
    return(
      <View style={styles.chartContainer}>
        <View>
          <Chart
  					style={styles.chart}
  					data={
              [
                ['Janv', this.state.janv],
                ['Févr', this.state.fev],
                ['Mars', this.state.mars],
                ['Avril', this.state.avril],
                ['Mai', this.state.mai],
                ['Juin', this.state.juin],
                ['Juil', this.state.juil],
                ['Août', this.state.aout],
                ['Sept', this.state.sept],
                ['Oct', this.state.oct],
                ['Nov', this.state.nov],
                ['Déc', this.state.dec],
              ]
            }
  					type="line"
  					showDataPoint={true}
            dataPointFillColor={'#3769A0'}
            dataPointRadius={3}
            verticalGridStep={2}
            color={'#A1C1D6'}
            axisColor={'#EDF7FF'}
            gridColor={'#EDF7FF'}
            yAxisWidth={35}
            axisLabelColor={'#3769A0'}
            cornerRadius={8}
  				 />
        </View>
        {this.renderInfo()}
      </View>
    )
  },
  _renderMenu(){
    return(
      <View style={menu.menu}>
          <TouchableOpacity style={menu.menuLink}>
            <Image
              style={menu.icone}
              source={ require('../img/home-active.png')}
            />
          <Text style={menu.menuLabel}>Accueil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLink} onPress={this.goDepense}>
            <Image
              style={menu.icone}
              source={ require('../img/depense.png')}
            />
          <Text style={menu.menuLabel}>Dépenses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLinkAdd} onPress={() => {this.toggleDisplay()}}>
            <View style={menu.add}>
              <Image
                style={menu.iconeAdd}
                source={ require('../img/add.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLink} onPress={this.goEpargne}>
            <Image
              style={menu.iconeEpargne}
              source={ require('../img/epargne.png')}
            />
          <Text style={menu.menuLabel}>Épargne</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.menuLink} onPress={this.goPret}>
            <Image
              style={menu.iconePret}
              source={ require('../img/pret.png')}
            />
          <Text style={menu.menuLabel}>Prêt</Text>
          </TouchableOpacity>
      </View>
    )
  },
  render() {
    return (
      <View style={menu.containerBase}>
      <Load ref="Load"></Load>
      {this._renderHeader()}
      {this._renderProgress()}
      {this._renderChart()}
      <View style={styles.lastDepenseContainer}>
        <View style={styles.depenseHeader}>
          <Text style={styles.depenseHeaderTitle}>DERNIÈRES DÉPENSES</Text>
        </View>
        <View style={styles.depenseContainerCustom}>
          {this._renderDepense()}
        </View>
      </View>
      <Display enable={this.state.enable} enterDuration={500} exitDuration={250} exit="fadeOutDown" enter="fadeInUp" style={menu.container}>
        <TouchableOpacity style={menu.buttonBack} onPress={() => {this.toggleDisplay()}}>
          <Image style={menu.imgAnnuler} source={ require('../img/annuler.png')}
            />
        </TouchableOpacity>
          <TouchableOpacity style={menu.buttonContainerDepense} onPress={this.addDepense}>
            <Image
              style={menu.icone}
              source={ require('../img/depenseB.png')}
            />
          <Text style={menu.buttonLabel}>{'Dépense'.toUpperCase()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.buttonContainerPret} onPress={this.addPret}>
            <Image
              style={menu.iconePret}
              source={ require('../img/pretB.png')}
            />
          <Text style={menu.buttonLabel}>{'Prêt'.toUpperCase()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={menu.buttonContainerEpargne} onPress={this.addEpargne}>
            <Image
              style={menu.iconeEpargne}
              source={ require('../img/epargneB.png')}
            />
          <Text style={menu.buttonLabel}>{'Épargne'.toUpperCase()}</Text>
          </TouchableOpacity>
      </Display>
      {this._renderMenu()}
      </View>

    )}
  });

  export default Home;
