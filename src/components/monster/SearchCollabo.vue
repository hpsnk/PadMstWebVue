<!-- 
  | components monster search collabo
 -->
<template>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">コラボ</label>
    <el-select class="col-sm-10"
      v-model="collabo" 
      v-loading="loading"
      placeholder="コラボ" 
      collapse-tags
      @change="updateValue"
      >
      <el-option
        v-for="collabo in collabos"
        :key="collabo.collaboId"
        :label="collabo.name ? collabo.collaboId + ' : ' + collabo.name : collabo.collaboId"
        :value="collabo.collaboId"
      />
    </el-select>
  </div>
</template>

<script>
import api    from "../../common/api";
import logger from "../../common/logger";

export default {
  name: "SearchCollabo",
  props: {
    name: String,
  },
  data() {
    return {
      collabos: [],
      loading: true,
      collabo: undefined,
    };
  },
  created() {
    logger.trace("created start.", this);
    
    api.listCollabo().then((resData)=>{
            // console.log("  loadCollabo success.");
            // console.log(resData.data);
            this.collabos = resData.data;
            this.loading = false;
        }).catch((err)=>{
            console.error("  loadCollabo failed.");
            console.log(err);
        });

        logger.trace("created end.", this);
  },
  methods: {
    updateValue() {
      this.$emit("click");
    },
    reset() {
      this.collabo = undefined;
    },
    getActiveValue() {
      return this.collabo;
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
</style>
