<template>
  <div class="form-group row">
    <div class="col-sm-12">
      <!-- リーダースキル -->
          <!-- freeword -->
          <div class="form-group row">
            <label for="condFreeword" class="col-sm-2 col-form-label">キー</label>
            <div class="col-sm-10">
              <el-input ref="freeword" 
                placeholder="リーダースキル キーワード" 
                v-model="freeword"
                @change="setFreeword"/>
            </div>
          </div>

          <!-- skill tag -->
          <!-- 
          <div class="form-group row">
            <div class="col-sm-2"></div>
            <div class="col-sm-10">
              <span class="skill-tag" v-for="(tag, index) in tags" :key="index" @click="useSkillTag($event, tag)">
                #{{tag.name}}
              </span>
            </div>
          </div> 
          -->       
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchLeaderSkill.vue",
  props: {
    name: String,
  },
  data() {
    return {
      freeword: "",
      tags: [],
    };
  },
  // created() {
  //   this.logger.trace("created start.", this);
    
  //   this.PadMstApi.listSkillTag().then((resData) => {
  //     this.tags = resData.data;
  //   //     this.loading.attr = false;
  //   }).catch((err) => {
  //     console.log("error");
  //     console.log(err);
  //   });

  //   this.logger.trace("created end.", this);
  // },
  methods: {
    reset() {
      this.freeword = "";
    },
    setFreeword() {
      this.logger.trace("setFreeword.", this);
      this.$emit("click");
    },
    // useSkillTag(event, tag) {
    //   this.logger.trace("useSkillTag.", this);
    //   this.freeword = tag.keyword;
    //   this.$emit("click");
    // },
    //xxxxxxxxxxxxx
    getActiveValue() {
      this.logger.trace("getActiveValue.", this);

      return {
        freeword  : this.freeword,
      };
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
</style>
