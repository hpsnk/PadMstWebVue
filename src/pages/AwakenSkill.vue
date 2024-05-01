<template>
  <div>
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">覚醒スキル</h1>
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

          <!--検索結果-->
          <div class="col-md-12 col-sm-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="fas fa-list"></i> 検索結果
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <el-table :data="awakenskills" style="width: 100%" height="400">
                    <!-- 1. id -->
                    <el-table-column
                        prop="awakenskillId"
                        label="Id"
                        width="50">
                    </el-table-column>
                    <!-- 2. icon -->
                    <el-table-column label="Icon" width="80">
                        <template slot-scope="scope">
                            <comp-icon-awaken name="MonsterDetail.awakenskill"
                                :awakenskillId="scope.row.awakenskillId"
                                :key="scope.row.awakenskillId"
                            />
                        </template>
                    </el-table-column>
                    <!-- 3. name -->
                    <el-table-column label="Name">
                        <template slot-scope="scope">
                          <el-row>{{scope.row.name}}</el-row>
                          <el-row>{{scope.row.gameDesc}}</el-row>
                        </template>
                    </el-table-column>
                </el-table>

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
// import CompIconAwaken from "../components/monster/IconAwaken.vue";

export default {
  name: "AwakenSkill.vue",
  // components: {
  //   CompIconAwaken,
  // },
  data() {
    return {
        awakenskills: [],
    }
  },
  mounted() {
    console.log("AwakenSkillPage.mounted.start");
      
    this.PadMstApi.listAwakenSkill().then((resData)=>{
      console.log("success");
      console.log(resData.data);
      console.log(resData.data.data);
      this.awakenskills = resData.data.data;
    }).catch((err)=>{
        console.log("error");
        console.log(err);
    });

    console.log("AwakenSkillPage.mounted.end");
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
