<!-- 
  | components search condition
 -->
<template>
  <!-- 検索条件 -->
  <div>
    <el-form ref="searchMonsterForm" :model="searchData.param">
      <div class="card card-primary card-outline">
        <div class="card-header">
          <h5 class="card-title">
            <i class="fas fa-search"></i> 検索条件
          </h5>
          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse">
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>

        <div class="card-body search-condition-area">
          <!-- Freeword -->
          <div class="form-group row">
            <label for="condFreeword" class="col-sm-2 col-form-label">Freeword</label>
            <div class="col-sm-10">
              <el-input ref="freeword" v-model="searchData.param.freeword" placeholder="No, 名前" @change="setFreeword"/>
            </div>
          </div>

          <!-- 主属性 -->
          <comp-search-attr ref="compMainAttr"
            name="MonsterPage.mainAttr"
            label="主属性" 
            :hasNoneAttr="true"
            @click="setMainAttr" />

          <!-- サブ属性 -->
          <comp-search-attr ref="compSubAttr"
            name="MonsterPage.subAttr"
            label="副属性" 
            :hasNoneAttr="false" 
            @click="setSubAttr" />

          <!-- 第三属性 -->
          <comp-search-attr ref="compThirdAttr" 
            name="MonsterPage.thirdAttr"
            label="第三属性" 
            :hasNoneAttr="false" 
            @click="setThirdAttr" />

          <!-- レア -->
          <comp-search-rare ref="compSearchRare"
            name="MonsterPage.rare" 
            @click="setRare" />

          <!-- タイプ -->
          <comp-search-type ref="compSearchType" 
            name="MonsterPage.type"
            @click="setType" />

          <!-- コラボ -->
          <comp-search-collabo 
            ref="compSearchCollabo" 
            name="MonsterPage.SearchCollabo"
            @click="setCollabo"
          />

          <el-collapse>
            <!-- 覚醒スキル -->
            <el-collapse-item title="覚醒" name="awakenskill" class="aaa">
              <comp-search-awaken-skill ref="compSearchAwakenSkill" name="MonsterPage.AwakenSkill" @click="setAwakenSkill"/>
            </el-collapse-item>

            <!-- スキル -->
            <el-collapse-item title="スキル" name="skill">
              <comp-search-skill ref="compSearchSkill" name="MonsterPage.SearchSkill" @click="setSkill"/>
            </el-collapse-item>
          
            <!-- リーダースキル -->
            <el-collapse-item title="リーダースキル" name="leaderskill">
              <comp-search-leader-skill ref="compSearchLeaderSkill" name="MonsterPage.SearchLeaderSkill" @click="setLeaderSkill"/>
            </el-collapse-item>
          </el-collapse>
        </div>

        <!--ボタン-->
        <div class="card-footer">
          <div class="row">
            <!-- <el-form-item> -->
              <el-button type="primary" round @click="searchMonster">検索</el-button>
              <el-button type="info"    round @click="handleResetSearchMonster">クリア</el-button>
            <!-- </el-form-item> -->
          </div>
        </div>

      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SearchCondition.vue",
  props: {
    name:       String,
    searchData: Object,
  },
  created() {
    this.logger.trace("1.created.", this);
  },
  mounted() {
    this.logger.trace("2.mounted.", this);
  },
  data() {
    return {
      loading: {
        collabo: true,
        monster: false,
      },
    };
  },
  methods: {
    getSearchDate() {
      return this.data;
    },
    resetPageAndSearch() {
      this.logger.trace("resetPageAndSearch.", this);

      this.searchData.param.start = 0;
      this.searchData.result.currentPage = 1;
      this.searchMonster();
    },
    setFreeword() {
      this.logger.trace("setFreeword.", this);
      
      this.resetPageAndSearch();
    },
    setMainAttr(activeAttrs) {
      this.logger.trace("setMainAttr.", this);
      this.searchData.param.mainAttr = activeAttrs;
      this.resetPageAndSearch();
    },
    setSubAttr(activeAttrs) {
      this.logger.trace("setSubAttr.", this);
      this.searchData.param.subAttr = activeAttrs;
      this.resetPageAndSearch();
    },
    setThirdAttr(activeAttrs) {
      this.logger.trace("setThirdAttr.", this);
      this.searchData.param.thirdAttr = activeAttrs;
      this.resetPageAndSearch();
    },
    setAwakenSkill() {
      this.logger.trace("setAwakenSkill.", this);
      let valAwakenSkill = this.$refs.compSearchAwakenSkill.getActiveValue();
      
      this.searchData.param.awakenSkill            = valAwakenSkill.awakenSkill;
      this.searchData.param.awakenSkillCondAnd     = valAwakenSkill.condAnd;
      this.searchData.param.awakenSkillSortByCount = valAwakenSkill.awakenSkillSortByCount;

      this.resetPageAndSearch();
    },
    setRare() {
      this.logger.trace("setRare.", this);
      this.searchData.param.rare = this.$refs.compSearchRare.getActiveValue();
      this.resetPageAndSearch();
    },
    setType() {
      this.logger.trace("setType.", this);
      let valType = this.$refs.compSearchType.getActiveValue();
      this.searchData.param.type        = valType.type;
      this.searchData.param.typeCondAnd = valType.typeCondAnd;
      this.resetPageAndSearch();
    },
    setCollabo() {
      this.logger.trace("setCollabo.", this);
      this.searchData.param.collabo = this.$refs.compSearchCollabo.getActiveValue();
      this.resetPageAndSearch();
    },
    setSkill() {
      this.logger.trace("setSkill.", this);
      // todo
      let valSkill = this.$refs.compSearchSkill.getActiveValue();
      console.log(valSkill);
      this.searchData.param.skillFreeword = valSkill.freeword;
      this.resetPageAndSearch();
    },
    skillFreeword() {
      this.logger.trace("skillFreeword.", this);
      this.resetPageAndSearch();
    },
    setLeaderSkill() {
      this.logger.trace("setLeaderSkill.", this);
      // todo
      
      this.resetPageAndSearch();
    },
    setLeaderskillFreeword() {
      this.logger.trace("setLeaderskillFreeword.", this);
      this.resetPageAndSearch();
    },
    collaboChanged(collaboId) {
      console.log("  collaboId=%d.", collaboId);
      this.searchData.param.collabo = collaboId;
      this.searchMonster();
    },
    searchMonster() {
      this.logger.trace("searchMonster.", this);

      this.searchData.searched = true;
      this.loading.monster = true;

      this.PadMstApi.listMonster(this.searchData.param).then((resData) => {
          this.searchData.result.monsters = resData.data.data;
          this.searchData.result.total = resData.data.recordsFiltered;
          this.loading.monster = false;
        })
        .catch((err) => {
          console.error("  searchMonster failed.");
          console.log(err);
        });
    },
    handleResetSearchMonster() {
      this.logger.trace("handleResetSearchMonster.", this);

      // freeword
      this.$refs.freeword = "";
      this.searchData.param.freeword = "";
      
      // メイン属性
      this.$refs.compMainAttr.reset();
      this.searchData.param.mainAttr = [];
      // サブ属性
      this.$refs.compSubAttr.reset();
      this.searchData.param.subAttr = [];
      // 第三属性
      this.$refs.compThirdAttr.reset();
      this.searchData.param.thirdAttr = [];
      // レア
      this.$refs.compSearchRare.reset();
      this.searchData.param.rare = undefined;
      // タイプ
      this.$refs.compSearchType.reset();
      this.searchData.param.type = [];
      this.searchData.param.typeCondAnd = false;
      // 覚醒
      this.$refs.compSearchAwakenSkill.reset();
      this.searchData.param.awakenSkill = [];
      this.searchData.param.awakenSkillCondAnd = false;
      // コラボ
      this.$refs.compSearchCollabo.reset();
      this.searchData.param.collabo = undefined;
      // スキル
      this.$refs.compSearchSkill.reset();
      this.searchData.param.skillFreeword = undefined;
      // リーダースキル
      this.searchData.param.leaderskillFreeword = undefined;

      this.searchData.result.monsters = [];
      this.searchData.searched = false;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/monster-search.css";
</style>
