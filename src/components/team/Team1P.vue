<!-- 
  | components Team 1P
 -->
<template>
  <div>
    <!-- 武器 -->
    <div class="row team-row team-self team-self-assist">
      <comp-icon-monster
        v-for="member in team.assist"
        :key="member.id"
        :id="member.id"
        :empty="member.empty"
        :monster="member.monster"
        :selectable="true"
        :selected="selectedMemberId===member.id"
        class="padmst-icon icon-monster icon-team-monster member-1p" 
        @select-change="handleSelectChange"
      />
    </div>

    <!-- 武器的表示箭头 -->
    <div class="row team-row team-self team-self-assist-mark">
      <span v-for="n in 6" :key="n" class="icon-team-monster team-assist-mark">↓</span>
    </div>

    <!-- 队员 -->
    <div class="row row-team team-self team-self-main">
      <comp-icon-monster
        v-for="member in team.member"
        :key="member.id"
        :id="member.id"
        :empty="member.empty"
        :monster="member.monster"
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
            empty     : true,
            monsterId:  undefined,
            monster   : undefined,
          },
          {
            // p2
            id:         "assist-1p-p2",
            empty     : true,
            monsterId:  undefined,
            monster   : undefined,
          },
          {
            // p3
            id:         "assist-1p-p3",
            empty     : true,
            monsterId:  undefined,
            monster   : undefined,
          },
          {
            // p4
            id:         "assist-1p-p4",
            empty     : true,
            monsterId:  undefined,
            monster   : undefined,
          },
          {
            // p5
            id:         "assist-1p-p5",
            empty     : true,
            monsterId:  undefined,
            monster   : undefined,
          },
          {
            // p6
            id:         "assist-1p-p6",
            empty     : true,
            monsterId:  undefined,
            monster   : undefined,
          },
        ],
        member: [
          {
            // p1
            id        : "member-1p-p1",
            empty     : true,
            monsterId : undefined,
            monster   : undefined,
          },
          {
            // p2
            id:         "member-1p-p2",
            empty     : true,
            monsterId : undefined,
            monster   : undefined,
          },
          {
            // p3
            id:         "member-1p-p3",
            empty     : true,
            monsterId : undefined,
            monster   : undefined,
          },
          {
            // p4
            id:         "member-1p-p4",
            empty     : true,
            monsterId : undefined,
            monster   : undefined,
          },
          {
            // p5
            id:         "member-1p-p5",
            empty     : true,
            monsterId : undefined,
            monster   : undefined,
          },
          {
            // p6
            id:         "member-1p-p6",
            empty     : true,
            monsterId : undefined,
            monster   : undefined,
          },
        ]
      }
    };
  },
  methods: {
    handleSelectChange(teamMemberId) {
      this.selectedMemberId = teamMemberId;
    },
    setMonster(objMonster) {
      if (this.selectedMemberId != undefined) {
        this.logger.trace(`set monsterId:${objMonster.monsterId} to ${this.selectedMemberId}.`, this);

        const targetMember = [...this.team.assist, ...this.team.member]
        .find(member => member.id === this.selectedMemberId);
        
        console.log(objMonster);
        console.log(targetMember);
        // this.logger.trace(`${targetMember}`, this);

        if (targetMember) {
          this.logger.trace(`-->set ${objMonster.monsterId} to ${targetMember.id}`, this);
          targetMember.empty = false;
          targetMember.monsterId = objMonster.monsterId;
          targetMember.monster = objMonster;
        }

      }
    }
  },
};
</script>

<style scoped>
@import "../../assets/css/padmst.css";
@import "../../assets/css/monster-detail.css";
@import "../../assets/css/team.css";
</style>
