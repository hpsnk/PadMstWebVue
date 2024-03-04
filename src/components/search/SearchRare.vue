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
        show-stops
        @change="switchActive"
        >
      </el-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchRare.vue",
  props: {
    name: String,
  },
  data() {
    return {
      rare: 0,
    };
  },
  methods: {
    switchActive(event, type) {

      if (this.rare == 0) {
        this.rare = undefined;
      }

      this.$emit("click");
    },
    reset() {
      this.rare = 0;
    },
    getActiveValue() {
      return this.rare;
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
</style>
