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
                <CompMonsterSearchAttr ref="compMainAttr"
                  name="MonsterPage.mainAttr"
                  label="主属性" 
                  :hasNoneAttr="true"
                  @click="setMainAttr" />

                <!-- サブ属性 -->
                <CompMonsterSearchAttr ref="compSubAttr"
                  name="MonsterPage.subAttr"
                  label="副属性" 
                  :hasNoneAttr="false" 
                  @click="setSubAttr" />

                <!-- 第三属性 -->
                <CompMonsterSearchAttr ref="compThirdAttr" 
                  name="MonsterPage.thirdAttr"
                  label="第三属性" 
                  :hasNoneAttr="false" 
                  @click="setThirdAttr" />

                <!-- タイプ 1行目-->
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">タイプ</label>
                  <div class="col-sm-10">
                    <span>
                      <input id="typeCondAnd" type="checkbox" name="my-checkbox" data-bootstrap-switch data-on-text="AND" data-off-text="OR" data-on-color="success" data-off-color="danger">
                    </span>
                  </div>
                </div>
                
                <!-- タイプ 2行目-->
                <div class="form-group row">
                  <div class="col-sm-2 col-form-label"></div>
                  <div id="type" class="col-sm-10">
                    <span v-for="(type, index) in displayData.types" :key="index">
                      {{ type.typeId }}
                    </span>
                  </div>
                </div>

                <!-- 覚醒スキル 1行目-->
                <div class="form-group row" v-show="false">
                  <label class="col-sm-2 col-form-label">覚醒スキル</label>
                  <div class="col-sm-10">
                    <span>
                      <input id="awakenSkillCondAnd" type="checkbox" name="my-checkbox" data-bootstrap-switch data-on-text="AND" data-off-text="OR" data-on-color="success" data-off-color="danger">
                    </span>
                    <span class="float-right">
                      <div class="icheck-danger d-inline">
                        <input id="sortByCount" type="checkbox">
                        <label for="sortByCount">多い順</label>
                      </div>
                    </span>
                  </div>
                </div>

                <!-- 覚醒スキル 2行目-->
                <div class="form-group row" v-show="false">
                  <div class="col-sm-2"></div>
                  <div id="awakenSkill" class="col-sm-10"></div>
                </div>

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
                <div class="form-group row" v-show="false">
                  <label for="skillturn" class="col-sm-2 col-form-label">スキルターン</label>
                  <div class="col-sm-10">
                    <input class="form-control" id="skillturn" placeholder="7">
                  </div>
                </div>

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
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-list"></i> 検索結果
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body" v-if="searched">
                
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

                <table id="datatables_monster" class="table table-bordered table-hover table-monster" v-if="searched">
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
                  <tfoot>
                    <tr>
                      <!--0-->
                      <th>id</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
          </div>

        </div>
        <!-- /.row -->

      </div>
      <!-- /.container-fluid -->
    </div><!-- /.content -->
  </div>
</template>

<script>
import api from "../common/api";
import CompMonsterDetail from "../components/monster/detail.vue";
import CompMonsterSearchAttr from "@/components/monster/SearchAttr.vue"

export default {
  name: "MonsterPage",
  components: {
    CompMonsterDetail,
    CompMonsterSearchAttr,
  },
  data() {
    return {
      loading: {
        collabo: true,
        monster: false,
      },
      searched: false,
      searchMonsterParam: {
        freeword: "",
        mainAttr: [],
        subAttr: [],
        thirdAttr: [],
        collabo: '',
        start: 0,
        length: 10,
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
    console.log("MonsterPage.mounted-->start.");

    // コラボ
    this.loadCollabo();

    // タイプ
    this.loadType();

    console.log("MonsterPage.mounted-->end.");
  },
  methods: {
    resetPageAndSearch() {
      this.searchMonsterParam.start = 0;
      this.displayData.currentPage = 1;
      this.searchMonster();
    },
    setFreeword() {
      console.log("MonsterSearch.setFreeword!");
      console.log("  " + this.searchMonsterParam.freeword);
      this.resetPageAndSearch();
    },
    setMainAttr() {
      console.log("MonsterSearch.setMainAttr!");
      this.searchMonsterParam.mainAttr = this.$refs.compMainAttr.getActiveValue();
      this.resetPageAndSearch();
    },
    setSubAttr() {
      console.log("MonsterSearch.setSubAttr!");
      this.searchMonsterParam.subAttr = this.$refs.compSubAttr.getActiveValue();
      this.resetPageAndSearch();
    },
    setThirdAttr() {
      console.log("MonsterSearch.setThirdAttr!");
      this.searchMonsterParam.thirdAttr = this.$refs.compThirdAttr.getActiveValue();
      this.resetPageAndSearch();
    },
    loadType() {
      api.listType().then((resData)=>{
            console.log("  loadType success.");
            console.log(resData.data);
            this.displayData.types = resData.data;
        }).catch((err)=>{
            console.error("  loadType failed.");
            console.log(err);
        });
    },
    loadCollabo() {
      api.listCollabo().then((resData)=>{
            console.log("  loadCollabo success.");
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

      api.listMonster(this.searchMonsterParam).then((resData) => {
          this.displayData.monsters = resData.data.data;
          // console.log(this.displayData.monsters);
          this.displayData.monsters.forEach(monster=> {
            console.log(monster.monsterId + "-->" + Math.ceil(monster.monsterId/100) + ":" + (monster.monsterId-1)%10 + "," + Math.floor((monster.monsterId-1)/10));
          });
          this.displayData.total = resData.data.recordsFiltered;
          this.loading.monster = false;
        })
        .catch((err) => {
          console.error("  searchMonster failed.");
          console.log(err);
        });
    },
    handleResetSearchMonster() {
      console.log("  clear search form!");
      
      // メイン属性
      this.$refs.compMainAttr.reset();
      this.searchMonsterParam.mainAttr = [];
      // サブ属性
      this.$refs.compSubAttr.reset();
      this.searchMonsterParam.subAttr = [];
      // 第三属性
      this.$refs.compThirdAttr.reset();
      this.searchMonsterParam.thirdAttr = [];
      // コラボ
      this.searchMonsterParam.collabo = '';

      this.displayData.monsters = [];
      this.searched = false;
    },
    handlePageSizeChange(pageSize) {
      this.displayData.pageSize = pageSize;
    },
    handleCurrentChange(page) {
      this.displayData.currentPage = page;
      this.searchMonsterParam.start = (page - 1) * this.searchMonsterParam.length;
      this.searchMonster();
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/monster-search.css";
</style>
