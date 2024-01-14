//----------------------------------------------------
// ApiBase.js 
//----------------------------------------------------

import Axios from "axios";

Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '';
//Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
Axios.defaults.baseURL = 'http://xxxxxxxxx/api/v1/'
Axios.defaults.withCredentials = false
// Axios.defaults.crossDomain=true
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


export const GetRequest = (request_url, request_param) => {
    console.log("[ApiBase.js]GetRequest");
    console.log("  url = " + request_url);

    return new Promise((resolve, reject) => {
        Axios.get(request_url, {
            headers: {
                'crossDomain': true,
            }
        })
            .then((response) => {
                // 请求成功
                console.log("  request " + request_url + " success!");
                console.log("  response = ");
                console.log(response.data);
                console.log(response.data.length);
                // axiosのresponseのdataを返す
                resolve(response.data);
            }
            )
            .catch(function (error) {
                // 请求失败
                console.log("  request " + request_url + " failed!");
                console.log(error);
                reject(error);
            }).finally(() => {
                console.log("  request " + request_url + " finally!");
            });
    });
}

export const PostRequest = (param2) => {
    console.log("[ApiBase.js]PostRequest");
    // console.log(param2);

}

export default {
    GetRequest,
    PostRequest,
}
