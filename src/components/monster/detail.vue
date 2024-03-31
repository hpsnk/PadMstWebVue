<template>
  <div class="monster monster-detail">
    <comp-icon-monster name="MonsterDetail.IconMonster"
      :monster="monster" />

    <div class="monster-basic-info">
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
    </div>

    <div class="monster-icon-info">
      <div class="monster-icon-type">
        <span v-if="monster.typeId!=-1"
          class="type type-icon"
          :data-type-icon="monster.typeId"
        />
        <span v-if="monster.subTypeId!=-1"
          class="type type-icon"
          :data-type-icon="monster.subTypeId"
        />
        <span v-if="monster.extraTypeId!=-1"
          class="type type-icon"
          :data-type-icon="monster.extraTypeId"
        />
      </div>

      <!--覚醒-->
      <div class="askill-info">
        <comp-icon-awaken v-for="(awakenskillId, index) in monster.awakenskillIds"
          name="MonsterDetail.awakenskill"
          :awakenskillId="awakenskillId"
          :isSearchMode="false"
          :key="monster.monsterId + '.awakenskill.' + index"
          />
      </div>

      <!--超覚醒-->
      <div class="super-askill-info">
        <comp-icon-awaken v-for="(superawakenskillId, index) in monster.superawakenskillIds"
          name="MonsterDetail.superawakenskillId"
          :awakenskillId="superawakenskillId"
          :isSearchMode="false"
          :key="monster.monsterId + '.superawakenskill.' + index"
          />
      </div>
    </div>


    <!--スキル-->
    <div class="skill" v-if="false">
      <div class="name" @click="findBySkill(monster)">{{monster.skill != undefined ?  monster.skill.name : ''}}</div>
      <div class="turn" v-if="monster.skill != undefined && monster.skill.turn != undefined">
        {{monster.skill != undefined ?  monster.skill.turn : ''}}
      </div>
      <div class="desc">
        {{monster.skill != undefined ?  monster.skill.gameDesc : ''}}
      </div>
    </div>
    <!--リーダースキル-->
    <div class="leaderskill" v-if="false">
      <div class="name">{{monster.leaderskill != undefined ?  monster.leaderskill.name : ''}}</div>
      <div class="desc">{{monster.leaderskill != undefined ?  monster.leaderskill.gameDesc : ''}}</div>
    </div>
  </div>
</template>

<script>
// import CompIconAwaken from "./IconAwaken.vue";

export default {
  name: "detail.vue",
  // components: {
  //   CompIconAwaken,
  // },
  props: {
    monster: Object,
  },
  data() {
    return {
      msg: "Welcome to Your MonsterDetail",
    };
  },
  methods: {
    findBySkill(objMonster) {
      console.log('[findBySkill]');
      console.log(objMonster.skill);
    }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/monster-detail.css";
</style>
