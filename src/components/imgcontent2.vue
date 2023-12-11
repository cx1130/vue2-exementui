<!-- compile + mount 版本 -->
<template>
  <div ref="dynamicContent"></div>
</template>

<script>
import Vue from "vue";

export default {
  mounted() {
    const content = `
            <p><img width="100%" height="100%" src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg" alt="image"></p>
            `;
    const convertedContent = content.replace(
      /<img (width="100%" height="100%") src="(.*?)" alt="(.*?)">/g,
      `<el-image
            src="$2"
            :preview-src-list="['$2']">
            </el-image>`
    );
    // console.log(convertedContent, " convertedContent ======>");
    const DynamicComponent = Vue.extend({
      template: convertedContent,
      data() {
        return {}; // 如果需要，这里可以定义数据
      },
      components: {
        // Register the el-image component here if it's not globally registered
        "el-image":
          this.$options.components.ElImage /* global component reference */,
      },
    });

    // 创建 DynamicComponent 实例并挂载到 this.$refs.dynamicContent
    new DynamicComponent().$mount(this.$refs.dynamicContent);
  },
};
</script>
