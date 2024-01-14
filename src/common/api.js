//----------------------------------------------------
// api.js 
//----------------------------------------------------

import Config from './config.js'

import axios from "axios";
import qs from 'qs';

let _axios = axios.create({
    baseURL: Config.API_SERVER_HOST + "/padmst",
    withCredentials: false,
    headers: {
        "crossDomain": true,
        "Access-Control-Allow-Origin": "",
    }
});

export default {
    //
    listAwakenSkill: function(params) {
        console.log(" api.js->listAwakenSkill");
        return _axios.get("/awakenskill/list", params)
    },
    //
    listMonster: function(params) {
        console.log(" api.js->listMonster");
        console.log(params);
        console.log(" params format");
        console.log(qs.stringify(params, { indices: true }));

        return _axios.get("/monster/list", {
            params,
            paramsSerializer: {
                serialize: function (params) {
                    return qs.stringify(params, { arrayFormat: 'repeat' });
                }
            }
        });
    },
    //
    listCollabo: function(params) {
        console.log(" api.js->listCollabo");
        return _axios.get("/collabo/list", params)
    },




    //
    listLeaderSkillCategory: function (params) {
        console.log(" api.js->listLeaderSkillCategory");
        return _axios.get("/leaderSkillCategory/list", params);
    },
    //
    searchLeaderSkill: function (params) {
        console.log(" api.js->searchLeaderSkill");
        console.log(params);
        console.log(" params format");
        console.log(qs.stringify(params, { indices: true }));
        //todo:format param
        return _axios.get("/leaderSkill/search", {
            params,
            paramsSerializer: {
                serialize: function (params) {
                    return qs.stringify(params, { arrayFormat: 'repeat' });
                }
            }
        });
    },
}

