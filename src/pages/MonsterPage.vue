<template>
  <div>
    <!-- Content Header (Page header) -->
<!-- 
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">モンスター</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Starter Page</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
-->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row monster-search">

          <!-- 検索条件 -->
          <div class="col-md-6 col-sm-12">
            <!-- <el-form ref="searchMonsterForm" :model="searchMonsterParam"> -->
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
                    <el-input ref="freeword" 
                      v-model="searchMonsterParam.freeword" placeholder="No, 名前" 
                      @change="setFreeword"/>
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
              
              <div class="card-footer">
                <!--ボタン-->
                <el-row type="flex" justify="space-between">
                  <!-- 排序 -->
                  <el-row>
                    <!-- 排序对象 -->
                    <el-select v-model="searchMonsterParam.sortBy" size="mini" placeholder="Sort">
                      <!-- MP -->
                      <el-option label="MP" value="2">
                        <span style="float: left">MP</span>
                      </el-option>
                      <!-- HP -->
                      <el-option label="HP" value="3">
                        <span style="float: left">HP</span>
                      </el-option>
                      <!-- ATK -->
                      <el-option label="ATK" value="4">
                        <span style="float: left">ATK</span>
                      </el-option>
                      <!-- RCV -->
                      <el-option label="RCV" value="5">
                        <span style="float: left">RCV</span>
                      </el-option>
                    </el-select>
                    <!-- 排序条件 -->
                    <el-switch
                      v-model="searchMonsterParam.sortKbn"
                      active-text="降序"
                      active-value=2
                      inactive-text="升序"
                      inactive-value=1
                    >
                    </el-switch>
                  </el-row>

                  <el-row>
                    <el-button type="primary" size="mini" round @click="searchMonster">検索</el-button>
                    <el-button type="info"    size="mini" round @click="handleResetSearchMonster">クリア</el-button>
                  </el-row>

                </el-row>
              </div>
              
            </div>
            <!-- </el-form> -->
          </div>

          <!--検索結果-->
          <!-- 
          <div class="col-md-6 col-sm-12" v-if="searched">
            <comp-search-result name="xxx.yyy.zzz" 
              :displayData="displayData"
              :searchMonsterParam="searchMonsterParam"
              @onSwitchPage="searchMonster" />
          </div>
          -->

          <div class="col-md-6 col-sm-12" v-if="searched">
            <monster-mini-card
              :displayData="displayData"
              :searchMonsterParam="searchMonsterParam"
              :hasDetail=true
              @size-change="handlePageSizeChange"
              @page-change="handlePageChange"
              @select-monster="handleSelectMonster"
            />
          </div>

        </div>
        <!-- /.row -->

      </div>
      <!-- /.container-fluid -->
    </div><!-- /.content -->
  </div>
</template>

