<!-- 
  | components monster search rare
 -->
<template>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">レア</label>
    <div class="col-sm-10">
      <el-slider
        v-model="rare"
        :min="0"
        :max="10"
        :step="1"
        show-stops>
      </el-slider>
    </div>
  </div>
</template>

<script>
// import api from "../../common/api";

export default {
  props: {
    name: String,
  },
  data() {
    return {
      rare: -1,
    };
  },
  created() {
    // console.log("created.");
    // api.listType().then((resData)=>{
    //       console.log("  loadType success.");
    //       // console.log(resData.data);
    //       this.types = resData.data;
    //   }).catch((err)=>{
    //       console.error("  loadType failed.");
    //       console.log(err);
    //   });
  },
  mounted() {
    // console.log("mounted.");
  },
  methods: {
    // switchActive(event, type) {
    //   if (type.active) {
    //     type.active = false;
    //   } else {
    //     type.active = true;
    //   }
      
    //   //强制渲染
    //   this.$forceUpdate();

    //   this.$emit("click");
    // },
    // reset() {
    //   this.types.forEach((type) => {
    //     type.active = false;
    //   });
    //   this.typeCondAnd = false;
      
    //   //强制渲染
    //   this.$forceUpdate();
    // },
    // getActiveValue() {
    //   // let activeTypes = this.types.filter(elem => {
    //   //   return elem.active;
    //   // }).map(elem => {
    //   //   return elem.typeId;
    //   // });

    //   return {
    //     type: this.types.filter(elem => {
    //       return elem.active;
    //     }).map(elem => {
    //       return elem.typeId;
    //     }),
    //     typeCondAnd: this.typeCondAnd,
    //   }
    // },
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
</style>
