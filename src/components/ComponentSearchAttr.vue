<template>
  <el-row :gutter="10" justify="start">
    <el-col>
      <el-form-item label="属性">
        <el-avatar
          v-for="attr in attrs"
          :key="attr.value"
          :src="attr.image"
          :size="30"
          class="mask"
        />
      </el-form-item>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      attrs: [
        { value: "0", image: "./static/image/attr/attr_1.png" },
        { value: "1", image: "./static/image/attr/attr_2.png" },
        { value: "2", image: "./static/image/attr/attr_3.png" },
        { value: "3", image: "./static/image/attr/attr_4.png" },
        { value: "4", image: "./static/image/attr/attr_5.png" },
      ],
      type: "",
      red: {
        value: 0,
        image: "./static/image/attr/attr_1.png",
      },
      blue: {
        value: 1,
        image: "./static/image/attr/attr_2.png",
      },
      green: {
        value: 2,
        image: "./static/image/attr/attr_3.png",
      },
      light: {
        value: 3,
        image: "./static/image/attr/attr_4.png",
      },
      dark: {
        value: 4,
        image: "./static/image/attr/attr_5.png",
      },
    };
  },
};
</script>

<style scoped>
.mask {
  top: 0px;
  filter: alpha(opacity=60);
  z-index: 1002;
  left: 0px;
  opacity: 0.5;
  -moz-opacity: 0.5;
}
</style>
