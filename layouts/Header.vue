<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" >
      <b-navbar-brand style="margin-left: 2rem" href="/">Home</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav style="flex-direction: row-reverse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto align-items-center">
          <form style="display: flex;align-items: center" >
            <input size="sm" class="mr-sm-2" v-model="search_key" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" @click="handleSubmit(search_key)">Search</b-button>
          </form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item >EN</b-dropdown-item>
            <b-dropdown-item >VN</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right >
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
        search_key:"",
    }
  },
  methods:{
      handleSubmit(search_key){
        this.$router.push({ path: '/search', query: { q: search_key } })
      }
  }
}
</script>

<style scoped>
ul >>> .dropdown-menu{
    left: -60px;
    min-width: 120px;
}
</style>
