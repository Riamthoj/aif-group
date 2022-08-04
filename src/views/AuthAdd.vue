<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row no-gutters class="justify-center">
        <v-col cols="12" md="11" lg="10">
          <v-card flat>
            <v-card-title primary-title> Add new user </v-card-title>
            <v-card-text>
              <v-row no-gutters class="justify-center">
                <v-col cols="12" md="6" lg="5">
                  <v-card
                    height="450"
                    :img="auth.imageUrl ? auth.imageUrl : require('@/assets/profile.gif')"
                    @click="$refs.file.click()"
                  >
                  </v-card>
                  <div v-show="false">
                    <input
                      type="file"
                      ref="file"
                      style="display: none"
                      @change="onFileSelected"
                    />
                  </div>
                </v-col>
                <v-col cols="12" md="6" lg="7">
                  <div class="px-2">
                    <p>UserName<span>*</span></p>
                    <v-text-field
                      autofocus
                      outlined
                      dense
                      required
                      v-model="auth.userName"
                      :rules="[rules.userName.required]"
                      ref="userName"
                      @keyup.enter="roleFocus"
                    ></v-text-field>
                    <p>Role<span>*</span></p>
                    <v-autocomplete
                      outlined
                      dense
                      required
                      clearable
                      v-model="auth.role"
                      :items="role"
                      :rules="[rules.role.required]"
                      @change="passwordFocus"
                      item-color="blue darken-1"
                      no-data-text="No data!"
                      ref="role"
                    ></v-autocomplete>
                    <p>New password<span>*</span></p>
                    <v-text-field
                      outlined
                      dense
                      required
                      v-model="auth.password"
                      :rules="[rules.password.required, rules.password.min]"
                      ref="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"
                      @keyup.enter="confirmFocus"
                    ></v-text-field>
                    <p>Confime password<span>*</span></p>
                    <v-text-field
                      outlined
                      dense
                      required
                      v-model="auth.confirmPassword"
                      :rules="[rules.confirmPassword.required]"
                      ref="confirmPassword"
                      :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show2 ? 'text' : 'password'"
                      @click:append="show2 = !show2"
                      @keyup.enter="submit"
                    ></v-text-field>
                    <v-row no-gutters class="mx-2 justify-center">
                      <v-btn-riam
                        :text="'Clear'"
                        :iclass="'white--text mx-2 light-blue darken-3'"
                        :onClick="clear"
                      ></v-btn-riam>
                      <v-btn-riam
                        :text="'Submit'"
                        :iclass="'white--text mx-2 light-green darken-3'"
                        :onClick="submit"
                      ></v-btn-riam>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    valid: true,
    show1: true,
    show2: true,
    auth: {
      image: null,
      imageUrl: null,
      role: "ADMIN",
      password: null,
      confirmPassword: null,
      userName: null,
    },
    rules: {
      userName: {
        required: (value) => !!value || "UserName is required",
      },
      role: {
        required: (value) => !!value || "Role is required",
      },
      password: {
        required: (value) => !!value || "Password is required",
        min: (v) => v.length >= 6 || "More then 5 character",
      },
      confirmPassword: {
        required: (value) => !!value || "Confirm password is required",
        min: (v) => v.length >= 6 || "More then 5 character",
      },
    },
    role: ["ADMIN", "ACCOUTING", "STAFF"],
  }),

  computed: {},
  mounted() {},
  methods: {
    ...mapActions(
    "authMod", ["getAuths","insertAuth"],
    ),
    roleFocus() {
      if (this.auth.userName) {
        this.$refs.role.focus();
      }
    },
    passwordFocus() {
      if (this.auth.role) {
        this.$refs.password.focus();
      }
    },
    confirmFocus() {
      if (this.auth.password) {
        this.$refs.confirmPassword.focus();
      }
    },
    onFileSelected(e) {
      const image = e.target.files[0];
      const imageName = image.name;
      if (imageName.lastIndexOf(".") <= 0) {
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.auth.imageUrl = e.target.result;
      };
      this.auth.image = image;
    },
    clear() {
      this.$refs.form.reset();
      this.auth = {
        image: null,
        imageUrl: null,
        role: "ADMIN",
        password: null,
        confirmPassword: null,
        userName: null,
      };
      this.getAuths()
    },
    submit() {
      try {
        if (!this.auth.userName) {
          alert("Please enter userName");
          return;
        }
        if (!this.auth.role) {
          alert("Please enter role");
          return;
        }
        if (!this.auth.password) {
          alert("Please enter password");
          return;
        }
        if (!this.auth.confirmPassword) {
          alert("Please enter confirm password");
          return;
        }
        if (this.auth.password != this.auth.confirmPassword) {
          alert("Confirm password is not match");
          return;
        }
        var formdata =new FormData();
        formdata.append("password", this.auth.password);
        formdata.append("userName", this.auth.userName);
        formdata.append("role", this.auth.role);
        formdata.append("image", this.auth.image);
        var item = this.auth.imageUrl ? formdata : this.auth;
        this.insertAuth(item)
          .then((res) => {
            if (res.status == 201) {
              this.clear();
            } else {
              alert("Some thing wrong");
            }
          })
          .catch((error) => {
            console.log(error);
            alert(JSON.stringify(error));
          });
      } catch (error) {
        console.log(error);
        alert("catch")
      }
    },
  },
};
</script>
<style scoped>
p {
  font-size: 1rem;
}
span {
  color: red;
}
</style>
