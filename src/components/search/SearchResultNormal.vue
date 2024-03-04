<!-- 
  | components search result normal
 -->
<template>
  <div class="monster monster-detail monster-detail-normal">
    <CompMonsterDetail :monster="monster" 
      v-for="(monster, index) in displayData.monsters" :key="'div.monster.normal.' + index"
    />
  </div>
</template>

<script>
import CompMonsterDetail from "../monster/detail.vue";
export default {
  name: "SearchResultNormal.vue",
  props: {
    name: String,
    displayData: Object,
  },
  components: {
    CompMonsterDetail,
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
</style>
