<template>
    <div>
        <div id="gg">
     <div id="ho">

     </div>
     <div id="guan">
         登录日志
     </div>
    </div>
   <div>
    <div class="tou">
      <a href="#" class="el-icon-refresh">刷新</a>
    </div>
    <div class="tou4">
      <div class="tou4-tou">
        <p>列表</p>
        <el-button type="text" @click="open" class="qingchu">清除近30天</el-button>
      </div>
      <el-table :data="data" border style="width: 100%" align="center">
        <el-table-column prop="time" label="日期" width="333" align="center"></el-table-column>
        <el-table-column prop="phone" label="IP" width="333" align="center"></el-table-column>
        <el-table-column prop="name" label="地区" align="center"></el-table-column>
      </el-table>
      <div class="block">
          <!-- <span class="demonstration">直接前往</span> -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000"
          ></el-pagination>
        </div>
    </div>
  </div>
  </div>
</template>
<script>
 export default {
  data() {
    app:''
    return {
      data:''
    };
  },
  created() {
     this.axios.get('http://yapi.dapengjiaoyu.com/mock/380/order').then((res)=>{
      var acc=[];
      for(var i=1;i<12;i++){
        acc.push(res.data.data[i]);
      }
      this.data=acc;
    });
  },
  methods: {
    open() {
      this.$confirm("此操作将永久清除近30天数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "清除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消清除"
          });
        });
    }
  }
};
</script>
<style scoped>
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

.block{
    float:right;
    padding: 5px 8px;
}
.qingchu {
    
  border: 1px solid rgb(184, 180, 180);
  padding: 5px 8px;
  float: right;
  color: rgb(78, 78, 78);
  margin: -22px 20px 0 0;
}
.tou a {
  font-size: 14px;
  padding: 5px 8px;
  text-decoration: none;
  float: right;
  color: rgb(78, 78, 78);
  margin: -25px 20px 0 0;
  border: 1px solid rgb(184, 180, 180);
}
.tou {
  width: 1085px;
  height: 30px;
  background-color: rgb(234, 237, 241);
  margin-left: 176px;
  border-left: 2px solid rgb(231, 224, 224);
  padding-top: 13px;
  /* margin-top: 40px; */
  border-bottom: 1px solid rgb(184, 180, 180);
}
.tou p {
  /* line-height: 28px; */
  margin-left: 20px;
  padding-left: 5px;
  border-left: 4px solid rgb(88, 173, 3);
  color: rgb(158, 158, 158);
}
.tou4 {
  width: 1070px;
  /* height: 370px; */
  border: 1px solid rgb(184, 180, 180);
  margin: 10px 0 0 185px;
}
.tou4-tou p {
  margin-left: 10px;
  padding-top: 7px;
}
.tou4-tou {
  width: 1070px;
  height: 35px;
  background-color: rgb(234, 237, 241);
  border-bottom: 1px solid rgb(184, 180, 180);
  margin-bottom: 10px;
}
</style>