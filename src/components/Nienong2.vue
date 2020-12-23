<template>
    <div>
        <div id="fh">
     <div id="ho">

     </div>
     <div id="guan">
         系统管理
     </div>
        </div>
        <div id="gg">
                <p>账号：&nbsp;&nbsp;&nbsp;<input type="text" disabled="disabled" autocomplete="off" placeholder="请输入内容" class="el-input__inner"></p>
                <p>手机号：&nbsp;&nbsp;&nbsp;<input type="text" readonly="readonly" autocomplete="off" placeholder="请输入内容" class="el-input__inner"></p>
                <p>邮箱：&nbsp;&nbsp;&nbsp;<input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner"></p>
                <p>昵称：&nbsp;&nbsp;&nbsp;<input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner"></p>
                <p>旧密码：&nbsp;&nbsp;&nbsp;<input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner"></p>
                <p>新密码：<input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner"></p>
                <p>确认密码：<input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner"></p>
                <button>提交</button>
    </div>
    </div>
</template>
<style scoped>
#gg p{
    list-style: none;
    width: 200px;
   
}
#gg{
    position: absolute;
    left: 600px;
    top: 104px;
}
button{
    background: #85ce61;
    border: 1px solid #85ce61;
    color: white;
    width: 100px;
    height: 30px;
}
#fh{
   height: 54px;
    background: #f3f3f3;
    width: 1189px;
    float: left;
    margin-left: 160px;
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