<template>
  <v-app >
    <v-main >
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
    
  }),
};
</script>

<style>
.v-application--wrap{
  min-height:0;
}
.v-text-field label {
  font-size: 1rem;
}
.v-data-table th {
  font-size: 1.2rem !important;
  padding: 30px 0px !important;
  text-shadow: none !important;
  background-color: #E3F2FD !important;
}
.v-data-table td {
  font-size: 1rem !important;
}

</style>
