<template>
<div>
    <div id="gg">
     <div id="ho">

     </div>
     <div id="guan">
         系统管理
     </div>
    </div>
    <div id="ff">
        <div id="shu">数据总数</div>
        <div id="huang">
<img src="../assets/u281.png" >
        </div>
    </div>
    <div id="kj">
        <div id="pl">
            <div class="po">
                <div class="tu">
                    <img src="../assets/shangr.png" class="img">
                </div>
                <div class="bv">
                    <p><span style="color:#999999">正在咨询人数</span><br>200</p>
                </div>
                <p class="jj"><span style="color:#999999">当前在线客服人数</span>&nbsp;&nbsp;200</p>
            </div>
        </div>
                <div id="pl">
            <div class="po">
                <div class="tu">
                    <img src="../assets/danr.png" class="img">
                </div>
                <div class="bv">
                    <p><span style="color:#999999">正在排队人数</span><br>5000</p>
                </div>
                <p class="jj"><span style="color:#999999">人均排队时长&nbsp;&nbsp;--<br>今日排队总数：0</span></p>
            </div>
        </div>
         <div id="pl">
            <div class="po">
                <div class="tu">
                    <img src="../assets/wous.png" class="img">
                </div>
                <div class="bv">
                    <p><span style="color:#999999">今日会话量</span><br>5000</p>
                </div>
                <p class="jj"><span style="color:#999999">今日平均会话时长&nbsp;&nbsp;--</span></p>
            </div>
        </div>
         <div id="pl">
            <div class="po">
                <div class="tu">
                    <img src="../assets/jie.png" class="img">
                </div>
                <div class="bv">
                    <p><span style="color:#999999">今日未接入会话量</span><br>1000</p>
                </div>
                <p class="jj"><span style="color:#999999">接收率&nbsp;&nbsp;&nbsp;&nbsp;0.00%</span></p>
            </div>
        </div>
         <div id="pl">
            <div class="po">
                <div class="tu">
                    <img src="../assets/xi.png" class="img">
                </div>
                <div class="bv">
                    <p><span style="color:#999999">今日相对满意度</span><br>0.00%</p>
                </div>
                 <p class="jj"><span style="color:#999999">今日平均会话时长&nbsp;&nbsp;--</span></p>
            </div>
        </div>
        <img src="../assets/xian.png" id="fg">
    </div>
    <div id="kl">
     <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="客服"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="在线状态"
      width="180">
    </el-table-column>
    <el-table-column
      prop="dd"
      label="当前接待数量">
    </el-table-column>
     <el-table-column
      prop="dd1"
      label="累计会话量">
    </el-table-column>
    <el-table-column
      prop="dd2"
      label="累计消息量">
    </el-table-column>
    <el-table-column
      prop="dd3"
      label="相对满意量">
    </el-table-column>
    <el-table-column
      prop="dd4"
      label="累计在线量">
    </el-table-column>
    <el-table-column
      prop="dd5"
      label="累计休息时长">
    </el-table-column>
  </el-table>
  </div>
    </div>
</template>
<script>
 export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 4) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
          date: '符号',
          name: '在线(1小时18分)',
          dd: '0',
          dd1:'0',
          dd2:'0',
          dd3:'10%',
          dd4:'1小时18分',
          dd5:'1小时18分'
        }, {
          date: '符号',
          name: '在线(1小时18分)',
          dd: '0',
          dd1:'0',
          dd2:'0',
          dd3:'10%',
          dd4:'1小时18分',
          dd5:'1小时18分'
        }, {
          date: '符号',
          name: '在线(1小时18分)',
          dd: '0',
          dd1:'0',
          dd2:'0',
          dd3:'10%',
          dd4:'1小时18分',
          dd5:'1小时18分'
        }, {
         date: '符号',
          name: '在线(1小时18分)',
          dd: '0',
          dd1:'0',
          dd2:'0',
          dd3:'10%',
          dd4:'1小时18分',
          dd5:'1小时18分'
        },
         {
          date: '符号',
          name: '在线(1小时18分)',
          dd: '0',
          dd1:'0',
          dd2:'0',
          dd3:'10%',
          dd4:'1小时18分',
          dd5:'1小时18分'
        }]
      }
    }
  }
</script>
<style scoped>
#gg{
   height: 54px;
    background: #f3f3f3;
    width: 1190px;
    float: left;
    margin-left: 99px;
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
#ff{
       border: 1px solid #e4e4e4;
    height: 45px;
    width: 1161px;
    float: left;
    margin-left: 110px;
    margin-top: 10px;
    background: #f3f3f3
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
#kj{
   border: 1px solid #e4e4e4;
     height: 150px;
    width: 1161px;
     float: left;
     margin-left: 110px;
}
#pl{
 border: 1px solid #e4e4e4;
    height: 120px;
    width: 200px;
    float: left;
    margin-left: 20px;
    margin-top: 13px;
}
.po{
    height: 50%;
     border-bottom: 1px solid #e4e4e4;

}
.img{
    width: 60px;
}
.bv{
     float: left;
    margin-top: -54px;
    margin-left: 67px;
}
.jj{
      float: left;
    margin-left: 10px;
    margin-top: 13px;
}
#fg{
    width: 100%;
    float: left;
    margin-top: 20px;
}
 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
 #kl{
       width: 1122px;
    float: left;
    margin-left: 135px;
    margin-top: 357px;
      border: 1px solid #e4e4e4;
 }
</style>