import axios from 'axios'
import qs from 'qs';
import mergeJSON from 'mergejson';


const url = "https://api.roamgrp.com/api.php";
// const url = "http://192.168.1.9/roam_api/api.php";

const request_head = {
  apikey: '5447306575796c4635384e5a4c366d4272766873373245336e69507a516f3153584d7755566a78575966637149524f4b4843413961344a626b7444647067',
  actors_id: '23'
}

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const response = [];


class API_calls {


  async signup(data) {  

    var requestBody = mergeJSON(request_head, data);
    console.log("Form Data Dis ",qs.stringify(requestBody));

    await axios.post(url, qs.stringify(requestBody), config)
      .then((result) => {
        console.log("Request Successful ",result);
        this.response = result.data;
      })
      .catch((err) => {
        console.log("Request Error ",err);
        return err;
      })
      return this.response;
  }



  async postdata(data) {  

    // var object = {};
    // data.forEach(function(value, key){
    //     object[key] = value;
    // });

    var requestBody = mergeJSON(request_head, data);
    console.log("Form Data Dis ",qs.stringify(requestBody));

    await axios.post(url, qs.stringify(requestBody), config)
      .then((result) => {
        console.log("Request Successful ",result);
        this.response = result.data;
      })
      .catch((err) => {
        console.log("Request Error ",err);
        return err;
      })
      return this.response;
  }


}


const apicalls = new API_calls();

export default apicalls;