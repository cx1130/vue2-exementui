<!-- component is 版本 -->
<template>
  <component :is="dynamicComponent" />
</template>

<script>
export default {
  data() {
    return {
      dynamicComponent: this.createDynamicComponent(),
    };
  },
  methods: {
    createDynamicComponent() {
      const content = this.content;
      return {
        template: "<div>" + content + "</div>",
        data() {
          return {
            // 数据和方法
          };
        },
        components: {
          // 确保这里注册了 el-image 组件
          ElImage: this.$options.components.ElImage,
        },
      };
    },
  },
  beforeCreate() {
    this.content = `
            <p><img width="100%" height="100%" src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg" alt="image"><div style="display: flex; justify-content: center; flex-direction: column;"><h3 style="text-align: center;">我是大图，需要装</h3><span style="text-align: center;">我是描述语</span></div><img width="100%" height="100%" src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg" alt="image"><div style="display: flex; justify-content: center; flex-direction: column;"><h3 style="text-align: center;">我是大图，需要装</h3><span style="text-align:center;">我是描述语</span></div><img width="100%" height="100%" src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg" alt="image"><div style="display: flex; justify-content: center; flex-direction: column;"><h3 style="text-align: center;">我是大图，需要装</h3><span style="text-align: center;">我是描述语</span></div></p>
            `;
    this.content = this.content.replace(
      /<img (width="100%" height="100%") src="(.*?)" alt="(.*?)">/g,
      `<el-image
            src="$2"
            :preview-src-list="['$2']">
            </el-image>`
    );
  },
};
</script>
