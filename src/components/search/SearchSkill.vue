<template>
  <div class="form-group row">
    <div class="col-sm-12">
      <!-- スキル -->
      <el-collapse>
        <el-collapse-item title="スキル" name="skill">
          <!-- freeword -->
          <div class="form-group row">
            <label for="condFreeword" class="col-sm-2 col-form-label">キー</label>
            <div class="col-sm-10">
              <el-input ref="freeword" 
                placeholder="スキル キーワード" 
                v-model="freeword" />
            </div>
          </div>

          <!-- skill tag -->
          <div class="form-group row">
            <div class="col-sm-2"></div>
            <div class="col-sm-10">
              <span v-for="(tag, index) in tags" :key="index">
                {{tag.name}}
              </span>
            </div>
          </div>

          <!-- スキルターン -->
          <!--
          <div class="form-group row">
            <label for="skillturn" class="col-sm-2 col-form-label">ターン</label>
            <div class="col-sm-10">
              <input class="form-control" id="skillturn" placeholder="7">
            </div>
          </div>
          -->

        </el-collapse-item>
      </el-collapse>
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
