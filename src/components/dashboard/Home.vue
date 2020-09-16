<template>
    <div>
        <h3>Dashboard Collaborateurs</h3>
        <div class="cards-container">
            <div class="card text-white bg-info mb-3 mx-auto" style="width: 14rem;">
                <div class="card-body">
                    <h4 class="card-title">Total: {{ male+female }}</h4>
                    <span><i class="fas fa-male"></i> {{ male }}  <i class="fas fa-female"></i> {{ female }}</span>
                </div>
            </div>

            <div class="card text-white bg-info mb-3 mx-auto" style="width: 14rem;">
                <div class="card-header">Designers</div>
                <div class="card-body">
                    <span><i class="fas fa-paint-brush"></i>    {{ designers }}</span>
                </div>
            </div>

            <div class="card text-white bg-info mb-3 mx-auto" style="width: 14rem;">
                <div class="card-header">Administratuers systèmes</div>
                <div class="card-body">
                    <span><i class="fab fa-connectdevelop"></i>   {{ sysad }}</span>
                </div>
            </div>

            <div class="card text-white bg-info mb-3 mx-auto" style="width: 14rem; ">
                <div class="card-header">Chefs d'équipes</div>
                <div class="card-body">
                   <span><i class="fas fa-users-cog"></i>   {{ chefs }}</span>
                </div>
            </div>

            <div class="card text-white bg-info mb-3 mx-auto" style="width: 14rem;">
                <div class="card-header">Commerciaux</div>
                <div class="card-body">
                    <span><i class="fas fa-comments-dollar"></i>   {{ comm }}</span>
                </div>
            </div>

        </div>

        <h3>Employés récents</h3>
        <grid :cols="cols" :rows="rows" :sort="true"></grid>

    </div>
</template>

<script>
import Grid from 'gridjs-vue'
import axios from 'axios'
export default {
    components:{
        Grid
    },
     data() {
      return {
        male: 0,
        female: 0,
        designers: 0,
        sysad: 0,
        chefs: 0,
        comm: 0,
        cols: ['#', 'Nom', 'Département', 'Date emploi'],
        rows: []
      }
    },
    methods:{
        getCollaborators(){
            axios.get('/collaborators')
                .then(Response => this.showStats(Response.data))
                .catch(error => console.log(error));
            console.log('satori');
        },
        showStats(coll){
            for (var i=0 ; i<coll.length,i<4;i++){
                let row =[]
                row.push(coll[i].id)
                row.push(coll[i].name)
                row.push(coll[i].department)
                switch (coll[i].department) {
                    case 'designer': 
                        this.designers ++;
                        break;
                    case 'administrateur systeme': 
                        this.sysad ++;
                        break;
                    case 'commerciale': 
                        this.comm ++;
                        break;
                    case 'chef equipe': 
                        this.chefs ++;
                        break;
                }
                switch (coll[i].sex) {
                     case 'male': 
                        this.male ++;
                        break;
                    case 'female': 
                        this.female ++;
                        break;
                }
                row.push(coll[i].created_at.slice(0, coll[i].created_at.indexOf('T')).split("-").reverse().join("/"))
                this.rows.push(row);
            }

           
            
        }
    },
    created(){
        this.getCollaborators()
    }
    
    
}
</script>

<style scoped>
    h3{
        margin: 2rem auto;
    }

    .card{
        height: 8.375rem;
        width: 14rem;
    }

    .card-body{
        text-align: center;
    }

    .card-body span{
        font-size: 30px;
        color: white;

    }

    .cards-container{
        display:grid;
        grid-template-columns: repeat(auto-fit, 16rem);
        justify-content: center;
    }
</style>