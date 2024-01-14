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
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

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
                      <input class="form-control" id="condFreeword" placeholder="No, 名前">
                    </div>
                  </div>

                  <!-- 属性 -->
                  <CompMonsterSearchAttr label="主属性" hasExtAttr='true' />

                  <!-- サブ属性 -->
                  <CompMonsterSearchAttr label="副属性" hasExtAttr='false' />

                  <!-- 第三属性 -->
                  <CompMonsterSearchAttr label="第三属性" hasExtAttr='false' />

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
                    </div>
                  </div>

                  <!-- 覚醒スキル 1行目-->
                  <div class="form-group row">
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
                  <div class="form-group row">
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
                        :label="collabo.collaboId"
                        :value="collabo.collaboId"
                      />
                    </el-select>
                  </div>

                  <!-- スキルカテゴリ -->
                  <div class="form-group row">
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
              <el-button type="info" round @click="clearSearch"
                >クリア</el-button>
            </el-form-item>

                  </div>

                </div>
                
              </div>
              </el-form>
            </div>

            <div class="col-md-6 col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">
                    <i class="fas fa-list"></i> 検索結果
                  </h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  
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
      </div>
      <!-- /.content -->
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
      },
      searched: false,
      searchMonsterParam: {
        collabo: '',
        start: 0,
        length: 10,
      },
      displayData: {
        pageSizes: this.Config.paging.select,
        pageSize: 10,
        currentPage: 1,
        total: 0,
        collabos: [],
        monsters: [],
      },
    };
  },
  mounted() {
    console.log("MonsterPage.mounted-->start.");

    this.loadCollabo();

    console.log("MonsterPage.mounted-->end.");
  },
  methods: {
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

      api.listMonster(this.searchMonsterParam).then((resData) => {
          console.log("  searchMonster success.");
          // console.log(resData.data);
          console.log(resData.data.data);
          this.displayData.monsters = resData.data.data;
          this.displayData.total = resData.data.recordsFiltered;
        })
        .catch((err) => {
          console.error("  searchMonster failed.");
          console.log(err);
        });
    },
    clearSearch() {
      console.log("  clear search form!");
      // this.refs["searchMonsterForm"].resetFields();
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
@import "../assets/css/index-test.css";
</style>
