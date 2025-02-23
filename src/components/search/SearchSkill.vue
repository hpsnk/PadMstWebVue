
<!-- スキル -->

<template>
  <div class="form-group row">
    <div class="col-sm-12">
          <!-- freeword -->
          <div class="form-group row">
            <label for="condFreeword" class="col-sm-2 col-form-label">キー</label>
            <div class="col-sm-10">
              <el-input ref="freeword" 
                placeholder="スキル キーワード" 
                v-model="freeword"
                @change="setFreeword"/>
            </div>
          </div>

          <!-- skill tag -->
          <div class="form-group row">
            <div class="col-sm-2"></div>
            <div class="col-sm-10">
              <span class="skill-tag" v-for="(tag, index) in tags" :key="index" @click="useSkillTag($event, tag)">
                #{{tag.name}}
              </span>
            </div>
          </div>

          <!-- スキルターン -->
          <div class="form-group row">
            <label for="skillturn" class="col-sm-2 col-form-label">ターン</label>
            <div class="col-sm-10">
              <el-input ref="skillturn" 
                placeholder="スキル ターン" 
                v-model="skillturn" 
                @change="setSkillTurn"/>
            </div>
          </div>
         

    </div>
  </div>
</template>

<script>
export default {
  name: "SearchSkill.vue",
  props: {
    name: String,
  },
  data() {
    return {
      freeword: undefined,
      skillturn: undefined,
      tags: [],
    };
  },
  created() {
    this.logger.trace("created start.", this);
    
    this.PadMstApi.listSkillTag().then((resData) => {
      this.tags = resData.data;
    //     this.loading.attr = false;
    }).catch((err) => {
      console.log("error");
      console.log(err);
    });

    this.logger.trace("created end.", this);
  },
  methods: {
    reset() {
      this.freeword = undefined;
      this.skillturn = undefined;
    },
    setFreeword() {
      this.logger.trace("setFreeword.", this);
      this.$emit("click");
    },
    setSkillTurn() {
      this.logger.trace("setSkillTurn.", this);
      this.$emit("click");
    },
    useSkillTag(event, tag) {
      this.logger.trace("useSkillTag.", this);
      this.freeword = tag.keyword;
      this.$emit("click");
    },
    //xxxxxxxxxxxxx
    getActiveValue() {
      this.logger.trace("getActiveValue.", this);

      return {
        freeword  : this.freeword,
        skillturn : this.skillturn,
      };
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
</style>
