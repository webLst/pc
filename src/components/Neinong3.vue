<template>
<div id="jk">
    <div id="gg">
     <div id="ho">

     </div>
     <div id="guan">
         系统管理
     </div>
    </div>
    <div id="gb">
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="消息标题"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="发布时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="发布人员"
      show-overflow-tooltip>
    </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
<style scoped>
#gb{
       border: 1px solid beige;
    width: 1150px;
    float: left;
    margin-left: 116px;
    margin-top: 6px;
}
#gg{
   height: 54px;
    background: #f3f3f3;
    width: 1190px;
    float: left;
    margin-left:99px;
    margin-top: 52px;
    border-bottom: 1px solid #e4e4e4;
}
#ho{
    width: 8px;
    height: 25px;
    background: #1abc9c;
    float: left;
    margin-left: 30px;
    margin-top: 20px;
}
#guan{
        float: left;
    margin-left: 10px;
    margin-top: 22px;
}
</style>