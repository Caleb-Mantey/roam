import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import styles from './style';
import Ridedetails from '../../../../components/Ridecar/index';
import Footerdetails from '../../../../components/Ridefooter/index';
import apicalls from '../../../../provider/apicalls';

export default class New extends Component {
  constructor(props) {
    super(props);
    state = {
      results: null
    }
  }

  get_new(){
    
    var data = {
      actions: 'clientgetrequestpending',
    }   

    apicalls.postdata(data).then(data => {
      console.log(data);     
      if(data.msg == "success"){
        this.setState({results: data.data});
      }else if(data.msg == "error"){
        console.log("Error", data.msg)
      }     
    })      

  }

  componentDidMount(){
    this.get_new();
  }

  // my_detailspage(){
  //   this.props.navigation.navigate('PackageType');
  // }


  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', height: 1400}}>
        <ScrollView style={{ height: 1400}}>
         
          <Ridedetails
            carimage={require('../../../../images/deliverymotor.png')}
            origin="North Kaneshie, Accra"
            destination="Kantamanto, Accra"
            packagetype="Documents"
            packagequantity="4"
            price="₵10.00"
            date="12/08/2020"
            time="8:58 AM"
            navigation={this.props.navigation}
          />
                  
          <Ridedetails
            carimage={require('../../../../images/deliverymotor.png')}
            origin="North Kaneshie, Accra"
            destination="Kantamanto, Accra"
            packagetype="Documents"
            packagequantity="4"
            price="₵10.00"
            date="12/08/2020"
            time="8:58 AM"
            navigation={this.props.navigation}
          />

        </ScrollView>
      </View>
    );
  }
}
