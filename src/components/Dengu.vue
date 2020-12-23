<template>
    <div id="pp"> 
        <div id="fg">
            <img src="../assets/u25.png" id="df" >
            <h2>WEB在线客服管理系统</h2>
            <input type="text" placeholder="请输入用户名称" id="as">
             <input type="text" placeholder="请输入登录密码" id="ab">
             <button @click="dian">登录</button>
        </div>
    </div>
</template>
<script>
export default {
   methods: {
       dian:function(){
           if(as.value!="lst"){
               alert("账号错误！")
               return;
           }else if(ab.value!="123"){
               alert("密码错误!")
           }else{
                alert("登录成功!")
                parent.location.href="../views/Shouye.vue"
           }
       }
   },
}
</script>
<style scoped>
#pp{
    background-image: url("../assets/timg.jpg");
    width: 100%;
    height: 641px;
    background-size: 100%;
}
#fg{
       width: 350px;
    height: 450px;
    background: rgba(225, 225, 225, 0.4);
    float: left;
    margin-top: 50px;
    margin-left: 532px;
}
#df{
      
    float: left;
    margin-left: 150px;
    margin-top: 40px;
}
#as{
   float: left;
    margin-left: 47px;
    margin-top: 20px;
    height: 35px;
    width: 250px;
}
#ab{
   float: left;
    margin-left: 47px;
    margin-top: 20px;
    height: 35px;
    width: 250px;
}
h2{
      float: left;
    margin-left: 52px;
    margin-top: 20px;
    color: black;
}
button{
       height: 40px;
    width: 254px;
    float: left;
    margin-left: 47px;
    margin-top: 30px;
    background: #30c2a5;
    border: 1px solid #30c2a5;
    color:white; 
    cursor: pointer;
    border-radius: 2px;
}
input{
    border-radius: 5px;
    border: 1px solid white
}
</style>