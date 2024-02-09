<template>
    <div>
        <div v-for="(awakenskill, index) in awakenskills" :key="index">
            <span>{{awakenskill.awakenskillId}}</span>
            <span>{{awakenskill.name}}</span>
            <span>{{awakenskill.gameDesc}}</span>
            <hr>
        </div>
    </div>
</template>

<script>
import api from '../common/api'

export default {
    name: "AwakenSkillPage",
  data() {
    return {
        awakenskills: [],
    }
  },
    mounted() {
        console.log("AwakenSkillPage.mounted.start");
        
        api.listAwakenSkill().then((resData)=>{
            console.log("success");
            console.log(resData.data);
            console.log(resData.data.data);
            this.awakenskills = resData.data.data;
        }).catch((err)=>{
            console.log("error");
            console.log(err);
        });

        console.log("AwakenSkillPage.mounted.end");
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
