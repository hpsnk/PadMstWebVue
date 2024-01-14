//----------------------------------------------------
// ApiFunction.js 
//----------------------------------------------------

// import Config from './config.js'

import ApiRequestPath from './ApiRequestPath.js'
import ApiBase from './ApiBase.js'

export const listSKill = () => {
    return ApiBase.GetRequest(ApiRequestPath.SKILL_LIST);
}

export const listLeaderSkillCategory = () => {
    return ApiBase.GetRequest(ApiRequestPath.List_Leader_Skill_Category);
}

// export const skillList2 = () => {
//     console.log("api.js skillList2");

//     console.log("http://localhost:3000/padmst/cros/type/list");
//     console.log(Config.API_SERVER_HOST + "/padmst/cros/type/list");

//     ApiBase.GetRequest("123456");

    //Axios.get(Config.API_SERVER_HOST + "/padmst/cros/type/list")
    // Axios.get("http://localhost:3000/padmst/cros/type/list")
    //     .then((response) => {
    //         console.log("success");
    //         console.log(response);
    //     }
    //     )
    //     .catch(function (error) {
    //         // 请求失败处理
    //         console.log("failed");
    //         console.log(error);
    //     });
// }

// function skillList() {
//     console.log("api.js skillList");
//     // console.log("do skill list : " + this.Config.API_SERVER_HOST);

//     // ApiBase.GetRequest("1_2-3_3-2_1");
//     //     console.log("11111");
//     //     Axios.get("http://localhost:3000/padmst/cros/type/list")
//     //       .then((response) => (
//     //         console.log(response)
//     //         ))
//     //       .catch(function (error) {
//     //         // 请求失败处理
//     //         console.log(error);
//     //       });
// }

export default {
    listSKill,
    listLeaderSkillCategory,
}