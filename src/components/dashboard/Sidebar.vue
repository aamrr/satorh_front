<template>
    <div>
        <div>
            <b-navbar style="box-shadow: 0 4px 2px -2px gray;" toggleable="lg" type="dark" class="px-2" variant="dark">
                <button @click="activateSidebar" class="side-toggle-button">☰</button>
                <b-navbar-brand href="#"><img width="50" height="50" src="@/assets/logo-satori.png"></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    

                    <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <transition name="slide" appear>
            <div v-if="isActive" id="sidebar-variant" class="custom-side">
                <ul>
                    <li>
                        <a @click="collabActive = !collabActive">Collaborateurs
                        <span class="fas fa-caret-right"></span></a>
                        <transition name="expand" appear="">
                            <ul v-if="collabActive"> 
                                <li>Dashboard</li>
                                <li>Collaborateurs</li>
                                <li>Archvie</li>
                            </ul>
                        </transition>
                    </li>
                    <li>
                        <a>Recrutement
                        <span class="fas fa-caret-right"></span></a>
                    </li>
                    <li>
                        <a>Formations
                        <span class="fas fa-caret-right"></span></a>
                    </li>
                    <li>
                        <a>Congés
                        <span class="fas fa-caret-right"></span></a>
                    </li>
                </ul>
            </div>  
        </transition>
        
            
        
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data(){
        return{
            isActive: false,
            collabActive: false
        }
    },
    methods:{
        activateSidebar(){
            this.isActive = !this.isActive;
            this.$emit('sideBarActive');
        }
    }
    
}


</script>

<style scoped>

template{
    overflow: hidden;
}
 
 #sidebar-variant{
     position: fixed;
     width: 250px;
     height: 100%;
     background: #737373;;
 }

 #sidebar-variant>ul {
     padding-left: 0;
 }

 #sidebar-variant>ul>li{
     color: white;
     list-style: none;
     
     border-bottom: 1px solid rgb(230, 214, 214);
 }

#sidebar-variant ul ul{
    display: block;
}

 #sidebar-variant>ul>li>ul>li{
     color: white;
     list-style: none;
     padding: 15px 10px;
 }

 #sidebar-variant>ul>li>a{
     display: block;
     position: relative;
     width: 100%;
     padding: 15px 10px;
 }

 #sidebar-variant>ul>li>a>span{
     position: absolute;
     top: 50%;
     right: 20px;
     font-size: 22px;
     transform: translateY(-50%);
     color: white;
     transition: transform .4s;
 }

 #sidebar-variant ul li a:hover span{
     transform: translateY(-50%) rotate(90deg);

 }

 #sidebar-variant>ul>li>a:hover, #sidebar-variant>ul>li>ul>li:hover{
     color: #fce525;
     background: #a8a8a0;
 }

.side-toggle-button{
    font-size: 20px;
    border: 1.5px solid transparent;
    border-radius: 6px;
    background: #343a40;
    color: #fce525;
    opacity: 30;
    margin-right: 2rem;
}

.side-toggle-button:hover{
    border: 1.5px solid #fce525;
}

.slide-enter-active, .slide-leave-active {
  /* transition: opacity .5s; */
  transition: transform .5s;
}

.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-250px);
}

.expand-enter-active, .expand-leave-active {
  /* transition: opacity .5s; */
  transition: transform .5s;
}

.expand-enter, .expand-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-250px);
}






</style>
