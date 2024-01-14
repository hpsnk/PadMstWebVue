<template>
  <div class="monster-detail">
    <div class="monster-icon">
      <div class="icon">
        <div class="id">{{ monster.monsterId }}</div>
      </div>
    </div>
    <div class="monster-name">{{ monster.name }}</div>
    <div class="monster-info">
      <div class="hp">
        <div class="tag">HP:</div>
        <div class="value">{{ monster.maxHP }}</div>
      </div>
      <div class="attack">
        <div class="tag">攻撃:</div>
        <div class="value">{{ monster.maxATK }}</div>
      </div>
      <div class="recovery">
        <div class="tag">回復:</div>
        <div class="value">{{ monster.maxRCV }}</div>
      </div>
    </div>
    <div class="askill-info">
      <span
        class="askill template"
        v-for="(awakenskill, index) in monster.awakenskillIds"
        :key="index"
      >
        <img class="icon" :alt="awakenskill.awakenskillId" />
      </span>
    </div>
    <div class="super-askill-info">
      <span
        class="askill template"
        v-for="(superawakenskill, index) in monster.superawakenskillIds"
        :key="index"
      >
        <img class="icon" />
      </span>
    </div>
    <div class="skill">
      <div class="name">{{monster.skill != undefined ?  monster.skill.name : ''}}</div>
      <div class="turn">{{monster.skill != undefined ?  monster.skill.initTurn - monster.skill.maxLv : ''}}</div>
      <div class="desc">
        {{monster.skill != undefined ?  monster.skill.gameDesc : ''}}
      </div>
    </div>
    <div class="leaderskill">
      <div class="name">{{monster.leaderskill != undefined ?  monster.leaderskill.name : ''}}</div>
      <div class="desc">{{monster.leaderskill != undefined ?  monster.leaderskill.gameDesc : ''}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "component.monster.detail",
  props: [
    'monster',
  ],
  data() {
    return {
      msg: "Welcome to Your MonsterDetail",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/index-test.css";
</style>
