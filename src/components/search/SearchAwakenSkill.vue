<!-- 
  | components monster search AwakenSkill
 -->
<template>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">覚醒</label>
    <div class="col-sm-10">
      <div class="row">
        <!-- 条件 and/or -->
        <el-switch
          v-model="condAnd"
          active-text="AND"
          inactive-text="OR"
          @change="updateValue()">
        </el-switch>
        <!-- 条件 多い順 -->
        <el-checkbox 
          v-model="awakenSkillSortByCount"
          @change="updateValue()">多い順</el-checkbox>
      </div>
      <div class="row row-awakenSkill">
        <el-tooltip
          v-for="(awakenSkill, index) in awakenSkills"
          :key="index"
          :content="showTooltip ? awakenSkill.name : ''"
          :disabled="!showTooltip"
          placement="top"
        >
          <span
            class="awakenSkill awoken-icon"
            :class="{'icon-mask': !awakenSkill.active}"
            :data-awoken-icon="awakenSkill.awakenskillId"
            @click="switchActive($event, awakenSkill)"
          ></span>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchAwakenSkill.vue",
  props: {
    name: String,
    showTooltip: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      awakenSkills: [],
      condAnd: false,
      awakenSkillSortByCount: false,
      loading: true,
    };
  },
  created() {
    this.logger.trace("created start.", this);

    this.PadMstApi.listAwakenSkill().then((resData)=>{
          // console.log("  load AwakenSkill success.");
          // console.log(resData.data);
          this.awakenSkills = resData.data.data.sort(function (a, b) {
            return a.index - b.index;
        });

          // console.log(this.awakenSkills);

          // console.log(this.awakenSkills.length);
      }).catch((err)=>{
          console.error("  load AwakenSkill failed.");
          console.log(err);
      });

    this.logger.trace("created end.", this);
  },
  // mounted() {
  //   console.log("mounted.");
  // },
  methods: {
    updateValue() {
      this.logger.trace("updateValue.", this);
      // console.log("updateValue.");
      this.$emit("click");
    },
    switchActive(event, awakenSkill) {
      if (awakenSkill.active) {
        awakenSkill.active = false;
      } else {
        awakenSkill.active = true;
      }
      
      //强制渲染
      this.$forceUpdate();

      // console.log(this.getActiveValue());

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
        awakenSkill: this.awakenSkills.filter(elem => {
          return elem.active;
        }).map(elem => {
          return elem.awakenskillId;
        }),
        condAnd: this.condAnd,
        awakenSkillSortByCount : this.awakenSkillSortByCount,
      }
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
</style>
