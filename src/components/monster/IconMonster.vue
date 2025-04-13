<!-- 
  | components Icon Monster
  | 
  | [Attributes]
  |   参数                   类型               说明
  |   empty                  boolean
  |   selectable             boolean           是否能选中
  | 
  | [Event]
  |   事件名称               回调参数
  |   click                 int: monsterId
  |   select-change         string: name
 -->
<template>
  <div 
    class="monster-icon"
    :class="{'focus': selected}"
    @click="handleSelectMonster"
  >
    <div>{{this.isActive}}</div>
    <div v-if="isEmpty">empty</div>
    <div v-if="selected">selected</div>
    <div 
      v-if="!isEmpty && monster != undefined"
      class="icon monster" 
      :data-cardid="monster.monsterId" 
      :data-cards-pic-idx="Math.ceil(monster.monsterId/100)"
      :data-cards-pic-x="(monster.monsterId-1)%10"
      :data-cards-pic-y="Math.floor((monster.monsterId-1)%100/10)"
      @click="handleClickMonster(monster.monsterId)"
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
    id: {
      type:    String,
      default: "",
    },
    name: String,
    monster: Object,
    empty: {
      type:    Boolean,
      default: false,
    },
    selectable: {
      type:    Boolean,
      default: false,
    },
    selected: {
      type:    Boolean,
      default: false,
    }
  },
  computed: {
    isActive() {
      // this.logger.trace(`${this.id} isActive()=${this.selected}`, this);
      return this.selected;
    }
  },
  data() {
    return {
      isEmpty : this.empty,
    };
  },
  methods: {
    //
    handleClickMonster(monsterId) {
      // this.logger.trace(`Handle Click Monster, id=${monsterId}`, this);
      // 发动事件
      this.$emit('click', monsterId);
    },
    // 
    handleSelectMonster() {
      // this.logger.trace(`Handle Select Monster, id=${this.id}`, this);
      if(this.selectable) {
        // 发动事件
        // 已选中时，返回 undefined
        // 未选中时，返回 自己的id
        this.$emit('select-change', this.isActive ? undefined : this.id);
      }
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/monster-detail.css";
@import "../../assets/css/team.css";
</style>
