<template>
  <div class="home">
    <img src="@/assets/book.png" alt="" />
    <div class="title">Gutenberg project</div>

    <div class="tgp">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.gutenberg.org/"
        >The Gutenberg project</a
      >
    </div>

    <div class="links">
      <div class="link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www-apr.lip6.fr/~buixuan/daar2019"
          >UE DAAR</a
        >
      </div>
      <div class="link">
        <router-link to="/find">Find books</router-link>
      </div>
    </div>
  </div>
</template>

<style media="screen" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-weight: 700;
  line-height: 1.3em;
  font-size: 2.3em;
  padding-bottom: 4rem;
  text-align: center;
}

.tgp {
  text-align: center;
  background: #fefefe;
  padding: 5rem 13rem 5rem 13rem;
  margin-block-end: 3rem;
}

.links {
  display: Grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
}

.link {
  text-align: center;
  background: #fefefe;
  padding: 3rem;
}

.link a {
  padding: 3rem;
  text-decoration: none;
  color: black;
}

.link:hover {
  background: #999;
}

.link:active {
  background: #333;
}

@media only screen and (max-width: 800px) {
  .links {
    grid-template-columns: 1fr;
  }
  img {
    width: 50%;
  }
}
</style>
