<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Team</h1>
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

          <!-- Team -->
          <div class="col-sm-4">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-list"></i> 検索結果
                </h3>
                <div class="card-tools">

                  <el-radio-group v-model="teamType" size="mini">
                    <el-radio-button :label=1>1P</el-radio-button>
                    <el-radio-button :label=2>2P</el-radio-button>
                    <el-radio-button :label=3>3P</el-radio-button>
                  </el-radio-group>

                </div>
              </div>

              <!-- /.card-header -->
              <div class="card-body">
                <comp-team-1-p/>
              </div>
              <!-- /.card-body -->
            </div>
          </div>

          <!-- Monster Search Condition-->
          <div class="col-sm-4">
            <comp-search-condition/>
          </div>

          <!-- Monster Search Result-->
          <div class="col-sm-4" v-if="searched">
            <comp-search-result
              name="TeamPage.SearchResult" 
              :displayData="displayData" />
          </div>
        </div>
        <!-- /.row -->
      </div>

    </div><!-- /.content -->
  </div>
</template>

<script>
export default {
  name: "TeamPage.vue",
  data() {
    return {
      teamType: 1,
      displayData: {
        pageSizes: this.Config.paging.select,
        pageSize: 10,
        currentPage: 1,
        total: 0,
        types: [],
        monsters: [],
      },
    }
  },
  mounted() {
    this.logger.trace("mounted.", this);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
