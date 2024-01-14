<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="12">
          <el-form ref="form" :model="searchForm" label-width="100px">
            <!--freeword-->
            <el-row :gutter="10">
              <el-col>
                <el-form-item label="Freeword">
                  <el-input
                    v-model="searchForm.freeword"
                    placeholder="Freeword"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <!--属性-->
            <ComponentSearchAttr />

            <!--副属性-->
            <ComponentSearchAttr />

            <!--button-->
            <el-form-item>
              <el-button
                icon="el-icon-search"
                type="primary"
                @click="searchMonster()"
                >搜索</el-button
              >
              <el-button icon="el-icon-close" type="warning" justify="end"
                >重置</el-button
              >
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">bbb</div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
  
<script>
// import { config } from 'vue/types/umd';
import ComponentSearchAttr from "./ComponentSearchAttr.vue";
import Axios from "axios";

export default {
  name: "MonsterSearch",
  mounted: function () {
    console.log("11111");
    Axios.get("http://localhost:3000/padmst/cros/type/list")
      .then((response) => (
        console.log(response)
        ))
      .catch(function (error) {
        // 请求失败处理
        console.log(error);
      });
  },
  components: {
    ComponentSearchAttr,
  },
  methods: {
    searchMonster() {
      console.log("do search : " + Config.API_SERVER_HOST);
    },
  },
  data() {
    return {
      msg: "Welcome to Your MonsterSearch",
      loading: {
        collabo: true,
      },
      searchForm: {
        freeword: "",
        attr: "",
      },
    };
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  