<template>
<div id="gg">
            <div id="fh">
     <div id="ho">

     </div>
     <div id="guan">
         总览统计
     </div>
            </div>
           <div id="ff">
        <div id="shu">数据总数</div>
        <div id="huang">
<img src="../assets/u281.png" >
<div id="dao">
    导出数据
</div>
<div id="zou">
    <ul>
        <li>昨天</li>
        <li>最近7天</li>
        <li>最近30天</li>
    </ul>
</div>
<div id="ag">
      <el-date-picker
      v-model="value2"
      type="monthrange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始月份"
      end-placeholder="结束月份"
      :picker-options="pickerOptions">
    </el-date-picker>
</div>
        </div>
    </div>
            </div>
</template>
<script>
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: '今年至今',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近六个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
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
#ap{
  background: #f3f3f3;
    height: 40px;
    width: 1154px;
    float: left;
    margin-left: -102px;
    margin-top: 63px;
}
#ff{
      border: 1px solid #e4e4e4;
    height: 45px;
    width: 1161px;
    float: left;
    margin-left: 10px;
    margin-top: 20px;
    background: #f3f3f3;
}
#shu{
        float: left;
    margin-left: 35px;
    margin-top: 12px;
}
#huang{
       float: left;
    margin-left: 6px;
    margin-top: 15px;
}
#dao{
       border: 1px solid #e4e4e4;
    padding: 2px 5px 2px 5px;
    margin-left: 300px;
    margin-top: -29px;
    background: white;
    width: 72px;
}
#zou li{
     list-style: none;
    float: left;
    margin-left: 0px;
    border: 1px solid #e4e4e4;
    width: 68px;
    padding: 2px 25px 2px 25px;
}
#zou{
   float: left;
    margin-left: 350px;
    margin-top: -27px;
}
#ag{
       margin-left: 754px;
    margin-top: -30px;
}
</style>