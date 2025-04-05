<!-- 
  | MonsterMiniCard
  | 
  | [Attributes]
  |   参数                   类型               说明
  |   monsters              Array(Monster)
  |   page                  int                当前页数
  |   size                  int                每页显示条目个数
  |   total                 int                总条目数
  |   hasDetail             boolean            是否能显示MonsterDetail
  | 
  | [Event]
  |   事件名称               回调参数
  |   size-change           int: page size
  |   page-change           int: page number
  |   select-monster        int: monsterId
 -->
 <template>
  <div class="card">
    <div class="card-header">
      <div class="card-tools">
        <el-pagination
          layout="-> ,prev, pager, next"
          :page-sizes="[10, 30, 50, 100]"
          :page-size="displayData.pageSize"
          :total="displayData.total"
          :current-page="displayData.currentPage"
          @current-change="handleCurrentChange"
          @size-change="handlePageSizeChange"
        >
        </el-pagination>
      </div>
    </div>
    
    <!-- body -->
    <div class="card-body padmst-card-body">
      <comp-search-result-mini 
        :displayData="displayData" 
        @click-monster="handleClickMonster"
      />
      <div v-if="hasDetail && selectedMonster != undefined">
        <el-divider></el-divider>
        <div class="monster monster-detail monster-detail-normal">
          <comp-monster-detail 
            :monster="selectedMonster"
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonsterMiniCard.vue",
  props: {
    name:               String,
    displayData:        Object,
    searchMonsterParam: Object,
    searchData:         Object,
    hasDetail: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.logger.trace("1.created.", this);
  },
  mounted() {
    this.logger.trace("2.mounted.", this);
  },
  data() {
    return {
      selectedMonster       : undefined,
    };
  },
  methods: {
    handlePageSizeChange(pageSize) {
      this.displayData.pageSize = pageSize;

      // 触发自定义事件，并传递参数
      this.$emit('size-change', this.displayData.pageSize);
    },
    handleCurrentChange(page) {
      this.logger.debug("handlePageSizeChange. switch to page " + page, this);

      this.displayData.currentPage = page;

      this.searchMonsterParam.start = (page - 1) * this.searchMonsterParam.length;

      this.$emit('page-change', this.searchMonsterParam.start);
    },
    handleClickMonster(monsterId) {
      this.logger.debug(`MonsterMiniCard.handleClickMonster:${monsterId}`, this);

      if (this.selectedMonster != undefined && this.selectedMonster.monsterId == monsterId) {
        this.selectedMonster = undefined;
      } else {
        // 按monsterId筛选monster
        let objMonster = this.displayData.monsters.find(monster => {
            return monster.monsterId == monsterId;
        });
        
        this.selectedMonster = objMonster;

        // 发动事件
        this.$emit('select-monster', monsterId);
      }
    }
  }
};
</script>

<style scoped>
@import "../assets/css/monster-search.css";
@import "../assets/css/monster-detail.css";
</style>
