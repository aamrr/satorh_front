<template>
    <div>
        <h3>Dashboard Collaborateurs</h3>
        <div class="cards-container">
            <div class="card text-white bg-info mb-3 mx-auto" style="width: 14rem;">
                <div class="card-body">
                    <h4 class="card-title">Total: 175</h4>
                    <span><i class="fas fa-male"></i> 100  <i class="fas fa-female"></i> 75</span>
                </div>
            </div>

            <div class="card text-white bg-info mb-3 mx-auto" style="width: 14rem;">
                <div class="card-header">Designers</div>
                <div class="card-body">
                    <span><i class="fas fa-paint-brush"></i>    5</span>
                </div>
            </div>

            <div class="card text-white bg-info mb-3 mx-auto" style="width: 14rem;">
                <div class="card-header">Administratuers systèmes</div>
                <div class="card-body">
                    <span><i class="fab fa-connectdevelop"></i>   10</span>
                </div>
            </div>

            <div class="card text-white bg-info mb-3 mx-auto" style="width: 14rem; ">
                <div class="card-header">Chefs d'équipes</div>
                <div class="card-body">
                   <span><i class="fas fa-users-cog"></i>   12</span>
                </div>
            </div>

            <div class="card text-white bg-info mb-3 mx-auto" style="width: 14rem;">
                <div class="card-header">Commerciaux</div>
                <div class="card-body">
                    <span><i class="fas fa-comments-dollar"></i>   3</span>
                </div>
            </div>

        </div>

        <h3>Employés récents</h3>
        <grid :cols="cols" :rows="rows" :sort="true"></grid>

    </div>
</template>

<script>
import Grid from 'gridjs-vue'
export default {
    components:{
        Grid
    },
     data() {
      return {
        cols: ['#', 'Nom', 'Département', 'Date emploi'],
        rows: [
          ['Ford', 'Fusion', '2011', 'Silver'],
          ['Chevrolet', 'Cruz', '2018', 'White']
        ]
      }
    }
    
}
</script>

<style scoped>
    h3{
        margin: 2rem auto;
    }

    .card{
        height: 7.375rem;
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