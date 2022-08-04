<template>
    <v-app>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="elevation-0 hidden-lg-and-up px-0"
      v-click-outside="onClickOutside"
      v-if="$vuetify.breakpoint.width<1264"
    >
      <v-row class="justify-center">
        <span style="color: green;font-size:2rem; margin: 5px">AIF GROUP</span>
      </v-row>
      <v-list nav dense>
        <v-list-group
          color="blue"
          :class="item.active ? 'green lighten-5 rounded-l-xl' : ''"
          style="margin-right:-10px"
          v-for="item in menus"
          :key="item.title"
          :append-icon="''"
          v-model="selectedMenu"
          @click="onClickMenu(item.route)"
        >
          <template v-slot:activator>
            <v-list-item-content >
              <v-list-item-title
                v-if="item.active"
                class="blue--text"
                style="font-size: 1rem"
                >{{ item.title }}</v-list-item-title
              >
              <v-list-item-title
                v-else
                class="back--text"
                style="font-size: 1rem"
                >{{ item.title }}</v-list-item-title
              >
            </v-list-item-content>
          </template>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    </v-app>
</template>

<script>
export default {
  props:{
    drawer: Boolean,
    onClickOutside:Function
  },
  data() {
    return {
      selectedMenu: false,
      menus: [
        {
          title: "Dashboard",
          route: "/dashboard",
          active: false,
        },
        {
          title: "Auth",
          route: "/aif/auth",
          active: false,
        },
        {
          title: "About",
          route: "/aif/about",
          active: false,
        },
        {
          title: "SignOut",
          route: "/",
          active: false,
        },
      ],
    };
  },
  components: [],
  created() {
  },
  computed: {
  },
  watch: {
    $route(to) {
      this.selectedMenu = this.menus.forEach((menu) => {
        if (menu.route == to.path) {
          return (menu.active = true);
        } else {
          return (menu.active = false);
        }
      });
    },
  },
  mounted() {
    this.mapMenu();
  },
  methods: {
    mapMenu() {
      this.selectedMenu = this.menus.forEach((menu) => {
        if (menu.route == this.$route.path) {
          return (menu.active = true);
        } else {
          return (menu.active = false);
        }
      });
    },
    switchs() {
      this.mini = !this.mini;
      if (this.$vuetify.breakpoint.width < 960) {
        this.drawer = !this.drawerF;
      }
    },
    onClickMenu(link) {
      if (link != "/not") {
        if (link=="/") {
          window.localStorage.clear()
        }
        this.$router.push(link).catch((error) => {
          console.log(error);
        });
      }
      this.onClickOutside()
    },
    
  },
};
</script>