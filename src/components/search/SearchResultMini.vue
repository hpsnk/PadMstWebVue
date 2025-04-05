<!-- 
  | components search result mini
  | 
  | [Attributes]
  |   参数                   类型               说明
  | 
  | [Event]
  |   事件名称               回调参数
  |   click-monster      int: monsterId
 -->
<template>
  <div class="monster monster-detail monster-detail-mini">
    <comp-icon-monster 
      :monster="monster" 
      v-for="(monster, index) in displayData.monsters" 
      :key="'div.monster.mini.' + index" 
      @click="handleClickMonster"
    />
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
    handleClickMonster(monsterId) {
      // 发动事件
      this.$emit('click-monster', monsterId);
    }
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
@import "../../assets/css/monster-detail.css";
</style>
