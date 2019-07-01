<template>
  <div class="articleManagement">
    <div class="top">
      <el-form :inline="true" :model="fromObj">
        <el-form-item label="类型名称">
          <el-input v-model="fromObj.typeName" placeholder="类型名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
      <div class="right">
        <el-button type="primary">新增</el-button>
      </div>
    </div>
    <div class="content">
      <el-table
        :lazy="true"
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          type="selection"
          align="center"
          width="40">
        </el-table-column>
        <el-table-column
          prop="title"
          align="center"
          label="标题">
        </el-table-column>
        <el-table-column
          prop="content"
          align="center"
          label="内容">
        </el-table-column>
        <el-table-column
          prop="type"
          align="center"
          label="类型"
          width="150">
        </el-table-column>
          <el-table-column
          prop="browse"
          align="center"
          label="浏览量"
          width="100">
        </el-table-column>
        <el-table-column
          prop="love"
          align="center"
          label="点赞人数"
          width="100">
        </el-table-column>
        <el-table-column
          prop="time"
          align="center"
          label="时间"
          width="200">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="150">
          <template slot-scope="scope">
            <el-button @click="del(scope.row)" type="text">查看</el-button>
            <el-button @click="edit(scope.row)" type="text" class="edit">编辑</el-button>
            <el-button @click="del(scope.row)" type="text" class="del">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 5,
      fromObj: {
        typeName: ''
      },
      tableData: [{
        title: 'Python 深度学习脚手架 ModelZoo',
        content: '想必大家都或多或少听过 TensorFlow 的大名，这是 Google 开源的一个深度学习框架，里面的模型和 API 可以说基本是一应俱全，但 TensorFlow 其实有很多让人吐槽的地方，比如 TensorFlow 早期是只支持静态图的，你要调试和查看变量的值的话就得一个个',
        type: 'python',
        browse: 55,
        love: 45,
        time: '2013-10-14 18:21:23'
      }]
    }
  },
  methods: {
    edit (row) {
      console.log(row)
    },
    del (row) {
      console.log(row)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped lang="less">
  .articleManagement{
    padding: 30px;
    box-sizing: border-box;
    .top{
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .content{
      overflow: auto;
      margin-bottom: 50px;
    }
    .page{
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      height: 50px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 999;
    }
  }
</style>
