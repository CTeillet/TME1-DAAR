<template lang="html">
  <div class="languages">
    <div class="title">
      Find Books
    </div>

    <input type="search">
    <button>Search</button>

    <div class="grid">
      <div class="language">
        <router-link to="/lang/French">Livres en Francais</router-link>
      </div>
      <div class="language">
        <router-link to="/lang/German">Deutshe Bucher</router-link>
      </div>
      <div class="language">
        <router-link to="/lang/English">English Books</router-link>
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
