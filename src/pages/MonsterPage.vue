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
        <div class="row">

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
              <div class="card-body">
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

                <!-- 覚醒スキル -->
                <comp-search-awaken-skill 
                  ref="compSearchAwakenSkill" 
                  name="MonsterPage.AwakenSkill"
                  @click="setAwakenSkill"
                />

                <!-- コラボ(element-ui) -->
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">コラボ</label>
                  <el-select class="col-sm-10"
                    v-model="searchMonsterParam.collabo" 
                    v-loading="loading.collabo"
                    placeholder="カテゴリ" 
                    collapse-tags
                    @change="collaboChanged"
                    >
                    <el-option
                      v-for="collabo in displayData.collabos"
                      :key="collabo.collaboId"
                      :label="collabo.name ? collabo.collaboId + ' : ' + collabo.name : collabo.collaboId"
                      :value="collabo.collaboId"
                    />
                  </el-select>
                </div>

                <comp-search-collabo 
                  ref="compSearchCollabo" 
                  name="MonsterPage.SearchCollabo"
                  @click="setCollabo"
                />

                <!-- スキル -->
                <el-collapse>
                  <el-collapse-item title="スキル" name="skill">
                    <div class="form-group row">
                      <label for="condFreeword" class="col-sm-2 col-form-label">キー</label>
                      <div class="col-sm-10">
                        <el-input ref="freeword" 
                          placeholder="スキル キーワード" 
                          v-model="searchMonsterParam.skillFreeword" 
                          @change="skillFreeword"/>
                      </div>
                    </div>
                    <!-- スキルカテゴリ -->
                    <div class="form-group row" v-show="false">
                      <label class="col-sm-2 col-form-label">スキル</label>
                      <div class="col-sm-10">
                        <select id="skillcategory" class="form-control select2bs4" multiple="multiple" data-placeholder="Select a State">
                        <!-- <select class="form-control col-sm-10" > -->
                          <option value="0">All</option>
                        </select>
                      </div>
                    </div>

                    <!-- スキルターン -->
                    <div class="form-group row">
                      <label for="skillturn" class="col-sm-2 col-form-label">ターン</label>
                      <div class="col-sm-10">
                        <input class="form-control" id="skillturn" placeholder="7">
                      </div>
                    </div>

                  </el-collapse-item>
                </el-collapse>

                <!-- リーダースキル -->
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


                <!--ボタン-->
                <div class="form-group row">
                  <el-form-item>
                    <el-button type="primary" round @click="searchMonster">
                      検索
                    </el-button>
                    <el-button type="info" round @click="handleResetSearchMonster"
                      >クリア</el-button>
                  </el-form-item>
                </div>

              </div>
              
            </div>
            </el-form>
          </div>

          <!--検索結果-->
          <div class="col-md-6 col-sm-12"  v-if="searched">
            <comp-search-result name="xxx.yyy.zzz" 
              :displayData="displayData"
              :searchMonsterParam="searchMonsterParam"
              @onSwitchPage="handleCurrentChange" />
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
        collabos: [],
        monsters: [],
      },
    };
  },
  mounted() {
    this.logger.trace("mounted start.", this);
    // console.log("[%s][%s]mounted start.", this.$options.name, this.name);
    // console.log("MonsterPage.mounted-->start.");

    // コラボ
    this.loadCollabo();

    // console.log("MonsterPage.mounted-->end.");
    // console.log("[%s]mounted end.", this.name);
    this.logger.trace("mounted end.", this);
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
    skillFreeword() {
      this.logger.trace("skillFreeword.", this);
      this.resetPageAndSearch();
    },
    setLeaderskillFreeword() {
      this.logger.trace("setLeaderskillFreeword.", this);
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
      this.searchMonsterParam.collabo = undefined;
      // スキル
      this.searchMonsterParam.skillFreeword = undefined;
      // リーダースキル
      this.searchMonsterParam.leaderskillFreeword = undefined;

      this.displayData.monsters = [];
      this.searched = false;
    },
    handlePageSizeChange(pageSize) {
      this.displayData.pageSize = pageSize;
    },
    handleCurrentChange() {
      this.searchMonster();
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/monster-search.css";
</style>
