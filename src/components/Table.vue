<template>
  <div>
    <div v-if="loading">
      <v-row
        no-gutters
        class="justify-center mb-10 fill-height ma-0"
        align="center"
        justify="center"
      >
        <v-progress-circular indeterminate color="#90CAF9"></v-progress-circular>
      </v-row>
    </div>
    <v-card flat v-else-if="!length">
      <v-data-table
        :headers="headers"
        :search="search"
        sort-by="idx"
        class="elevation-0"
        hide-default-footer
        no-data-text=""
      ></v-data-table>
      <v-row class="justify-center mx-4">
        <v-card
          flat
          class=""
          color="transparent"
          style="font-size: 2rem; color: grey; margin-top: 40px"
          >Empty
        </v-card>
      </v-row>
      <v-skeleton-loader style="margin-top: -125px" class="" type="image">
      </v-skeleton-loader>
    </v-card>
    <div v-else>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="items"
        pagination.sync="pagination"
      >
        <template v-slot:[`item.image`]="{ item }">
          <v-avatar size="100">
            <v-img
              height="100"
              width="100"
              aspect-ratio="3"
              class="grey lighten-5"
              :src="item.image ? item.image : require('@/assets/profile.gif')"
              :lazy-src="item.image"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="#90CAF9"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-avatar>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    search: String,
    loading: Boolean,
    length: Boolean,
    items: Array,
    headers: Array,
  },
};
</script>
