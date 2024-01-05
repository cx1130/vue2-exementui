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
              宋词
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
      <el-col :span="5" class="middle-row">
        <div>
          <el-input
            v-model="inputValue"
            placeholder="请输入内容"
            class="input"
          ></el-input>
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

          <loading ref="loading"></loading>
        </div>
        <el-divider></el-divider>
        <div class="topbox">
          <el-row :gutter="10">
            <el-col :span="35">
              <!-- 文字展示框 -->
              <el-input
                v-model="textFromBackend"
                :readonly="true"
                type="textarea"
                :rows="4"
              ></el-input>
            </el-col>
            <el-col :span="1">
              <el-button size="small" type="primary" @click="playRecording"
                >播放录音</el-button
              >
            </el-col>
            <el-col :span="35">
              <!-- 图片展示框 -->
              <el-image
                class="topbox"
                v-if="imageUrlFromBackend"
                :src="imageUrlFromBackend"
                style="width: 30%; height: 50%"
              ></el-image>
            </el-col>
          </el-row>
          <div class="button-container">
            <el-button type="primary" @click="goBack">返回上一页</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="5" class="right-row">
        <div @click="handleUploadClick" class="upload">
          <el-upload
            action="''"
            :show-file-list="false"
            :before-upload="beforeUpload"
          >
            <img
              v-if="!imageURLFromUpload"
              src="@/public/placeholder.png"
              alt="Placeholder"
              class="upload-placeholder"
            />
            <img
              v-else
              :src="imageURLFromUpload"
              alt="Uploaded Image"
              class="uploaded-image"
            />
            <div class="upload-text" v-if="!imageURLFromUpload">
              点击上传图片
            </div>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过2M
            </div>
          </el-upload>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
import Recorder from "js-audio-recorder";
import { MessageBox } from "element-ui";

