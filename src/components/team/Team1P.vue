<!-- 
  | components Team 1P
 -->
<template>
  <div>
    <div class="row">
      {{ this.selectedMemberId }}
    </div>
    <!-- 武器 -->
    <div class="row team-row team-self team-self-assist">      
      <comp-icon-monster
        v-for="member in team.assist"
        :key="member.id"
        :id="member.id"
        :empty="true"
        :selectable="true"
        :selected="selectedMemberId===member.id"
        class="padmst-icon icon-monster icon-team-monster assist-1p" 
        @select-change="handleSelectChange"
      />
    </div>

    <!--  -->
    <div class="row team-row team-self team-self-assist-mark">
      <span class="icon-team-monster team-assist-mark">↓</span>
      <span class="icon-team-monster team-assist-mark">↓</span>
      <span class="icon-team-monster team-assist-mark">↓</span>
      <span class="icon-team-monster team-assist-mark">↓</span>
      <span class="icon-team-monster team-assist-mark">↓</span>
      <span class="icon-team-monster team-assist-mark">↓</span>
    </div>

    <!-- 队员 -->
    <div class="row row-team team-self team-self-main">
      <comp-icon-monster
        v-for="member in team.member"
        :key="member.id"
        :id="member.id"
        :empty="true"
        :selectable="true"
        :selected="selectedMemberId===member.id"
        class="padmst-icon icon-monster icon-team-monster member-1p" 
        @select-change="handleSelectChange"
      />
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
      selectedMemberId:   undefined,
      team: {
        assist: [
          {
            // p1
            id:         "assist-1p-p1",
            monsterId:  undefined,
          },
          {
            // p2
            id:         "assist-1p-p2",
            monsterId:  undefined,
          },
          {
            // p3
            id:         "assist-1p-p3",
            monsterId:  undefined,
          },
          {
            // p4
            id:         "assist-1p-p4",
            monsterId:  undefined,
          },
          {
            // p5
            id:         "assist-1p-p5",
            monsterId:  undefined,
          },
          {
            // p6
            id:         "assist-1p-p6",
            monsterId:  undefined,
          },
        ],
        member: [
          {
            // p1
            id:         "member-1p-p1",
            monsterId:  undefined,
          },
          {
            // p2
            id:         "member-1p-p2",
            monsterId:  undefined,
          },
          {
            // p3
            id:         "member-1p-p3",
            monsterId:  undefined,
          },
          {
            // p4
            id:         "member-1p-p4",
            monsterId:  undefined,
          },
          {
            // p5
            id:         "member-1p-p5",
            monsterId:  undefined,
          },
          {
            // p6
            id:         "member-1p-p6",
            monsterId:  undefined,
          },
        ]
      }
    };
  },
  methods: {
    handleSelectChange(xxxId) {
      this.logger.trace(`select team member, id=${xxxId}`, this);
      this.selectedMemberId = xxxId;
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/padmst.css";
@import "../../assets/css/monster-detail.css";
@import "../../assets/css/team.css";
</style>
