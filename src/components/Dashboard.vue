<template>
    <div class="content">
        <sidebar></sidebar>
    </div>
</template>

<script>
import Sidebar from './dashboard/Sidebar.vue'
export default {
    components:{
        'sidebar': Sidebar
    }
}
</script>

<style scoped>
.content{
    background-color: white !important;
}
</style>