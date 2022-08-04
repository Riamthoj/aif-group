<template>
  <v-app >
    <div class="pa-2">
      <router-view />
    </div>
    <v-drawer  :drawer="drawer" :onClickOutside="onClickOutside"></v-drawer>
    <v-navbar :onClick="openNav" ></v-navbar>
    <v-foot></v-foot>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer:true
  }),
  methods:{
    openNav(){
      this.drawer= !this.drawer
    },
    onClickOutside(){
      this.drawer= true
    }
  }
};
</script>

<style>
a:link {
  color: white;
}

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: white;
}

/* selected link */
a:active {
  color: white;
}