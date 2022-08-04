<template>
  <div>
    <v-card class="pa-5">
      <v-card-title>
        <v-row class="justify-space-between">
          <span
            >length
            <v-icon>mdi-chevron-double-right</v-icon>
            ({{ auths.length }})</span
          >
          <v-btn-riam
            :text="'New'"
            :iclass="'white--text light-blue darken-3'"
            :icon="'plus-circle'"
            :onClick="linkTo"
          ></v-btn-riam>
        </v-row>
      </v-card-title>
      <v-row class="justify-end">
        <v-col cols="12" md="6" lg="5">
          <v-text-field
            outlined
            dense
            v-model="search"
            single-line
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
            class="my-2 my-md-5"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-tb :search="search" :headers="headers" :loading="loading" :length="length" :items="auths"></v-tb>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data: () => ({
    search: "",
    loading: false,
    deleteItem: null,
    headers: [
      {
        text: "Index",
        align: "center",
        sortable: false,
        value: "idx",
      },
      {
        text: "Profile",
        value: "image",
      },
      {
        text: "UserName",
        value: "userName",
      },
      {
        text: "Role",
        value: "role",
      },
    ],
  }),

  computed: {
    ...mapGetters({
        auths: "authMod/auths",
        length: "authMod/length",
    }),
  },
  watch: {
    auths(val) {
      if (val.length > 0 || this.length == false) {
        this.loading = false;
      }
    },

    length(val) {
      if (!val) {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getAuths();
    this.Loading();
  },
  methods: {
    ...mapActions(
    "authMod", ["getAuths"],
    ),
    Loading() {
      if (!this.length) {
        this.loading = false;
      }
    },
    linkTo(){
      this.$router.push('/aif/auth/add')
    }
  },
};
</script>
