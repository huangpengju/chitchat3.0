<template>
    <el-row>
        <el-col :span="24" style="border: 1px solid red;">1</el-col>
    </el-row>
  </template>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>