export default {
  data() {
    return {
      //主体默认样式
      selectedBoxDiv: this.$route.params.id,
      //主题选中样式
      selectedBoxStyle: "box-target",
      //输入框中内容
      inputValue: "",
      //音频url
      audioUrl: null,
      //音频播放
      audioPlayer: null,
      //单选框
      isChecked: false,
      // 从后台返回的文字
      textFromBackend: "",
      //前台上传图片 URL
      imageURLFromUpload: "",
      // 从后台返回的图片 URL
      imageUrlFromBackend: "",
      //image
      image: null,
      //audioBlob
      audioBlob: null,
      //录音
      recorder: null,
    };
  },
  mounted() {
    // 确保 this.$refs.upload 初始化后再执行点击事件
    if (this.$refs.upload) {
      const inputElement =
        this.$refs.upload.$el.querySelector("input[type=file]");
      inputElement.addEventListener("click", this.handleUploadClick);
    }
  },
  created() {
    // 模拟从后台获取数据
    this.textFromBackend =
      "九月重阳菊未花\n" +
      "日边初报赤城霞\n" +
      "王孙自是多思情\n" +
      "旋制茱萸当酒家";
  },
  methods: {
    handleUploadClick() {
      // 触发 el-upload 的点击事件
      if (this.$refs.upload) {
        const inputElement =
          this.$refs.upload.$el.querySelector("input[type=file]");
        inputElement.click();
      }
    },
    toggleBoxStyles(divNumber) {
      //选中样式
      this.selectedBoxDiv = divNumber;
    },
    goBack() {
      this.$router.back();
    },
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("只能上传jpg/png文件！");
        return;
      }
      if (!isLt2M) {
        this.$message.error("文件大小不能超过2M！");
        return;
      }
      // 使用 $nextTick 来确保在 DOM 更新之后执行
      // 读取文件的二进制数据并存储在 image 中
      this.$nextTick(() => {
        this.imageURLFromUpload = URL.createObjectURL(file);
        const reader = new FileReader();
        reader.onload = () => {
          this.image = reader.result;
        };
        reader.readAsDataURL(file);
      });
      return isJPG && isLt2M;
    },
    startRecording() {
      this.recorder = new Recorder({
        sampleBits: 16,
        sampleRate: 16000,
        numChannels: 1,
        compiling: false,
      });
      this.recorder.start();
    },
    stopRecording() {
      this.recorder.stop();
      this.audioBlob = this.recorder.getWAVBlob();
    },
    playRecording() {
      this.fetchAudio();
    },
    genStr() {
      // 在请求数据之前显示 Loading 遮罩
      this.$refs.loading.showLoading();

      // 生成接口URL
      const apiUrl = "/Gen/multiGen";

      let flag = 0;

      if (this.image === null && this.audioBlob === null) {
        flag = 1;
      } else if (this.image !== null && this.audioBlob === null) {
        flag = 2;
      } else if (this.image === null && this.audioBlob !== null) {
        flag = 3;
      } else {
        flag = 4;
      }

      // 请求参数
      const postData = new FormData();
      postData.append("genType", this.selectedBoxDiv);
      postData.append("userText", this.inputValue);
      postData.append("image", this.image);
      postData.append("audio", this.audioBlob, "recording.wav");
      postData.append("flag", flag);
      postData.append("check", this.isChecked);

      axios
        .post(apiUrl, postData, {
          withCredentials: true, // 允许跨域携带cookie
          headers: {
            "Content-Type": "multipart/form-data", // 设置请求头为 JSON
          },
          timeout: 60000, //超时时间60秒
        })
        .then((response) => {
          console.log("-----" + postData);
          // 请求完成后隐藏 Loading 遮罩
          this.$refs.loading.hideLoading();
          // 处理响应文本
          this.textFromBackend = response.data.result;
          //处理相应图片
          this.imageUrlFromBackend =
            "data:image/png;base64," + response.data.image;
          console.log("响应:", response.data);
        })
        .catch((error) => {
          // 处理错误
          console.error("error get result:", error);
          this.$refs.loading.hideLoading();
          MessageBox.alert("请求失败:" + error.message);
        });
    },
    fetchAudio() {
      //文本生成语音URL
      const apiUrl = "/Gen/textForAudio";
      // 请求参数
      const postData = {
        //文本
        text: this.textFromBackend,
      };
      //发送请求到后端获取音频数据（假设后端返回的是 base64 编码的字符串）
      axios
        .post(apiUrl, postData, {
          withCredentials: true, // 允许跨域携带cookie
          headers: {
            "Content-Type": "application/json", // 设置请求头为 JSON
          },
          timeout: 60000, //超时时间60秒
        })
        .then((response) => {
          //处理音频

          this.audioUrl = "data:audio/mpeg;base64," + response.data.result;
          if (this.audioUrl) {
            if (!this.audioPlayer) {
              this.audioPlayer = new Audio(this.audioUrl);
            }
            this.audioPlayer.play();
          }
        })
        .catch((error) => {
          console.error("Error fetching audio:", error);
          this.$refs.loading.hideLoading();
          MessageBox.alert("请求失败:" + error.message);
        });
    },
  },
};
</script>
<style>
.about-box {
  width: 200%;
  background-color: #cdead3ff;
  text-align: center;
  line-height: 300%;
  font-size: 100%;
  margin-bottom: 10%;
}
.about-box-target {
  width: 200%;
  background-color: #89cb27ff;
  text-align: center;
  line-height: 300%;
  font-size: 100%;
  margin-bottom: 10%;
}
.button-container {
  width: 5%;
  text-align: center; /* 将按钮居中显示 */
  margin-top: 5%; /* 根据需要调整按钮容器的上边距 */
}
.center-row {
  margin-top: 2%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.left-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
}
.middle-row {
  justify-content: center;
  width: 30%;
}
.right-row {
  display: flex;
  align-items: flex-start;
  width: 10%;
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
.upload-placeholder {
  width: 200px; /* 上传区域的宽度 */
  height: 150px; /* 上传区域的高度 */
  border: 2px dashed #ccc;
  border-radius: 5px;
  cursor: pointer;
}
.uploaded-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持图片的宽高比例并裁剪 */
  border-radius: 5px;
}
.upload-text {
  text-align: center;
  margin-top: 10px;
  color: #999;
}
</style>
