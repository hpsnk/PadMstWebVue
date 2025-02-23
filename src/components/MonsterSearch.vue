<template>
  <div>
    <!-- Monster Search Condition-->
    <div class="col-sm-4">
      <comp-search-condition
        name="MonsterSearch.SearchCondition" 
        ref="compSearchCondition" 
        :searchData="searchData"
        />
    </div>

    <!-- Monster Search Result-->
    <div class="col-sm-4">
      <comp-search-result
        name="MonsterSearch.SearchResult" 
        ref="compSearchResult" 
        :displayData="searchData.result"
        :searchMonsterParam="searchData.param"
        :searchData="searchData" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MonsterSearch.vue",
  data() {
    return {
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
    };
  },
  mounted() {
    this.logger.trace("mounted.", this);
  },
}
</script>
