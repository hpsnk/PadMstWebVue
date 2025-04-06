<template>
  <div>
    <!-- Content Header (Page header) -->
<!--      
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Team</h1>
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
        <div class="row">

          <!-- Team -->
          <div class="col-sm-6">
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h5 class="card-title">
                  <i class="fas fa-list"></i> Team
                </h5>
          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse">
              <i class="fas fa-minus"></i>
            </button>
          </div>
              </div>

              <!-- /.card-header -->
              <div class="card-body">

                <div class="row">
                  <el-radio-group v-model="teamType" size="mini">
                    <el-radio-button :label=1>1P</el-radio-button>
                    <el-radio-button :label=2>2P</el-radio-button>
                    <el-radio-button :label=3>3P</el-radio-button>
                  </el-radio-group>
                </div>
                <div class="row">
                  <comp-team-1-p/>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <!-- 检索条件 -->
            <comp-search-condition
              name="MonsterSearch.SearchCondition" 
              ref="compSearchCondition" 
              :searchData="searchData"
              />
              <!-- 检索结果 -->
            <monster-mini-card
              v-if="searchData.searched"
              :displayData="searchData.result"
              :searchMonsterParam="searchData.param"
              :hasDetail=true
              @page-change="handlePageChange"
              @size-change="handlePageSizeChange"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "TeamPage.vue",
  data() {
    return {
      teamType: 1,
      loading: {
        collabo: true,
        monster: false,
      },
      searchData: {
        searched: false,        
        param: {
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
        result: {
          pageSizes: this.Config.paging.select,
          pageSize: 10,
          currentPage: 1,
          total: 0,
          types: [],
          monsters: [],
        },
      },
    }
  },
  mounted() {
    this.logger.trace("mounted.", this);
  },
  methods: {
    handlePageChange(page) {
      this.logger.trace(`TeamPage.handlePageChange:${page}.`, this);      
      this.$refs.compSearchCondition.searchMonsterByPage(page);
    },
    handlePageSizeChange(pageSize) {
      this.logger.trace(`TeamPage.handlePageSizeChange:${pageSize}.`, this);
    },
  },
}
</script>
