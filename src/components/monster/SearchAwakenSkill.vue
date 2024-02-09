<!-- 
  | components monster search AwakenSkill
 -->
<template>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">覚醒</label>
    <div class="col-sm-10">
      <div class="row">
        <el-switch
          v-model="condAnd"
          active-text="AND"
          inactive-text="OR">
        </el-switch>
      </div>
      <div class="row">
        <!-- <el-tooltip 
          v-for="(awakenSkill, index) in awakenSkills" :key="index"
          :content="type.name" 
          placement="top"> -->
          <span 
            v-for="(awakenSkill, index) in awakenSkills" :key="index"
            class="awakenSkill awoken-icon"
            :class="{'mask' : !awakenSkill.active}"
            :data-awoken-icon="awakenSkill.awakenskillId"
            @click="switchActive($event, awakenSkill)"
          />
        <!-- </el-tooltip> -->
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../common/api";

export default {
  props: {
    name: String,
  },
  data() {
    return {
      awakenSkills: [],
      condAnd: false,
      loading: true,
    };
  },
  created() {
    console.log("created.");

    api.listAwakenSkill().then((resData)=>{
          console.log("  load AwakenSkill success.");
          // console.log(resData.data);
          this.awakenSkills = resData.data.data;

          console.log(this.awakenSkills);

          console.log(this.awakenSkills.length);
      }).catch((err)=>{
          console.error("  load AwakenSkill failed.");
          console.log(err);
      });

  },
  mounted() {
    console.log("mounted.");
  },
  methods: {
    switchActive(event, awakenSkill) {
      if (awakenSkill.active) {
        awakenSkill.active = false;
      } else {
        awakenSkill.active = true;
      }
      
      //强制渲染
      this.$forceUpdate();

      this.$emit("click");
    },
    reset() {
      this.awakenSkills.forEach((awakenSkill) => {
        awakenSkill.active = false;
      });
      this.condAnd = false;
      
      //强制渲染
      this.$forceUpdate();
    },
    getActiveValue() {
      return {
        type: this.awakenSkills.filter(elem => {
          return elem.active;
        }).map(elem => {
          return elem.awakenskillId;
        }),
        awakenSkillCondAnd: this.condAnd,
      }
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
</style>
