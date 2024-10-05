<template>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label">{{ label }}</label>
    <div id="mainAttr" class="col-sm-10" v-loading="loading.attr">
      <span v-for="(attr, index) in attrs" :key="index">
        <span @click="switchActive($event, attr)"
          class="icon icon-attr attr"
          :class="{'icon-mask' : !attr.active}"
          :data-attr-icon="attr.id"
          v-if="!attr.special || (hasNoneAttr && attr.special)"
        >
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchAttr.vue",
  props: {
    name: String,
    label: String,
    hasNoneAttr: Boolean,
  },
  data() {
    return {
      attrs: [],
      loading: {
        attr: true,
      }
    };
  },
  created() {
    this.logger.trace("created start.", this);
    
    this.PadMstApi.listAttr().then((resData) => {
        this.attrs = resData.data;
        this.loading.attr = false;
      }).catch((err) => {
        console.log("error");
        console.log(err);
      });

    this.logger.trace("created end.", this);
  },
  methods: {
    switchActive(event, attr) {
      this.logger.trace("switchActive.", this);

      // console.log("switchActive");
      if (attr.active) {
        attr.active = false;
      } else {
        attr.active = true;
      }
      
      //强制渲染
      this.$forceUpdate();

      // console.log("---->" + attr.active);
      // console.log(this.attrs);

      this.$emit("click");
    },
    reset() {
      this.logger.trace("reset.", this);

      this.attrs.forEach((attr) => {
        attr.active = false;
      });
      // this.attrCondAnd = false;
      
      //强制渲染
      this.$forceUpdate();
    },
    getActiveValue() {
      this.logger.trace("getActiveValue.", this);

      return this.attrs.filter(elem => {
        return elem.active;
      }).map(elem => {
        return elem.id;
      });
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
</style>
