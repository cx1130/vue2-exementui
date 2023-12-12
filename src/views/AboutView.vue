<template>
  <div>
    <el-main>
      <el-row :gutter="5">
        <div
            class="about-box"
            :class="{ 'about-box-target': selectedBoxDiv === 1 }"
            @click="toggleBoxStyles(1)"
        >
          绝句
        </div>
      </el-row>
      <el-row :gutter="5">
        <div
            class="about-box"
            :class="{ 'about-box-target': selectedBoxDiv === 2 }"
            @click="toggleBoxStyles(2)"
        >
          律诗
        </div>
      </el-row>
      <el-row :gutter="5">
        <div
            class="about-box"
            :class="{ 'about-box-target': selectedBoxDiv === 3 }"
            @click="toggleBoxStyles(3)"
        >
          元曲
        </div>
      </el-row>
      <el-row :gutter="5">
        <div
            class="about-box"
            :class="{ 'about-box-target': selectedBoxDiv === 4 }"
            @click="toggleBoxStyles(4)"
        >
          风格绝句
        </div>
      </el-row>
      <el-row :gutter="5">
        <div
            class="about-box"
            :class="{ 'about-box-target': selectedBoxDiv === 5 }"
            @click="toggleBoxStyles(5)"
        >
          词
        </div>
      </el-row>
      <el-row :gutter="5">
        <div
            class="about-box"
            :class="{ 'about-box-target': selectedBoxDiv === 6 }"
            @click="toggleBoxStyles(6)"
        >
          对联
        </div>
      </el-row>
      <el-row :gutter="5">
        <div
            class="about-box"
            :class="{ 'about-box-target': selectedBoxDiv === 7 }"
            @click="toggleBoxStyles(7)"
        >
          朋友圈文案
        </div>
      </el-row>
      <el-row :gutter="5">
        <div
            class="about-box"
            :class="{ 'about-box-target': selectedBoxDiv === 8 }"
            @click="toggleBoxStyles(8)"
        >
          小红书标题
        </div>
      </el-row>
      <el-row :gutter="5">
        <div
            class="about-box"
            :class="{ 'about-box-target': selectedBoxDiv === 9 }"
            @click="toggleBoxStyles(9)"
        >
          小红书文案
        </div>
      </el-row>
    </el-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedBoxDiv: "box",
      selectedBoxStyle: "box-target",
    };
  },
  methods: {
    toggleBoxStyles(divNumber) {
      this.selectedBoxDiv = divNumber;
    },
  },
};
</script>
<style>
.about-box {
  height: 50px;
  width: 100px;
  background-color: #cdead3ff;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 10px;
}
.about-box-target {
  height: 50px;
  width: 100px;
  background-color: #89cb27ff;
  text-align: center;
  line-height: 50px;
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 10px;
}
</style>
