<!-- 
  | components monster search type
 -->
<template>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">タイプ</label>
    <div class="col-sm-10">
      <div class="row">
        <el-switch
          v-model="typeCondAnd"
          active-text="AND"
          inactive-text="OR">
        </el-switch>
      </div>
      <div class="row">
        <span v-for="(type, index) in types" :key="index" 
        @click="switchActive($event, type)"
          class="type"          
          :class="{'mask' : !type.active}"
        >
          {{ type.typeId }}
        </span>
      </div>
    </div>


    <!-- 
    <label class="col-sm-2 col-form-label">{{ label }}</label>
    <div id="mainAttr" class="col-sm-10" v-loading="loading.attr">
      <span v-for="(attr, index) in attrs" :key="index">
        <span @click="switchActive($event, attr)"
          class="icon icon-attr"
          :class="{'mask' : !attr.active}"
          :data-attr-icon="attr.id"
          v-if="!attr.special || (hasNoneAttr && attr.special)"
        />
      </span>
    </div>
    -->
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
      types: [],
      loading: true,
      typeCondAnd: false,
    };
  },
  created() {
    console.log("created.");
    api.listType().then((resData)=>{
          console.log("  loadType success.");
          // console.log(resData.data);
          this.types = resData.data;
      }).catch((err)=>{
          console.error("  loadType failed.");
          console.log(err);
      });
  },
  mounted() {
    console.log("mounted.");
  },
  methods: {
    switchActive(event, type) {
      // console.log("switchActive");
      if (type.active) {
        type.active = false;
      } else {
        type.active = true;
      }
      
      //强制渲染
      this.$forceUpdate();

      // console.log("---->" + attr.active);
      // console.log(this.attrs);

      this.$emit("click");
    },
    // reset() {
    //   this.attrs.forEach((attr) => {
    //     attr.active = false;
    //   });
    //   // this.attrCondAnd = false;
      
    //   //强制渲染
    //   this.$forceUpdate();
    // },
    getActiveValue() {
      return this.types.filter(elem => {
        return elem.active;
      }).map(elem => {
        return elem.typeId;
      });
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
</style>
