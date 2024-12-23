<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">モンスター</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Starter Page</li>
            </ol>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div><!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row monster-search">

          <!-- 検索条件 -->
          <div class="col-md-6 col-sm-12">
            <el-form ref="searchMonsterForm" :model="searchMonsterParam">
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


<!-- 
                <div class="form-group row">
                  <el-collapse>
                    <el-collapse-item title="リーダースキル" name="leaderskill">
                      <div class="form-group row">

                        <label for="condLeaderskillFreeword" class="col-sm-2 col-form-label">キー</label>
                        <div class="col-sm-10">
                          <el-input ref="freeword" 
                            placeholder="リーダースキル キーワード" 
                            v-model="searchMonsterParam.leaderskillFreeword" 
                            @change="setLeaderskillFreeword"/>
                        </div>
                      </div>

                    </el-collapse-item>
                  </el-collapse>
                </div> 
-->
              </div>
              
              <div class="card-footer">
                <!--ボタン-->
                <div class="row">
                  <!-- <el-form-item> -->
                    <el-button type="primary" round @click="searchMonster">検索</el-button>
                    <el-button type="info" round @click="handleResetSearchMonster">クリア</el-button>
                  <!-- </el-form-item> -->
                </div>
              </div>
              
            </div>
            </el-form>
          </div>

          <!--検索結果-->
          <div class="col-md-6 col-sm-12" v-if="searched">
            <comp-search-result name="xxx.yyy.zzz" 
              :displayData="displayData"
              :searchMonsterParam="searchMonsterParam"
              @onSwitchPage="searchMonster" />
          </div>

        </div>
        <!-- /.row -->

      </div>
      <!-- /.container-fluid -->
    </div><!-- /.content -->
  </div>
</template>

<script>
export default {
  name: "MonsterPage.vue",
  data() {
    return {
      loading: {
        collabo: true,
        monster: false,
      },
      searched: false,
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
        leaderskillFreeword : undefined,
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
    setMainAttr() {
      this.logger.trace("setMainAttr.", this);
      this.searchMonsterParam.mainAttr = this.$refs.compMainAttr.getActiveValue();
      this.resetPageAndSearch();
    },
    setSubAttr() {
      this.logger.trace("setSubAttr.", this);
      this.searchMonsterParam.subAttr = this.$refs.compSubAttr.getActiveValue();
      this.resetPageAndSearch();
    },
    setThirdAttr() {
      this.logger.trace("setThirdAttr.", this);
      this.searchMonsterParam.thirdAttr = this.$refs.compThirdAttr.getActiveValue();
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
      this.$refs.compSearchCollabo.reset();
      this.searchMonsterParam.collabo = undefined;
      // スキル
      this.$refs.compSearchSkill.reset();
      this.searchMonsterParam.skillFreeword = undefined;
      // リーダースキル
      this.searchMonsterParam.leaderskillFreeword = undefined;

      this.displayData.monsters = [];
      this.searched = false;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/monster-search.css";
</style>
