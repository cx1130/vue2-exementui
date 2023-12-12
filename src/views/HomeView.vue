<template>
  <el-main>
    <el-row :gutter="20">
      <el-col :span="6">
        <div
            class="box-head"
            :class="{ 'box-head-target': selectedHeadDiv === 1 }"
            @click="resetFilter(1)"
        >
          全部
        </div>
      </el-col>
      <el-col :span="6">
        <div
            class="box-head"
            :class="{ 'box-head-target': selectedHeadDiv === 2 }"
            @click="toggleHeadStyles(2)"
        >
          诗词歌赋
        </div>
      </el-col>
      <el-col :span="6">
        <div
            class="box-head"
            :class="{ 'box-head-target': selectedHeadDiv === 3 }"
            @click="toggleHeadStyles(3)"
        >
          社交文案
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <div
            v-if="isItemInCategory(items[0], 2)"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 1 }"
            @click="toggleBoxStyles(items[0])"
        >
          绝句
        </div>
      </el-col>
      <el-col :span="6">
        <div
            v-if="isItemInCategory(items[1], 2)"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 2 }"
            @click="toggleBoxStyles(items[1])"
        >
          律诗
        </div>
      </el-col>
      <el-col :span="6">
        <div
            v-if="isItemInCategory(items[2], 2)"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 3 }"
            @click="toggleBoxStyles(items[2])"
        >
          元曲
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <div
            v-if="isItemInCategory(items[3], 2)"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 4 }"
            @click="toggleBoxStyles(items[3])"
        >
          风格绝句
        </div>
      </el-col>
      <el-col :span="6">
        <div
            v-if="isItemInCategory(items[4], 2)"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 5 }"
            @click="toggleBoxStyles(items[4])"
        >
          词
        </div>
      </el-col>
      <el-col :span="6">
        <div
            v-if="isItemInCategory(items[5], 2)"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 6 }"
            @click="toggleBoxStyles(items[5])"
        >
          对联
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <div
            v-if="isItemInCategory(items[6], 3)"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 7 }"
            @click="toggleBoxStyles(items[6])"
        >
          朋友圈文案
        </div>
      </el-col>
      <el-col :span="6">
        <div
            v-if="isItemInCategory(items[7], 3)"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 8 }"
            @click="toggleBoxStyles(items[7])"
        >
          小红书标题
        </div>
      </el-col>
      <el-col :span="6">
        <div
            v-if="isItemInCategory(items[8], 3)"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 9 }"
            @click="toggleBoxStyles(items[8])"
        >
          小红书文案
        </div>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: "绝句", category: 2, selected: false },
        { id: 2, text: "律诗", category: 2, selected: false },
        { id: 3, text: "元曲", category: 2, selected: false },
        { id: 4, text: "风格绝句", category: 2, selected: false },
        { id: 5, text: "词", category: 2, selected: false },
        { id: 6, text: "对联", category: 2, selected: false },
        { id: 7, text: "朋友圈文案", category: 3, selected: false },
        { id: 8, text: "小红书标题", category: 3, selected: false },
        { id: 9, text: "小红书文案", category: 3, selected: false },
        // 可以根据需要添加更多的项
      ],
      filteredCategory: null,
      selectedHeadDiv: "box-head",
      selectedHeadStyle: "box-head-target",
      selectedBoxDiv: "box",
      selectedBoxStyle: "box-target",
    };
  },
  methods: {
    toggleHeadStyles(divNumber) {
      this.selectedHeadDiv = divNumber;
      this.filteredCategory = divNumber;
      //已选按钮取消
      this.selectedBoxDiv = null;
    },
    toggleBoxStyles(item) {
      this.selectedBoxDiv = item.id;
      this.$router.push("about");
    },
    resetFilter(divNumber) {
      //当前选择变色
      this.selectedHeadDiv = divNumber;
      //已选按钮取消
      this.selectedBoxDiv = null;
      //分类清空
      this.filteredCategory = null;
    },
    isItemInCategory(item, category) {
      return !this.filteredCategory || item.category === this.filteredCategory;
    },
  },
};
</script>

<style>
.box {
  height: 100px;
  background-color: #cdead3ff;
  text-align: center;
  line-height: 100px;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.box-target {
  height: 100px;
  background-color: #89cb27ff;
  text-align: center;
  line-height: 100px;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.box-head {
  height: 50px;
  background-color: #cdead3ff;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.box-head-target {
  height: 50px;
  background-color: #2ad2beff;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
