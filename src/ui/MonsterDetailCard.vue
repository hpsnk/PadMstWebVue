<!-- 
  | MonsterDetailCard
  | 
  | [Attributes]
  |   参数                   类型               说明
  | 
  | [Event]
  |   事件名称               回调参数
  |   click-monster        int: monsterId      todo
 -->
<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title"></h3>
    </div>
    <div class="card-body padmst-card-body">
      <div class="monster monster-detail monster-detail-normal">
        <CompMonsterDetail 
          :monster="monster"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import CompMonsterDetail from "../components/monster/detail.vue";
export default {
  name: "MonsterDetailCard.vue",
  props: {
    name: String,
    monster: Object,
  },
  // components: {
  //   CompMonsterDetail,
  // },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
@import "../assets/css/monster-search.css";
@import "../assets/css/monster-detail.css";
</style>
