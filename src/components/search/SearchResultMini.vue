<!-- 
  | components search result mini
 -->
<template>
</template>

<script>
export default {
  name: "SearchResultMini.vue",
  props: {
    name: String,
    monsters: Array,
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
