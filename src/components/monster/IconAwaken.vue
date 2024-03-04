<!-- 
  | components Icon AwakenSkill
 -->
<template>
  <span 
    class="awakenSkill awoken-icon"
    :class="{'mask' : isSearchMode && !active}"
    :data-awoken-icon="awakenskillId"
  />
</template>

<script>
export default {
  name: "IconAwaken.vue",
  props: {
    name: String,
    awakenskillId: Number,
    isSearchMode: {
      type:    Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
</style>
