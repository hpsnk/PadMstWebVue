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
    <div class="monster-basic-info">
      <div class="monster-name">{{ monster.name }}</div>
      <div class="monster-info">
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
    <div class="skill">
      <div class="name" @click="findBySkill(monster)">{{monster.skill != undefined ?  monster.skill.name : ''}}</div>
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
import CompIconAwaken from "./IconAwaken.vue";

export default {
  name: "component.monster.detail",
  components: {
    CompIconAwaken,
  },
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
