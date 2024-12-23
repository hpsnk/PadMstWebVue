<!-- 
  | components Team 1P
 -->
<template>
  <div>
    <div class="row">
      components Team 1P
    </div>

        <div class="row">
          monster self assist
        </div>

        <div class="row team-row team-self team-self-assist">
          <div class="padmst-icon icon-monster icon-team-monster assist-1p p1 empty" data-type="self-assist" data-index="1"></div>
          <div class="padmst-icon icon-monster icon-team-monster assist-1p p2 empty" data-type="self-assist" data-index="2"></div>
          <div class="padmst-icon icon-monster icon-team-monster assist-1p p3 empty" data-type="self-assist" data-index="3"></div>
          <div class="padmst-icon icon-monster icon-team-monster assist-1p p4 empty" data-type="self-assist" data-index="4"></div>
          <div class="padmst-icon icon-monster icon-team-monster assist-1p p5 empty" data-type="self-assist" data-index="5"></div>
          <div class="padmst-icon icon-monster icon-team-monster assist-1p p6 empty" data-type="self-assist" data-index="6"></div>
        </div>

        <div class="row team-row team-self team-self-assist-mark">
          <span class="icon-team-monster team-assist-mark">↓</span>
          <span class="icon-team-monster team-assist-mark">↓</span>
          <span class="icon-team-monster team-assist-mark">↓</span>
          <span class="icon-team-monster team-assist-mark">↓</span>
          <span class="icon-team-monster team-assist-mark">↓</span>
          <span class="icon-team-monster team-assist-mark">↓</span>
        </div>

        <!-- <div class="row">
          monster self main
        </div> -->
        <!-- <div class="row team-row team-self team-self-main"> -->
        <div class="row row-team team-self team-self-main">
          <div class="padmst-icon icon-monster icon-team-monster member-1p p1 empty" data-type="self-main" data-index="1"></div>
          <div class="padmst-icon icon-monster icon-team-monster member-1p p2 empty" data-type="self-main" data-index="2"></div>
          <div class="padmst-icon icon-monster icon-team-monster member-1p p3 empty" data-type="self-main" data-index="3"></div>
          <div class="padmst-icon icon-monster icon-team-monster member-1p p4 empty" data-type="self-main" data-index="4"></div>
          <div class="padmst-icon icon-monster icon-team-monster member-1p p5 empty" data-type="self-main" data-index="5"></div>
          <div class="padmst-icon icon-monster icon-team-monster member-1p p6 empty" data-type="self-main" data-index="6"></div>
        </div>
      </div>

</template>

<script>
export default {
  name: "Team1P.vue",
  props: {
    name: String,
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
@import "../../assets/css/padmst.css";
@import "../../assets/css/monster-detail.css";
@import "../../assets/css/team.css";
</style>
