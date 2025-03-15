<!-- 
  | components Icon Monster
 -->
<template>
  <div class="monster-icon">
    <div class="icon monster" 
      :data-cardid="monster.monsterId" 
      :data-cards-pic-idx="Math.ceil(monster.monsterId/100)"
      :data-cards-pic-x="(monster.monsterId-1)%10"
      :data-cards-pic-y="Math.floor((monster.monsterId-1)%100/10)"
    >
      <div class="attrs">
        <div class="attr" :data-attr="monster.attr" />
        <div class="attr" :data-attr="monster.subAttr" />
        <div class="attr" :data-attr="monster.thirdAttr" />
      </div>
      <div class="monsterId">{{ monster.monsterId }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconMonster.vue",
  props: {
    name: String,
    monster: Object,
  },
  // data() {
  //   return {
  //     active: false,
  //   };
  // },
};
</script>

<style scoped>
@import "../../assets/css/monster-detail.css";
</style>
