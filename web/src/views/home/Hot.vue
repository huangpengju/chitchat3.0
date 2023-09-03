<template>
    <el-row >
        <el-col class="flex space-x-4" v-for="i in 3" :key="i"  :span="7" style="border: 1px solid red;">111
                <!-- <el-space wrap >
                    <el-card  class="box-card" style="width:300px" >
                    <template #header>
                        <div class="card-header">
                        <span>Card name</span>
                        <el-button class="button" text>Operation button</el-button>
                        </div>
                    </template>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{ 'List item ' + o }}
                    </div>
                    </el-card>
                </el-space> -->

        </el-col>
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