<template>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">{{label}}</label>
    <div id="mainAttr" class="col-sm-10">
      <span class="mask icon icon-attr icon-mainAttr" data-attr-icon="0" @click="setActiveAttr($event)" /><!-- 火 -->
      <span class="mask icon icon-attr icon-mainAttr" data-attr-icon="1" @click="setActiveAttr($event)" /><!-- 水 -->
      <span class="mask icon icon-attr icon-mainAttr" data-attr-icon="2" @click="setActiveAttr($event)" /><!-- 木 -->
      <span class="mask icon icon-attr icon-mainAttr" data-attr-icon="3" @click="setActiveAttr($event)" /><!-- 光 -->
      <span class="mask icon icon-attr icon-mainAttr" data-attr-icon="4" @click="setActiveAttr($event)" /><!-- 闇 -->
      <span v-if='hasExtAttr=="true"' class="mask icon icon-attr icon-mainAttr" data-attr-icon="6" @click="setActiveAttr($event)" /><!-- 無 -->
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'label',
    'hasExtAttr'
  ],
  data() {
    return {
      activeAttrs: [],
    };
  },
  methods: {
    setActiveAttr(object) {
      console.log("xxxxx 火");
      console.log(object.target.dataset.attrIcon);
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/index-test.css";
</style>
