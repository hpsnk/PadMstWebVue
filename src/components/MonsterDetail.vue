<template>
  <div class="monster-detail">
    <div class="monster-icon">
      <div class="icon">
        <div class="id">1319</div>
      </div>
    </div>
    <div class="monster-name">I LOVE パズドラベア</div>
    <div class="monster-info">
      <div class="hp">
        <div class="tag">HP:</div>
        <div class="value">2279</div>
      </div>
      <div class="attack">
        <div class="tag">攻撃:</div>
        <div class="value">915</div>
      </div>
      <div class="recovery">
        <div class="tag">回復:</div>
        <div class="value">108</div>
      </div>
    </div>
    <div class="askill-info">
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_51.png" /></span>
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_52.png" /></span>
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_53.png" /></span>
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_54.png" /></span>
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_55.png" /></span>
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_56.png" /></span>
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_57.png" /></span>
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_58.png" /></span>
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_59.png" /></span>
    </div>
    <div class="super-askill-info">
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_11.png" /></span>
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_12.png" /></span>
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_13.png" /></span>
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_14.png" /></span>
      <span class="askill"><img class="icon" src="/PadMst/img/awakenskill/askill_15.png" /></span>
    </div>
    <div class="skill">
      <div class="name">BEAMSビーム</div>
      <div class="turn">11</div>
      <div class="desc">
        敵1体に攻撃力×10倍の攻撃。1ターンの間、神タイプの攻撃力が1.5倍。
      </div>
    </div>
    <div class="leaderskill">
      <div class="name">ワンダーベア</div>
      <div class="desc">火、水、光の同時攻撃で攻撃力が2.5倍。</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonsterDetail',
  data () {
    return {
      msg: 'Welcome to Your MonsterDetail'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.monster-detail .monster-icon .icon {
  position: relative;
  /* background-image: url(../img/monster/1319.jpg); */
  width: 80px;
  height: 80px;
  display: block;
  background-size: 80px 80px;
}

.monster-detail .monster-icon .icon .id {
  display: block;
  color: white;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  height: 17px;
  text-shadow: black 0px 0px 2px, black -1px -1px 1px, black 1px 1px 1px;
  position: absolute;
  left: 5px;
  bottom: 5px;
}

.monster-detail .monster-icon .icon .id::before {
  content: "No.";
}

/* ---------------------------------------------------------------- */
/* .monster-detail                                                  */
/* ---------------------------------------------------------------- */
div.monster-detail {
  position: relative;
  display: block;
  height: 200px;
  width: 100%;
  background-color: rgba(121, 91, 51, 100);
}

.monster-detail .monster-name {
  position: absolute;
  color: aliceblue;
  top: 0px;
  left: 90px;
}

.monster-detail .monster-info {
  position: absolute;
  left: 90px;
  top: 20px;
}

.monster-detail .monster-info .tag {
  display: inline-block;
  font-size: x-small;
  color: aliceblue;
  width: 30px;
}

.monster-detail .monster-info .value {
  display: inline-block;
  font-size: x-small;
  color: aliceblue;
  text-align: right;
  width: 30px;
}

.monster-detail .monster-info .hp {
  font-size: x-small;
}

.monster-detail .monster-info .attack {
  font-size: x-small;
  top: 35px;
}

.monster-detail .monster-info .recovery {
  font-size: x-small;
  top: 50px;
}

.monster-detail .askill-info {
  position: absolute;
  top: 20px;
  left: 160px;
}

.monster-detail .askill-info .icon {
  width: 20px;
  height: 20px;
}

.monster-detail .super-askill-info {
  position: absolute;
  top: 45px;
  left: 160px;
}

.monster-detail .super-askill-info .icon {
  width: 20px;
  height: 20px;
}

.monster-detail .skill .name::before {
  content: "スキル";
  background-color: rgba(199, 68, 51, 100);
  margin-right: 10px;
  border-radius: 6px;
  border: 2px solid rgba(166, 132, 59, 100);
}

.monster-detail .skill .name {
  position: absolute;
  color: rgba(133, 188, 255, 100);
  background-color: rgba(56, 23, 16, 100);
  height: 24px;
  width: 100%;
  bottom: 100px;
}

.monster-detail .skill .desc {
  position: absolute;
  font-size: small;
  background-color: rgba(177, 170, 160, 100);
  height: 40px;
  width: 100%;
  bottom: 60px;
}

.monster-detail .skill .turn {
  position: absolute;
  color: aliceblue;
  width: 100%;
  text-align: right;
  bottom: 100px;
}

.monster-detail .skill .turn::before {
  content: "ターン:";
}

.monster-detail .leaderskill .name {
  position: absolute;
  color: rgba(128, 255, 127, 100);
  background-color: rgba(56, 23, 16, 100);
  height: 24px;
  width: 100%;
  bottom: 40px;
}

.monster-detail .leaderskill .name::before {
  content: "リーダースキル";
  color: rgba(255, 221, 136, 100);
  background-color: rgba(199, 68, 51, 100);
  margin-right: 10px;
  border-radius: 6px;
  border: 2px solid rgba(166, 132, 59, 100);
}

.monster-detail .leaderskill .desc {
  position: absolute;
  font-size: small;
  background-color: rgba(207, 205, 129, 100);
  height: 40px;
  width: 100%;
  bottom: 0px;
}
</style>
