<!-- 
  | components search result normal
 -->
<template>
  <div>
    <el-row>
      <el-col>
        <el-pagination
          layout="sizes, -> ,prev, pager, next"
          :page-sizes="[10, 30, 50, 100]"
          :page-size="displayData.pageSize"
          :total="displayData.total"
          :current-page="displayData.currentPage"
          @current-change="handleCurrentChange"
          @size-change="handlePageSizeChange"
        >
        </el-pagination>
      </el-col>
    </el-row>

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
export default {
  name: "SearchResultNormal.vue",
  props: {
    name: String,
    monsters: Array,
    displayData: Object,
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
