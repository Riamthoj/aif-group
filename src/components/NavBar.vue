<template>
  <v-app>
    <v-app-bar app color="primary" clipped-left dark>
      <v-app-bar-nav-icon
        @click.stop="onClick"
        color="white"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-lg-and-up"></v-spacer>
      <v-toolbar-title>AIF GROUP</v-toolbar-title>
      <v-spacer class="hidden-md-and-down"></v-spacer>
      <router-link
        class="mx-2 hidden-md-and-down la"
        v-for="(item, key) in navigations"
        :to="item.path"
        :key="key"
      >
        <span
          v-if="item.path == $route.path"
          style="text-decoration: underline"
          @click="logout(item.path)"
        >
          {{ item.title }}
        </span>
        <span v-else @click="logout(item.path)">
          {{ item.title }}
        </span>
      </router-link>
      <v-spacer></v-spacer>
    </v-app-bar>
  </v-app>
</template>
<script>
export default {
  props: {
    onClick: Function,
  },
  data() {
    return {
      navigations: [
        {
          title: "Dashboard",
          path: "/dashboard",
        },
        {
          title: "Auth",
          path: "/aif/auth",
        },
        {
          title: "About",
          path: "/aif/about",
        },
        {
          title: "SignOut",
          path: "/",
        },
      ],
    };
  },
  methods: {
    logout(url) {
      if (url == "/") {
        window.localStorage.clear();
      }
    },
  },
};
</script>
<style lang="css" scoped>
.la {
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
}
.la:hover {
  color: lightsalmon;
  text-decoration: underline;
}
</style>
