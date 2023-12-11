<template>

  <el-main>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="box">栅格1</div>
      </el-col>
      <el-col :span="6">
        <div class="box">栅格2</div>
      </el-col>
      <el-col :span="6">
        <div class="box">栅格3</div>
      </el-col>
      <el-col :span="6">
        <div class="box">栅格4</div>
      </el-col>
    </el-row>

    <div></div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="box">栅格5</div>
      </el-col>
      <el-col :span="6">
        <div class="box">栅格6</div>
      </el-col>
      <el-col :span="6">
        <div class="box">栅格7</div>
      </el-col>
      <el-col :span="6">
        <div class="box">栅格8</div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <div class="box">栅格9</div>
      </el-col>
      <el-col :span="6">
        <div class="box">栅格10</div>
      </el-col>
      <el-col :span="6">
        <div class="box">栅格11</div>
      </el-col>
      <el-col :span="6">
        <div class="box">栅格12</div>
      </el-col>
    </el-row>
  </el-main>
</template>

<script></script>

<style>
.box {
  height: 100px;
  background-color: #dc0a0aff;
  text-align: center;
  line-height: 100px;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
