<template>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">{{label}}</label>
    <div id="mainAttr" class="col-sm-10">
      <span class="icon icon-attr icon-mainAttr" :class="{'mask':!isActive}" data-attr-icon="0" @click="setActiveAttr($event)" /><!-- 火 -->
      <span class="icon icon-attr icon-mainAttr" data-attr-icon="1" @click="setActiveAttr($event)" /><!-- 水 -->
      <span class="icon icon-attr icon-mainAttr" data-attr-icon="2" @click="setActiveAttr($event)" /><!-- 木 -->
      <span class="icon icon-attr icon-mainAttr" data-attr-icon="3" @click="setActiveAttr($event)" /><!-- 光 -->
      <span class="icon icon-attr icon-mainAttr" data-attr-icon="4" @click="setActiveAttr($event)" /><!-- 闇 -->
      <span v-if='hasNoneAttr' class="mask icon icon-attr icon-mainAttr" data-attr-icon="6" @click="setActiveAttr($event)" /><!-- 無 -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label:String,
    hasNoneAttr:Boolean,
  },
  data() {
    return {
      activeAttrs: [],
    };
  },
  methods: {
    isActive(object) {
      return this.activeAttrs.includes(object.target.dataset.attrIcon);
    },
    setActiveAttr(object) {
      // 当前属性
      let cliclAttr = object.target.dataset.attrIcon;
      if (this.activeAttrs.includes(cliclAttr)) {
        this.activeAttrs = this.activeAttrs.filter(val => val != cliclAttr);
      } else {
        this.activeAttrs.push(cliclAttr);
      }

      console.log(object.target.dataset.attrIcon);
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/index-test.css";
</style>
