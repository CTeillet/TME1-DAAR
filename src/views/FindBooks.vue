<template lang="html">
  <div class="languages">
    <div class="title">
      Find Books
    </div>



    <div class='grid'>
      <div class='ligne'>
        <input v-model='expression' type='search'>
      </div>
      <div class='language'>
        <router-link :to="'/search/'+ 'search' + '/' + expression" >Recherche</router-link>
      </div>
      <div class='language'>
        <router-link :to="'/search/'+ 'advanced' + '/' + expression" >Recherche avancée</router-link>
      </div>
      <div class='language'>
        <router-link :to="'/search/'+ 'id' + '/' + expression" >Recherche par id</router-link>
      </div>
      <div class='language'>
        <router-link :to="'/search/'+ 'title' + '/' + expression" >Recherche par titre</router-link>
      </div>
    </div>

    <br>
    <br>
    <br>

    <div class="grid">
      <div class="language">
        <router-link to="/lang/fr">Livres en Francais</router-link>
      </div>
      <div class="language">
        <router-link to="/lang/en">English Books</router-link>
      </div>
      <div class="language">
        <router-link to="/otherLanguages">Other Languages</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('fetchLanguages')
  },
  data() {
    return {
      expression: '',
    }
  },


}
</script>




<style lang="css" scoped>
.title {
  font-weight: 700;
  line-height: 1.3em;
  font-size: 2.3em;
  padding-bottom: 2rem;
  text-align: center;
}
.ligne{
  grid-column-start: 0;
  grid-column-end: 3;
  width:100%;
  height:100%;
  box-sizing: border-box;
}
.grid {
  display: Grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
}
.language {
  text-align: center;
  background: #fefefe;
  padding: 3rem;
}

a {
  background: #fefefe;
  border-radius: 12px;
  padding: 2rem;
  line-height: 1em;
  font-size: 1.2em;
  text-decoration: none;
  color: black;
}

a:hover {
  background: #999;
}

a:active {
  background: #333;
}
</style>
