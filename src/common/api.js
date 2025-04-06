//----------------------------------------------------
// api.js 
//----------------------------------------------------
import Vue from 'vue';
var vue = new Vue();

import Config from './config.js'
import Const  from './const.js'

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
    name: "api.js",
    //
    listAwakenSkill: function(params) {
        vue.logger.trace("listAwakenSkill", this);
        // console.log(" api.js->listAwakenSkill");
        return _axios.get("/awakenskill/list", params)
    },
    //
    listMonster: function(params) {
        vue.logger.trace("listMonster", this);

        vue.logger.debug(qs.stringify(params, { indices: true }), this);

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
        vue.logger.trace("listCollabo", this);
        // console.log(" api.js->listCollabo");
        return _axios.get("/collabo/list", params)
    },
    // 属性
    listAttr: function(params) {
        vue.logger.trace("listAttr", this);
        // console.log(" api.js->listAttr");
        return _axios.get("/attr/list", params)
    },
    // タイプ
    listType: function(params) {
        vue.logger.trace("listType", this);
        // console.log(" api.js->listType");
        return _axios.get("/type/list", params)
    },
    // skill tag
    listSkillTag: function(params) {
        vue.logger.trace("listSkillTag", this);
        return _axios.get("/skill/listTag", params)
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

