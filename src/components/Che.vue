<template>
    <div id="chang">
        <div id="nan">
            <ul>
                <li>首页
                    <ul id="shang">
                        <li>系统首页</li>
                        <li>个人资料设置</li>
                        <li>信息中心</li>
                        <li>登录设置</li>
                    </ul>
                </li>
                <li>统计
                    <ul id="shang2">
                        <li>统计分析</li>
                        <li>总览统计</li>
                        <li>客服统计</li>
                        <li>留言统计</li>
                        <li>机器人统计</li>
                    </ul>
                </li>
                <li>客服</li>
                <li>历史</li>
                <li>客户</li>
                <li>公告</li>
                <li>知识</li>
                <li>对话</li>
                <li>权限</li>
                <li>设置</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
#chang{
    height:915px;
    width: 60px;
    background: #464c5b;
    float: left;
    margin-top: 52px;
}
#nan li{
    list-style: none;
    margin-top: 20px;
    color: #cccccc;
    cursor: pointer;
}
#nan{
    margin-left: -28px;
}
#shang{
    position: absolute;
       left: 60px;
    top: 52px;
    text-emphasis: left;
    background: #eaedf1;
        width: 80px;
    padding: 2px 2px 2px 15px;
     height: 911px;
     overflow:hidden;
     display: none;
}
#shang li{
       color: #7b6693;
    font-size: 10px;
   
    border-bottom: 1px solid #e4e4e4;
    width: 95px;
    margin-left: -15px;
    height: 25px;
    margin-top: 0px;
    padding:11px 0px 0px 15px;
}
#shang li:nth-of-type(1){
    height: 40px;
    line-height: 40px;
}
#shang{
    border-right: 1px solid black;
}
#shang2{
    position: absolute;
       left: 60px;
    top: 52px;
    text-emphasis: left;
    background: #eaedf1;
        width: 80px;
    padding: 2px 2px 2px 15px;
     height: 911px;
     overflow:hidden;
}
#shang2 li{
       color: #7b6693;
    font-size: 10px;
   
    border-bottom: 1px solid #e4e4e4;
    width: 95px;
    margin-left: -15px;
    height: 25px;
    margin-top: 0px;
    padding:11px 0px 0px 15px;
}
#shang2 li:nth-of-type(1){
    height: 40px;
    line-height: 40px;
}
#shang2{
    border-right: 1px solid black;
}
</style>