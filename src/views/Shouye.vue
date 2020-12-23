<template>
    <div id="app">
      <div>
          <tou></tou>
          <chang></chang>
          <div>
    <router-view></router-view>
          </div>
          
      </div>
    </div>
</template> 
<script>
import tou from '../components/Toubu.vue'
import chang from '../components/Che.vue'
import as from '../components/Neinong.vue'
export default {
   components:{
       tou,
       chang,
       as
   }
}
</script>