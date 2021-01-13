<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid ">
        <a class="navbar-brand col">My test task</a>
        <form class="d-flex justify-content-center col-10">
          <input
            class="form-control me-2"
            type="search"
            id="mySearch"
            placeholder="Search"
            aria-label="Search"
            v-model="searchTerm"
          />
          <button class="btn btn-outline-success"  type="submit">Search</button>
        </form>
        <div class="col" style="margin-left: 10px">
          <button class="btn btn-outline-success" @click="$router.push('/table')">Table</button>
        </div>
      </div>
    </nav>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
 data: function () {
  return {
    }
  },
  methods: {
    // increment() {
    //   this.$store.commit('increment')

    // },
  },
    computed: {
      searchTerm: {
    get () {
      return this.$store.state.filter
    },
    set (value) {
      this.$store.commit('updateFilter', value)
    }
  }
    }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
