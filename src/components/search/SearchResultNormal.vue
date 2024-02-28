<!-- 
  | components search result normal
 -->
<template>
  <div>
    <table id="datatables_monster" class="table table-bordered table-hover table-monster">
      <thead>
        <tr>
          <!--0-->
          <th>id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(monster, index) in displayData.monsters" :key="index">
          <td>
            <CompMonsterDetail :monster="monster" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CompMonsterDetail from "../monster/detail.vue";
export default {
  name: "SearchResultNormal.vue",
  props: {
    name: String,
    displayData: Object,
  },
  components: {
    CompMonsterDetail,
  },
  data() {
    return {
      types: [],
      typeCondAnd: false,
      loading: true,
    };
  },
  methods: {
  },
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
</style>
