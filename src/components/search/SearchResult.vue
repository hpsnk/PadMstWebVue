<!-- 
  | components search result
 -->
<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">
        <el-switch
          v-model="isMini"
          active-text="Icon"
          inactive-text="Detail">
        </el-switch>
      </h3>
      <div class="card-tools">
        <el-pagination
          layout="-> ,prev, pager, next"
          :page-sizes="[10, 30, 50, 100]"
          :page-size="displayData.pageSize"
          :total="displayData.total"
          :current-page="displayData.currentPage"
          @current-change="handleCurrentChange"
          @size-change="handlePageSizeChange"
        >
        </el-pagination>

        <el-pagination v-if="false"
            layout="-> ,sizes"
            :page-sizes="[10, 30, 50, 100]"
            :page-size="displayData.pageSize"
            :total="displayData.total"
            :current-page="displayData.currentPage"
            @current-change="handleCurrentChange"
            @size-change="handlePageSizeChange"
          >
          </el-pagination>
      </div>
    </div>
    
    <!-- body -->
    <div class="card-body">
      <!--mini-->
      <div class="row" v-if="isMini">
        <comp-search-result-mini :displayData="displayData" />
      </div>

      <!--normal-->
      <div class="row" v-if="!isMini">
        <comp-search-result-normal :displayData="displayData" />
      </div>
    </div>

    <!-- footer -->
    <div class="card-footer">
      <el-pagination
          layout="-> ,prev, pager, next"
          :page-sizes="[10, 30, 50, 100]"
          :page-size="displayData.pageSize"
          :total="displayData.total"
          :current-page="displayData.currentPage"
          @current-change="handleCurrentChange"
          @size-change="handlePageSizeChange"
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult.vue",
  props: {
    name:               String,
    displayData:        Object,
    searchMonsterParam: Object,
    searchData:         Object,
  },
  created() {
    this.logger.trace("1.created.", this);
  },
  mounted() {
    this.logger.trace("2.mounted.", this);
  },
  data() {
    return {
      isMini: true,
      // types: [],
      // typeCondAnd: false,
      // loading: true,
    };
  },
  methods: {
    resetPageAndSearch() {
      this.searchMonsterParam.start = 0;
      this.displayData.currentPage = 1;
      this.searchMonster();
    },
    setFreeword() {
      this.logger.trace("setFreeword.", this);
      // console.log("MonsterSearch.setFreeword!");
      // console.log("  " + this.searchMonsterParam.freeword);
      this.resetPageAndSearch();
    },
    setMainAttr() {
      this.logger.trace("setMainAttr.", this);
      // console.log("MonsterSearch.setMainAttr!");
      this.searchMonsterParam.mainAttr = this.$refs.compMainAttr.getActiveValue();
      this.resetPageAndSearch();
    },
    setSubAttr() {
      this.logger.trace("setSubAttr.", this);
      // console.log("MonsterSearch.setSubAttr!");
      this.searchMonsterParam.subAttr = this.$refs.compSubAttr.getActiveValue();
      this.resetPageAndSearch();
    },
    setThirdAttr() {
      this.logger.trace("setThirdAttr.", this);
      // console.log("MonsterSearch.setThirdAttr!");
      this.searchMonsterParam.thirdAttr = this.$refs.compThirdAttr.getActiveValue();
      this.resetPageAndSearch();
    },
    setAwakenSkill() {
      this.logger.trace("setAwakenSkill.", this);
      // console.log("MonsterSearch.setAwakenSkill!");
      let valAwakenSkill = this.$refs.compSearchAwakenSkill.getActiveValue();
      
      this.searchMonsterParam.awakenSkill        = valAwakenSkill.awakenSkill;
      this.searchMonsterParam.awakenSkillCondAnd = valAwakenSkill.condAnd;

      this.resetPageAndSearch();
    },
    setRare() {
      this.logger.trace("setRare.", this);
      // console.log("MonsterSearch.setRare!");
      this.searchMonsterParam.rare = this.$refs.compSearchRare.getActiveValue();
      this.resetPageAndSearch();
    },
    setType() {
      this.logger.trace("setType.", this);
      // console.log("MonsterSearch.setType!");
      let valType = this.$refs.compSearchType.getActiveValue();
      this.searchMonsterParam.type        = valType.type;
      this.searchMonsterParam.typeCondAnd = valType.typeCondAnd;
      this.resetPageAndSearch();
    },
    setCollabo() {
      this.logger.trace("setCollabo.", this);
      // console.log("MonsterSearch.setCollabo!");
      this.searchMonsterParam.collabo = this.$refs.compSearchCollabo.getActiveValue();
      this.resetPageAndSearch();
    },
    loadCollabo() {
      this.PadMstApi.listCollabo().then((resData)=>{
            // console.log("  loadCollabo success.");
            // console.log(resData.data);
            this.displayData.collabos = resData.data;
            this.loading.collabo = false;
        }).catch((err)=>{
            console.error("  loadCollabo failed.");
            console.log(err);
        });
    },
    collaboChanged(collaboId) {
      console.log("  collaboId=%d.", collaboId);
      this.searchMonsterParam.collabo = collaboId;
      this.searchMonster();
    },
    searchMonster() {
      this.searched = true;
      this.loading.monster = true;

      this.PadMstApi.listMonster(this.searchMonsterParam).then((resData) => {
          this.displayData.monsters = resData.data.data;
          console.log(this.displayData.monsters);
          // this.displayData.monsters.forEach(monster=> {
          //   console.log(monster.monsterId + "-->" + Math.ceil(monster.monsterId/100) + ":" + (monster.monsterId-1)%10 + "," + Math.floor((monster.monsterId-1)/10));
          // });
          this.displayData.total = resData.data.recordsFiltered;
          this.loading.monster = false;
        })
        .catch((err) => {
          console.error("  searchMonster failed.");
          console.log(err);
        });
    },
    handleResetSearchMonster() {
      this.logger.trace("handleResetSearchMonster.", this);
      // console.log("  clear search form!");

      // freeword
      this.$refs.freeword = "";
      this.searchMonsterParam.freeword = "";
      
      // メイン属性
      this.$refs.compMainAttr.reset();
      this.searchMonsterParam.mainAttr = [];
      // サブ属性
      this.$refs.compSubAttr.reset();
      this.searchMonsterParam.subAttr = [];
      // 第三属性
      this.$refs.compThirdAttr.reset();
      this.searchMonsterParam.thirdAttr = [];
      // レア
      this.$refs.compSearchRare.reset();
      this.searchMonsterParam.rare = undefined;
      // タイプ
      this.$refs.compSearchType.reset();
      this.searchMonsterParam.type = [];
      this.searchMonsterParam.typeCondAnd = false;
      // 覚醒
      this.$refs.compSearchAwakenSkill.reset();
      this.searchMonsterParam.awakenSkill = [];
      this.searchMonsterParam.awakenSkillCondAnd = false;
      // コラボ
      this.searchMonsterParam.collabo = '';

      this.displayData.monsters = [];
      this.searched = false;
    },
    handlePageSizeChange(pageSize) {
      this.displayData.pageSize = pageSize;
    },
    handleCurrentChange(page) {
      this.logger.debug("handlePageSizeChange. switch to page " + page, this);

      this.displayData.currentPage = page;

      // console.log(this.searchMonsterParam);

      this.searchMonsterParam.start = (page - 1) * this.searchMonsterParam.length;

      this.$emit("onSwitchPage");

      // this.searchMonster();
    },
  }
};
</script>

<style scoped>
@import "../../assets/css/monster-search.css";
@import "../../assets/css/monster-detail.css";
</style>
