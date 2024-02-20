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
          inactive-text="OR"
          @change="updateValue">
        </el-switch>
      </div>
      <div class="row">
        <el-tooltip 
          v-for="(type, index) in types" :key="index"
          :content="type.name" 
          placement="top">
          <span 
            class="type type-icon"
            :class="{'mask' : !type.active}"
            :data-type-icon="type.typeId"
            @click="switchActive($event, type)"
          >
          </span>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import api    from "../../common/api";
import logger from "../../common/logger";

export default {
  props: {
    name: String,
  },
  data() {
    return {
      types: [],
      typeCondAnd: false,
      loading: true,
    };
  },
  created() {
    logger.trace("created start.", this);

    api.listType().then((resData)=>{
          // console.log("  loadType success.");
          // console.log(resData.data);
          this.types = resData.data;
      }).catch((err)=>{
          console.error("  loadType failed.");
          console.log(err);
      });

    logger.trace("created end.", this);
  },
  methods: {
    updateValue() {
      this.$emit("click");
    },
    switchActive(event, type) {
      if (type.active) {
        type.active = false;
      } else {
        type.active = true;
      }
      
      //强制渲染
      this.$forceUpdate();

      this.$emit("click");
    },
    reset() {
      this.types.forEach((type) => {
        type.active = false;
      });
      this.typeCondAnd = false;
      
      //强制渲染
      this.$forceUpdate();
    },
    getActiveValue() {
      return {
        type: this.types.filter(elem => {
          return elem.active;
        }).map(elem => {
          return elem.typeId;
        }),
        typeCondAnd: this.typeCondAnd,
      }
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
</style>
