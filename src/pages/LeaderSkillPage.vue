<template>
  <!--root-->
  <el-container>
    <el-main>
      <!--検索条件-->
      <el-row :gutter="10">
        <el-col>
          <el-form ref="searchForm" :model="searchForm" label-width="100px">
            <!--freeword-->
            <el-form-item label="Freeword">
              <el-input
                v-model="searchForm.freeword"
                placeholder="Freeword"
              ></el-input>
            </el-form-item>
            <!--カテゴリ-->
            <el-form-item label="カテゴリ">
              <el-select
                v-model="searchForm.leaderSkillCategory"
                v-loading="loading.leaderSkillCategory"
                placeholder="カテゴリ"
                multiple
                collapse-tags
              >
                <el-option
                  v-for="ls in displayData.leaderSkillCategory"
                  :key="ls.leaderskillType"
                  :label="ls.categoryName"
                  :value="ls.leaderskillType"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <!--カテゴリの条件(and/or)-->
            <el-form-item label="カテゴリ条件">
              <el-switch
                v-model="searchForm.leaderSkillCategoryCondAnd"
                active-text="And"
                inactive-text="Or"
              >
              </el-switch>
            </el-form-item>
            <!--ボタン-->
            <el-form-item>
              <el-button type="primary" round @click="handleSearchLeaderSkill"
                >検索</el-button
              >
              <el-button type="info" round @click="clearSearch"
                >クリア</el-button
              >
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <!--検索結果-->
      <el-row v-if="searched">
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

      <el-row v-if="searched">
        <el-col>
          <el-table
            v-loading="loading.leaderSkill"
            :data="displayData.leaderSkill"
            row-key="leaderskillId"
          >
            <el-table-column prop="type" label="Type" width="100" />
            <el-table-column prop="name" label="Name" width="200" />
            <el-table-column prop="gameDesc" label="Description" />
          </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "LeaderSkillPage.vue",
  mounted: function () {
    console.log("  mounted");
  },
  created: function () {
    console.log("  created start.");

    this.PadMstApi.listLeaderSkillCategory()
      .then((res) => {
        this.displayData.leaderSkillCategory = res.data;
        this.loading.leaderSkillCategory = false;
      })
      .catch(function (error) {
        // 请求失败处理
        console.log(" Load LeaderSkillCategory Failed!");
        // console.log(error);
      });
  },
  components: {
    // ComponentSearchAttr,
  },
  methods: {
    dispTypes(row, col, value, index) {
      console.log(value);
      console.log(typeof(value));
      return value.join(',');
    },
    searchLeaderSkill() {
      // 初期設定
      this.searched = true;
      // todo:没效果
      this.searchForm.length = this.displayData.pageSize;
      this.loading.leaderSkill = true;

      console.log("Search Leader Skill, params = ");
      console.log(this.searchForm);

      this.PadMstApi.searchLeaderSkill(this.searchForm)
        .then((res) => {
          console.log("  Search LeaderSkill Success!");
          // console.log(res);
          this.displayData.leaderSkill = res.data.data;
          console.log(this.displayData.leaderSkill);
          this.displayData.total = res.data.recordsFiltered;
          this.loading.leaderSkill = false;
        })
        .catch(function (error) {
          // 请求失败处理
          console.log("  Search LeaderSkill Failed!");
          // console.log(error);
        });
    },
    clearSearch() {
      console.log("  clear search form!");
      this.refs["searchForm"].resetFields();

      this.searched = false;
    },
    handleSearchLeaderSkill() {
      this.searchForm.start = 0;
      this.displayData.currentPage = 1;
      this.searchLeaderSkill();
    },
    handlePageSizeChange(pageSize) {
      this.displayData.pageSize = pageSize;
    },
    handleCurrentChange(page) {
      this.displayData.currentPage = page;
      console.log("currentPage=" + page);
      this.searchForm.start = (page - 1) * this.searchForm.length;
      this.searchLeaderSkill();
    },
  },
  data() {
    return {
      loading: {
        leaderSkillCategory: true,
        leaderSkill: true,
      },
      searched: false,
      searchForm: {
        datatables: "1", //datatables仕様
        freeword: "",
        leaderSkillCategory: [],
        leaderSkillCategoryCondAnd: false,
        start: 0,
        length: 10,
      },
      displayData: {
        pageSizes: this.Config.paging.select,
        pageSize: 10,
        currentPage: 1,
        total: 0,
        leaderSkillCategory: [],
        leaderSkill: [],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
