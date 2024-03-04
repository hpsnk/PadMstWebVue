<!-- 
  | components search result mini
 -->
<template>
  <div class="monster monster-detail monster-detail-mini">
    <comp-icon-monster :monster="monster" 
      v-for="(monster, index) in displayData.monsters" :key="'div.monster.mini.' + index" />
  </div>
</template>

<script>
export default {
  name: "SearchResultMini.vue",
  props: {
    name: String,
    // monsters: Array,
    displayData: Object,
  },
  data() {
    return {
      types: [],
      typeCondAnd: false,
      loading: true,
    };
  },
  methods: {
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
@import "../../assets/css/monster-detail.css";
</style>
