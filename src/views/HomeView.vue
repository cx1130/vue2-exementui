<template>
  <div class="body">
    <el-row :gutter="4" class="center-row-home">
      <el-col :span="4">
        <div
          class="box-head"
          :class="{ 'box-head-target': selectedHeadDiv === 1 }"
          @click="resetFilter(1)"
        >
          全部
        </div>
      </el-col>
      <el-col :span="4">
        <div
          class="box-head"
          :class="{ 'box-head-target': selectedHeadDiv === 2 }"
          @click="toggleHeadStyles(2)"
        >
          诗词歌赋
        </div>
      </el-col>
      <el-col :span="4">
        <div
          class="box-head"
          :class="{ 'box-head-target': selectedHeadDiv === 3 }"
          @click="toggleHeadStyles(3)"
        >
          社交文案
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="4" class="center-row-home">
      <el-col :span="4">
        <div
          :style="{
            backgroundImage: 'url(' + require('@/public/jueju.png') + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          v-if="isItemInCategory(items[0])"
          class="box"
          :class="{ 'box-target': selectedBoxDiv === 1 }"
          @click="toggleBoxStyles(items[0])"
        >
          绝句
        </div>
      </el-col>
      <el-col :span="4">
        <div
          :style="{
            backgroundImage: 'url(' + require('@/public/lvshi.png') + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          v-if="isItemInCategory(items[1])"
          class="box"
          :class="{ 'box-target': selectedBoxDiv === 2 }"
          @click="toggleBoxStyles(items[1])"
        >
          律诗
        </div>
      </el-col>
      <el-col :span="4">
        <div
          :style="{
            backgroundImage: 'url(' + require('@/public/yuanqu.png') + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          v-if="isItemInCategory(items[2])"
          class="box"
          :class="{ 'box-target': selectedBoxDiv === 3 }"
          @click="toggleBoxStyles(items[2])"
        >
          元曲
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="4" class="center-row-home">
      <el-col :span="4">
        <div
          :style="{
            backgroundImage: 'url(' + require('@/public/fengyan.png') + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          v-if="isItemInCategory(items[3])"
          class="box"
          :class="{ 'box-target': selectedBoxDiv === 4 }"
          @click="toggleBoxStyles(items[3])"
        >
          风格绝句
        </div>
      </el-col>
      <el-col :span="4">
        <div
          :style="{
            backgroundImage: 'url(' + require('@/public/ci.png') + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          v-if="isItemInCategory(items[4])"
          class="box"
          :class="{ 'box-target': selectedBoxDiv === 5 }"
          @click="toggleBoxStyles(items[4])"
        >
          词
        </div>
      </el-col>
      <el-col :span="4">
        <div
          :style="{
            backgroundImage: 'url(' + require('@/public/dl.png') + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          v-if="isItemInCategory(items[5])"
          class="box"
          :class="{ 'box-target': selectedBoxDiv === 6 }"
          @click="toggleBoxStyles(items[5])"
        >
          对联
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="4" class="center-row-home">
      <el-col :span="4">
        <div
          :style="{
            backgroundImage: 'url(' + require('@/public/pengyouquan.png') + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          v-if="isItemInCategory(items[6])"
          class="box"
          :class="{ 'box-target': selectedBoxDiv === 7 }"
          @click="toggleBoxStyles(items[6])"
        >
          朋友圈文案
        </div>
      </el-col>
      <el-col :span="4">
        <div
          :style="{
            backgroundImage: 'url(' + require('@/public/xiaohongshu.png') + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          v-if="isItemInCategory(items[7])"
          class="box"
          :class="{ 'box-target': selectedBoxDiv === 8 }"
          @click="toggleBoxStyles(items[7])"
        >
          小红书标题
        </div>
      </el-col>
      <el-col :span="4">
        <div
          :style="{
            backgroundImage:
              'url(' + require('@/public/xiaohongshuwenan.png') + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          v-if="isItemInCategory(items[8])"
          class="box"
          :class="{ 'box-target': selectedBoxDiv === 9 }"
          @click="toggleBoxStyles(items[8])"
        >
          小红书文案
        </div>
      </el-col>
    </el-row>
  </div>
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
      //筛选
      filteredCategory: null,
      //头部默认样式
      selectedHeadDiv: "box-head",
      //头部选中样式
      selectedHeadStyle: "box-head-target",
      //主体默认样式
      selectedBoxDiv: "box",
      //主题选中样式
      selectedBoxStyle: "box-target",
    };
  },
  methods: {
    toggleHeadStyles(divNumber) {
      //选中头部
      this.selectedHeadDiv = divNumber;
      //选中筛选
      this.filteredCategory = divNumber;
      //已选按钮取消
      this.selectedBoxDiv = null;
    },
    toggleBoxStyles(item) {
      //选中
      this.selectedBoxDiv = item.id;
      //跳转
      // this.$router.push("about");
      this.$router.push({ name: "About", params: { id: item.id } });
    },
    resetFilter(divNumber) {
      //当前选择变色
      this.selectedHeadDiv = divNumber;
      //已选按钮取消
      this.selectedBoxDiv = null;
      //分类清空
      this.filteredCategory = null;
    },
    //是否筛选范围内
    isItemInCategory(item) {
      return !this.filteredCategory || item.category === this.filteredCategory;
    },
  },
};
</script>

<style>
.box {
  //background-color: #cdead3ff;
  line-height: 300%;
  font-size: 300%;
  margin-top: 5%;
  margin-bottom: 5%;
  color: rgba(0, 0, 0, 1);
}
.box-target {
  //background-color: #89cb27ff;
  line-height: 300%;
  font-size: 300%;
  margin-top: 5%;
  margin-bottom: 5%;
}

.box-head {
  background-color: #0bf697;
  line-height: 300%;
  font-size: 120%;
  margin-top: 20%;
  margin-bottom: 10%;
}

.box-head-target {
  background-color: #0bc0f5;
  line-height: 300%;
  font-size: 120%;
  margin-top: 20%;
  margin-bottom: 10%;
}
.center-row-home {
  display: flex;
  align-items: center;
  justify-content: center; /* 水平居中 */
}
.body {
  text-align: center;
}
</style>
