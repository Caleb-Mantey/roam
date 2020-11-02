import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import styles from './style';
import Ridedetails from '../../../../components/Ridecar/index';
import Footerdetails from '../../../../components/Ridefooter/index';
import apicalls from '../../../../provider/apicalls';

export default class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
         
         {this.state.results ? this.state.results.map(data => { 
           <Ridedetails
            carimage={require('../../../../images/deliverymotor.png')}
            origin={data.REQ_LOCATION_FROM}
            destination={data.REQ_LOCATION}
            packagetype={data.REQ_ITEMS}
            packagequantity="1"
            price={data.REQ_TOTAL_AMOUNT}
            date={data.REQ_DATE}
            time={data.REQ_PICKUP_TIME}
            navigation={this.props.navigation}
            data = {data}
          />
         })  : <View style={{flexDirection: 'column', justifyContent: 'center',alignSelf: 'center', height: 300}}>
                <Text style={{fontSize: 26}}>No Request Found</Text>
            </View>}

        </ScrollView>
      </View>
    );
  }
}
