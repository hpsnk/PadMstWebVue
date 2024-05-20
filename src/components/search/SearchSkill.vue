
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
                v-model="skillturn" />
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
      freeword: "",
      skillturn: "",
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
      this.freeword = "";
      this.skillturn = "";
    },
    setFreeword() {
      this.logger.trace("setFreeword.", this);
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
    // switchActive(event, attr) {
    //   this.logger.trace("switchActive.", this);

    //   // console.log("switchActive");
    //   if (attr.active) {
    //     attr.active = false;
    //   } else {
    //     attr.active = true;
    //   }
      
    //   //强制渲染
    //   this.$forceUpdate();

    //   // console.log("---->" + attr.active);
    //   // console.log(this.attrs);

    //   this.$emit("click");
    // },
    // reset() {
    //   this.logger.trace("reset.", this);

    //   this.attrs.forEach((attr) => {
    //     attr.active = false;
    //   });
    //   // this.attrCondAnd = false;
      
    //   //强制渲染
    //   this.$forceUpdate();
    // },
    // getActiveValue() {
    //   this.logger.trace("getActiveValue.", this);

    //   return this.attrs.filter(elem => {
    //     return elem.active;
    //   }).map(elem => {
    //     return elem.id;
    //   });
    // },
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
</style>
