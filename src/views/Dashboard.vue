<template>
  <div>
    <v-row class="justify-center">
      <v-col cols="12" md="3">
        <v-row no-gutters class="justify-center">
          <v-avatar
            color="#039BE5"
            size="200"
            class="pa-1 ma-1"
            @click="linkTo('/aif/auth')"
          >
            <v-card height="100%" width="100%" class="rounded-circle" ripple>
              <v-row class="justify-center" no-gutters>
                <v-icon color="#039BE5" size="100">mdi-account-tie</v-icon>
              </v-row>
              <div>Auth</div>
            </v-card>
          </v-avatar>
        </v-row>
        <v-row no-gutters class="justify-center" style="margin-top: -70px">
          <v-avatar color="#039BE5" size="90" @click="linkTo('/aif/auth')">
            <p style="color: white">100</p>
          </v-avatar>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <v-row no-gutters class="justify-center">
          <v-avatar
            color="#039BE5"
            size="200"
            class="pa-1 ma-1"
            @click="linkTo('/aif/auth')"
          >
            <v-card height="100%" width="100%" class="rounded-circle" ripple>
              <v-row class="justify-center" no-gutters>
                <v-icon color="#039BE5" size="100">mdi-account</v-icon>
              </v-row>
              <div>Auth->Active</div>
            </v-card>
          </v-avatar>
        </v-row>
        <v-row no-gutters class="justify-center" style="margin-top: -70px">
          <v-avatar color="green" size="90" @click="linkTo('/aif/auth')">
            <p style="color: white">90</p>
          </v-avatar>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <v-row no-gutters class="justify-center">
          <v-avatar
            color="#039BE5"
            size="200"
            class="pa-1 ma-1"
            @click="linkTo('/aif/auth')"
          >
            <v-card height="100%" width="100%" class="rounded-circle" ripple>
              <v-row class="justify-center" no-gutters>
                <v-icon color="#039BE5" size="100">mdi-account-off</v-icon>
              </v-row>
              <div>auth->Block</div>
            </v-card>
          </v-avatar>
        </v-row>
        <v-row no-gutters class="justify-center" style="margin-top: -70px">
          <v-avatar color="error" size="90" @click="linkTo('/aif/auth')">
            <p style="color: white">10</p>
          </v-avatar>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-5 mx-2" no-gutters>
      <v-card class="mx-auto" height="400" width="100%" color="grey lighten-4">
        <v-sparkline
          :value="value"
          :gradient="gradient"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw
          show-labels
        ></v-sparkline>
      </v-card>
    </v-row>
  </div>
</template>
<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];
export default {
  data() {
    return {
      aloading: true,
      cloading: true,
      ploading: true,
      rloading: true,
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: "round",
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: "top",
      gradients,
      fill: false,
      type: "trend",
      autoLineWidth: false,
    };
  },
  mounted() {},
  methods: {
    linkTo(link) {
      this.$router.push(link);
    },
  },
};
</script>
<style scoped>
p {
  font-size: 2rem;
  color: #039be5;
}
</style>
