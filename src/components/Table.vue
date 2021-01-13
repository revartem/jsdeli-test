<template>
  <div class="container">
   <table class="table table-hover col-8">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">123</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(listItem, idx) of displayList"
    :key="listItem.id"
    >
  <td> {{idx + 1}}</td>
    <td>{{listItem.type}}</td>
    <td>{{listItem.name}}</td>
    <td>{{listItem.hits}}</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Table',
  data: ()=> {
    return {}
  },
  methods:{
...mapActions([
      'LOAD_MAIN_PACKAGES'
    ]),
  },
  computed: {
    list() {
      return this.$store.getters.list
    },
     searchTerm() {
      return this.$store.getters.filter
    },
    displayList(){
      return this.list.filter(item => {
        if(!this.searchTerm){
          return true
        }
        return item.type == this.searchTerm
      })
    }
  },
  beforeMount(){
    console.log("Load started here----")
    this.LOAD_MAIN_PACKAGES()
    console.log("Load ended here----")

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table{
  margin-top: 50px
}
</style>
