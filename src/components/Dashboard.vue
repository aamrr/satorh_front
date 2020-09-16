<template>
    <div>
        <sidebar @sideBarActive="sidebarActive = !sidebarActive"></sidebar>
        <div v-bind:style= "[sidebarActive ? {'margin-left': '270px'} : {'margin-left': '20px'}]" class="router-container">
            <router-view class="routerr"></router-view>
        </div>
        
    </div>
</template>

<script>

import Sidebar from './dashboard/Sidebar.vue'
export default {
    components:{
        'sidebar': Sidebar
        
    },
    data(){
        return{
            sidebarActive: false
        }
    }
}
</script>

<style scoped>
    .router-container{
    position: relative;
    /* margin-left: 20px; */
    margin-right: 20px;
    margin-top: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: auto;
    background: white;
    border-radius: 10px;
    box-shadow:
    0 0px 20px 4px rgba(0, 0, 0, 0.034), 
    0 0px 20px 0px rgba(0, 0, 0, 0.048), 
    0 0px 10px rgba(0, 0, 0, 0.06), 
    0 0px 17.9px rgba(0, 0, 0, 0.072), 
    0 0px 33.4px rgba(0, 0, 0, 0.086), 
    0 0px 80px rgba(0, 0, 0, 0.12);
    transition: margin .4s;    
    }

   

    .routerr{
        margin: 10px !important;
            display: flex;
        flex-direction: column;
    }
 

</style>