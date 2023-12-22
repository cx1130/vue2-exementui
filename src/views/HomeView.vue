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
          v-if="isItemInCategory(items[0])"
          @click="toggleBoxStyles(items[0])"
        >
          <div
            :style="{
              backgroundImage: 'url(' + require('@/public/jueju.png') + ')',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              margin: 'auto',
            }"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 1 }"
          ></div>
          <div class="image-caption">绝句</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div
          v-if="isItemInCategory(items[1])"
          @click="toggleBoxStyles(items[1])"
        >
          <div
            :style="{
              backgroundImage: 'url(' + require('@/public/lvshi.png') + ')',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              margin: 'auto',
            }"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 2 }"
          ></div>
          <div class="image-caption">律诗</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div
          v-if="isItemInCategory(items[2])"
          @click="toggleBoxStyles(items[2])"
        >
          <div
            :style="{
              backgroundImage: 'url(' + require('@/public/yuanqu.png') + ')',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              margin: 'auto',
            }"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 3 }"
          ></div>
          <div class="image-caption">元曲</div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="4" class="center-row-home">
      <el-col :span="4">
        <div
          v-if="isItemInCategory(items[3])"
          @click="toggleBoxStyles(items[3])"
        >
          <div
            :style="{
              backgroundImage: 'url(' + require('@/public/fengge.png') + ')',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              margin: 'auto',
            }"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 4 }"
          ></div>
          <div class="image-caption">风格绝句</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div
          v-if="isItemInCategory(items[4])"
          @click="toggleBoxStyles(items[4])"
        >
          <div
            :style="{
              backgroundImage: 'url(' + require('@/public/songci.png') + ')',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              margin: 'auto',
            }"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 5 }"
          ></div>
          <div class="image-caption">宋词</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div
          v-if="isItemInCategory(items[5])"
          @click="toggleBoxStyles(items[5])"
        >
          <div
            :style="{
              backgroundImage: 'url(' + require('@/public/duilian1.png') + ')',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              margin: 'auto',
            }"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 6 }"
          ></div>
          <div class="image-caption">对联</div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="4" class="center-row-home">
      <el-col :span="4">
        <div
          v-if="isItemInCategory(items[6])"
          @click="toggleBoxStyles(items[6])"
        >
          <div
            :style="{
              backgroundImage:
                'url(' + require('@/public/pengyouquan.png') + ')',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              margin: 'auto',
            }"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 7 }"
          ></div>
          <div class="image-caption">朋友圈文案</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div
          v-if="isItemInCategory(items[7])"
          @click="toggleBoxStyles(items[7])"
        >
          <div
            :style="{
              backgroundImage:
                'url(' + require('@/public/xiaohongshu.png') + ')',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              margin: 'auto',
            }"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 8 }"
          ></div>
          <div class="image-caption">小红书标题</div>
        </div>
      </el-col>
      <el-col :span="4">
        <div
          v-if="isItemInCategory(items[8])"
          @click="toggleBoxStyles(items[8])"
        >
          <div
            :style="{
              backgroundImage:
                'url(' + require('@/public/xiaohongshu.png') + ')',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              margin: 'auto',
            }"
            class="box"
            :class="{ 'box-target': selectedBoxDiv === 9 }"
          ></div>
          <div class="image-caption">小红书文案</div>
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
  width: 100px; /* 容器的宽度 */
  height: 80px; /* 容器的高度 */
  //line-height: 300%;
  //font-size: 300%;
  margin-top: 5%;
  margin-bottom: 5%;
  //color: rgba(0, 0, 0, 0.5);
  position: relative;
}
.box-target {
  //background-color: #89cb27ff;
  width: 100px; /* 容器的宽度 */
  height: 80px; /* 容器的高度 */
  margin-top: 5%;
  margin-bottom: 5%;
  position: relative;
}
.image-caption {
  color: rgba(0, 0, 0, 0.5);
  padding: 8px; /* 文字容器的内边距 */
  text-align: center;
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
