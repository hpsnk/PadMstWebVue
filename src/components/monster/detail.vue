<template>
  <div class="monster monster-detail">
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
        <div class="id">{{ monster.monsterId }}</div>
      </div>
    </div>
    <div class="monster-name" v-show="false">
      {{ monster.name }}
    </div>
    <div class="monster-info" v-show="false">
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
    <div class="askill-info" v-show="false">
      <span
        class="askill template"
        v-for="(awakenskill, index) in monster.awakenskillIds"
        :key="index"
      >
        <img class="icon" :alt="awakenskill.awakenskillId" />
      </span>
    </div>
    <div class="super-askill-info" v-show="false">
      <span
        class="askill template"
        v-for="(superawakenskill, index) in monster.superawakenskillIds"
        :key="index"
      >
        <img class="icon" />
      </span>
    </div>
    <div class="skill">
      <div class="name" @click="findBySkill">{{monster.skill != undefined ?  monster.skill.name : ''}}</div>
      <div class="turn">{{monster.skill != undefined ?  monster.skill.initTurn - monster.skill.maxLv : ''}}</div>
      <div class="desc">
        {{monster.skill != undefined ?  monster.skill.gameDesc : ''}}
      </div>
    </div>
    <div class="leaderskill" v-show="false">
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
  methods: {
    findBySkill(skillId) {
      console.log('Find by Id:' + skillId);
    }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/monster-detail.css";
</style>
