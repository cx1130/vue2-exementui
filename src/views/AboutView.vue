<template>
  <div>
    <el-row :gutter="5" class="center-row">
      <!-- 左侧区域 -->
      <el-col :span="5" class="left-row">
        <div>
          <!-- 左侧内容放在这里 -->
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
        </div>
      </el-col>
      <!-- 右侧区域 -->
      <el-col :span="5" class="right-row">
        <div>
          <el-input
            v-model="inputValue"
            placeholder="请输入内容"
            class="input"
          ></el-input>
        </div>
        <div class="upload">
          <el-upload
            action="/your-upload-api"
            :show-file-list="false"
            :on-success="handleSuccess"
            :before-upload="beforeUpload"
          >
            <el-button size="small" type="primary">上传图片</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </div>
        <div class="topbox">
          <el-button size="small" type="primary" @click="startRecording"
            >开始录音</el-button
          >
          <el-button
            size="small"
            type="primary"
            class="topbox"
            @click="stopRecording"
            >停止录音</el-button
          >
          <a v-if="audioUrl" :href="audioUrl" download="recorded_audio.wav"
            >下载录音文件</a
          >
        </div>
        <div class="topbox">
          <el-checkbox v-model="isChecked">智能配图</el-checkbox>
          <p>选择的状态: {{ isChecked ? "已选中" : "未选中" }}</p>
        </div>
        <div class="topbox">
          <el-button @click="genStr" size="small" type="primary"
            >生成</el-button
          >
        </div>
        <el-divider></el-divider>
        <div class="topbox">
          <el-row :gutter="10">
            <el-col :span="35">
              <!-- 文字展示框 -->
              <el-input v-model="textFromBackend" :readonly="true"></el-input>
            </el-col>
            <el-col :span="1">
              <el-button size="small" type="primary" @click="playRecording"
                >播放录音</el-button
              >
            </el-col>
          </el-row>
          <!-- 图片展示框 -->
          <el-image
            class="topbox"
            v-if="imageUrlFromBackend"
            :src="imageUrlFromBackend"
            style="width: 100px; height: 150px"
          ></el-image>
          <div class="button-container">
            <el-button type="primary" @click="goBack">返回上一页</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      //主体默认样式
      selectedBoxDiv: this.$route.params.id,
      //主题选中样式
      selectedBoxStyle: "box-target",
      //输入框中内容
      inputValue: "",
      //录音
      mediaRecorder: null,
      //是否增在录音
      isRecording: false,
      //音频存储
      audioChunks: [],
      //音频url
      audioUrl: null,
      //音频播放
      audioPlayer: null,
      //单选框
      isChecked: false,
      // 从后台返回的文字
      textFromBackend: "",
      // 从后台返回的图片 URL
      imageUrlFromBackend: "",
    };
  },
  created() {
    // 模拟从后台获取数据
    // 这里你需要替换成实际从后台获取数据的逻辑
    this.textFromBackend = "文字内容从后台获取";
    this.imageUrlFromBackend =
      "https://www.unchartedwaters.cn/static/barMM/beihaimm2.jpg";
  },
  methods: {
    toggleBoxStyles(divNumber) {
      //选中样式
      this.selectedBoxDiv = divNumber;
    },
    goBack() {
      this.$router.back();
    },
    handleSuccess(response, file) {
      console.log("上传成功", response, file);
      // 在这里可以处理上传成功后的逻辑
    },
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt500K = file.size / 1024 < 500;

      if (!isJPG) {
        this.$message.error("只能上传jpg/png文件！");
      }
      if (!isLt500K) {
        this.$message.error("文件大小不能超过500KB！");
      }

      return isJPG && isLt500K;
    },
    async startRecording() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        this.mediaRecorder = new MediaRecorder(stream);
        this.audioChunks = [];
        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            this.audioChunks.push(event.data);
          }
        };

        this.mediaRecorder.onstop = () => {
          const audioBlob = new Blob(this.audioChunks, { type: "audio/wav" });
          this.audioUrl = URL.createObjectURL(audioBlob);
          console.log("录音完成，音频URL：", this.audioUrl);
        };

        this.mediaRecorder.start();
        this.isRecording = true;
      } catch (error) {
        console.error("获取麦克风权限失败或不支持录音功能：", error);
      }
    },
    stopRecording() {
      if (this.mediaRecorder && this.isRecording) {
        this.mediaRecorder.stop();
        this.isRecording = false;
        console.log("停止录音");
      }
    },
    playRecording() {
      if (this.audioUrl) {
        if (!this.audioPlayer) {
          this.audioPlayer = new Audio(this.audioUrl);
        }
        this.audioPlayer.play();
      }
    },
    genStr() {
      // 将'your-api-endpoint'替换为实际的API端点URL
      const apiUrl = "/Gen/test1";

      // 将'your-data'替换为要在请求体中发送的数据
      const postData = {
        genType: this.inputValue,
        userText: this.selectedBoxDiv,
      };

      axios
        .post(apiUrl, postData, {
          withCredentials: true, // 允许跨域携带cookie
          headers: {
            "Content-Type": "application/json", // 设置请求头为 JSON
            // 你可能还需要其他的请求头，比如 token 等，根据你的实际需求添加
          },
        })
        .then((response) => {
          // 处理成功的响应
          this.textFromBackend = response.data.result;
          console.log("响应:", response.data);
        })
        .catch((error) => {
          // 处理错误
          console.error("错误:", error);
        });
    },
  },
};
</script>
<style>
.about-box {
  flex: 1;
  height: 100%;
  width: 150%;
  background-color: #cdead3ff;
  text-align: center;
  line-height: 300%;
  font-size: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.about-box-target {
  flex: 1;
  height: 100%;
  width: 150%;
  background-color: #89cb27ff;
  text-align: center;
  line-height: 300%;
  font-size: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.button-container {
  width: 5%;
  text-align: center; /* 将按钮居中显示 */
  margin-top: 20px; /* 根据需要调整按钮容器的上边距 */
}
.center-row {
  margin-top: 1%;
  display: flex;
}
.left-row {
  width: 15%;
}
.right-row {
  width: 50%;
}
.input {
  display: flex;
  width: 50%;
  justify-content: space-between;
}
.upload {
  display: flex;
  margin-top: 2%;
}
.topbox {
  margin-top: 2%;
}
</style>
