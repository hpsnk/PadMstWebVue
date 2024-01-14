<template>
    <el-container>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">aaa</div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">bbb</div>
        </el-col>
      </el-row>
  
      <el-form ref="form" :model="form" label-width="100px">
        <!--freeword-->
        <el-row :gutter="10">
          <el-col>
            <el-form-item label="Freeword">
              <el-input v-model="search.freeword" placeholder="Freeword"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
  
        <!--属性-->
        <el-row :gutter="10">
          <el-col>
            <el-form-item label="属性">
              <el-input v-model="search.type" placeholder="???"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
  
        <!--サブ属性-->
        <el-row :gutter="10">
          <el-col>
            <el-form-item label="サブ属性">
              <el-input v-model="search.subType" placeholder="???"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
  
        <!--タイプ条件(and, or)-->
        <el-row :gutter="10">
          <el-col>
            <el-form-item label="タイプ条件(and, or)">
              <el-input v-model="search.typeCondAnd" placeholder="???"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
  
        <!--タイプ-->
        <el-row :gutter="10">
          <el-col>
            <el-form-item label="タイプ">
              <el-input v-model="search.type" placeholder="???"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
  
        <!--覚醒スキル条件(and, or)-->
        <el-row :gutter="10">
          <el-col>
            <el-form-item label="覚醒スキル">
              <el-input v-model="search.awakenSkillCondAnd" placeholder="???"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
  
        <!--覚醒スキル-->
        <el-row :gutter="10">
          <el-col>
            <el-form-item label="覚醒スキル">
              <el-input v-model="search.awakenSkill" placeholder="???"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
  
        <!--コラボ-->
        <el-row :gutter="10">
          <el-col>
            <el-form-item label="コラボ">
              <el-select
                v-model="search.collabo"
                v-loading="loading.collabo"
                multiple
                collapse-tags
                placeholder="请选择"
              >
              <el-option label="区域1" value="beijing"></el-option>
              <el-option label="区域2" value="shanghai"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
  
        <!--スキルカテゴリ-->
        <el-row :gutter="10">
          <el-col>
            <el-form-item label="スキル">
              <el-input v-model="search.skillCategory" placeholder="???"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
  
        <!--スキルターン-->
        <el-row :gutter="10">
          <el-col>
            <el-form-item label="ターン">
              <el-input v-model="search.skillTurn" placeholder="???"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-container>
  </template>
    
  <script>
  export default {
    name: "MonsterSearch",
    data() {
      return {
        msg: "Welcome to Your MonsterSearch",
        loading: {
          collabo: true,
        },
        search:{
  
        }
      };
    },
  };
  </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
    