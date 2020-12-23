<template>
    <div id="app">
        <cf></cf>
        <chang></chang>
        <tou></tou>
    </div>
</template>
<script>
import cf from '../components/Nienong2.vue'
import chang from '../components/Che.vue'
import tou from '../components/Toubu2.vue'
export default {
    components:{
        cf,
        chang,
        tou
    }
}
</script>
<style scoped>
#chang{
    margin-top: -55px;
}
</style>