<script>
import MonsterDetailCard from '../ui/MonsterDetailCard.vue';
import MonsterMiniCard from '../ui/MonsterMiniCard.vue';
export default {
  components: { MonsterDetailCard, MonsterMiniCard },
  name: "MonsterPage.vue",
  data() {
    return {
      selectedMonstr        : undefined,
      sortBy                : undefined,
      loading: {
        collabo             : true,
        monster             : false,
      },
      searched              : false,
      searchMonsterParam: {
        freeword            : undefined,
        mainAttr            : [],
        subAttr             : [],
        thirdAttr           : [],
        rare                : undefined,
        type                : [],
        typeCondAnd         : false,
        awakenSkill         : [],
        awakenSkillCondAnd  : false,
        collabo             : undefined,
        skillFreeword       : undefined,
        skillturn           : undefined,
        leaderskillFreeword : undefined,
        sortBy              : undefined,
        sortKbn             : undefined,
        start               : 0,
        length              : 10,
      },
      displayData: {
        pageSizes: this.Config.paging.select,
        pageSize: 10,
        currentPage: 1,
        total: 0,
        types: [],
        monsters: [],
      },
    };
  },
  methods: {
    resetPageAndSearch() {
      this.logger.trace("resetPageAndSearch.", this);
      this.searchMonsterParam.start = 0;
      this.displayData.currentPage = 1;
      this.searchMonster();
    },
    setFreeword() {
      this.logger.trace("setFreeword.", this);
      this.resetPageAndSearch();
    },
    setMainAttr(activeAttrIds) {
      this.logger.trace("setMainAttr.", this);
      this.searchMonsterParam.mainAttr = activeAttrIds;
      this.resetPageAndSearch();
    },
    setSubAttr(activeAttrIds) {
      this.logger.trace("setSubAttr.", this);
      this.searchMonsterParam.subAttr = activeAttrIds;
      this.resetPageAndSearch();
    },
    setThirdAttr(activeAttrIds) {
      this.logger.trace("setThirdAttr.", this);
      this.searchMonsterParam.thirdAttr = activeAttrIds;
      this.resetPageAndSearch();
    },
    setAwakenSkill() {
      this.logger.trace("setAwakenSkill.", this);
      let valAwakenSkill = this.$refs.compSearchAwakenSkill.getActiveValue();
      
      this.searchMonsterParam.awakenSkill            = valAwakenSkill.awakenSkill;
      this.searchMonsterParam.awakenSkillCondAnd     = valAwakenSkill.condAnd;
      this.searchMonsterParam.awakenSkillSortByCount = valAwakenSkill.awakenSkillSortByCount;

      this.resetPageAndSearch();
    },
    setRare() {
      this.logger.trace("setRare.", this);
      this.searchMonsterParam.rare = this.$refs.compSearchRare.getActiveValue();
      this.resetPageAndSearch();
    },
    setType() {
      this.logger.trace("setType.", this);
      let valType = this.$refs.compSearchType.getActiveValue();
      this.searchMonsterParam.type        = valType.type;
      this.searchMonsterParam.typeCondAnd = valType.typeCondAnd;
      this.resetPageAndSearch();
    },
    setCollabo() {
      this.logger.trace("setCollabo.", this);
      this.searchMonsterParam.collabo = this.$refs.compSearchCollabo.getActiveValue();
      this.resetPageAndSearch();
    },
    setSkill() {
      this.logger.trace("setSkill.", this);
      // todo
      let valSkill = this.$refs.compSearchSkill.getActiveValue();
      console.log(valSkill);
      this.searchMonsterParam.skillFreeword = valSkill.freeword;
      this.searchMonsterParam.skillturn     = valSkill.skillturn;
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
      this.searchMonsterParam.collabo = collaboId;
      this.searchMonster();
    },
    searchMonster() {
      this.logger.trace("searchMonster.", this);

      this.searched = true;
      this.loading.monster = true;

      this.PadMstApi.listMonster(this.searchMonsterParam).then((resData) => {
          this.displayData.monsters = resData.data.data;
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

      // freeword
      this.$refs.freeword                         = undefined;
      this.searchMonsterParam.freeword            = undefined;
      
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
      this.$refs.compSearchCollabo.reset();
      this.searchMonsterParam.collabo = undefined;
      // スキル
      this.$refs.compSearchSkill.reset();
      this.searchMonsterParam.skillFreeword = undefined;
      this.searchMonsterParam.skillturn     = undefined;
      // リーダースキル
      this.searchMonsterParam.leaderskillFreeword = undefined;
      // page      
      this.searchMonsterParam.start               = 0;
      this.searchMonsterParam.length              = 10;
      //
      this.searchMonsterParam.sortBy              = undefined;
      this.searchMonsterParam.sortKbn             = undefined;

      this.displayData.monsters = [];
      this.displayData.currentPage = 1;
      this.searched = false;

      this.selectedMonstr = undefined;
    },
    handlePageSizeChange(pageSize) {
      this.logger.trace(`MonsterPage.handlePageSizeChange:${pageSize}.`, this);
    },
    handlePageChange(page) {
      this.logger.trace(`MonsterPage.handlePageChange:${page}.`, this);
      this.displayData.currentPage = page;
      this.searchMonster();
    },
    handleSelectMonster(monsterId) {
      this.logger.trace(`MonsterPage.handleSelectMonster:${monsterId}.`, this);

      // 按monsterId筛选monster
      let objMonster = this.displayData.monsters.find(monster => {
          return monster.monsterId == monsterId;
      });
      
      this.selectedMonstr = objMonster;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/monster-search.css";
</style>
