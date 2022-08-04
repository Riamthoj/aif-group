import { apiURL, header } from '@/config/constant';
import axios from 'axios';
const authModule={
  namespaced: true,
  state: {
    token: window.localStorage.getItem('token') ? window.localStorage.getItem('token') : null,
    auths:[],
    length:true
  },
  getters: {
    token:state=>state.token,
    auths:state=>state.auths,
    length:state=>state.length
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setAuths(state, auth) {
      state.auths = auth;
    },
    setLength(state, len) {
      state.length = len;
    },
  },
  actions: {
    login(context, item) {
      try {
        return axios.post(apiURL + `sign-in`, item,{ headers: header })
      } catch (error) {
        console.log(error)
      }
    },
    isLogin(context, id) {
      console.log(id)
      try {
        return axios.get(apiURL + `check/token`, { headers: header })
      } catch (error) {
        console.log(error)
      }
    },

    getAuths(context) {
      try {
        axios.get(apiURL, { headers: header }).then((res) => {
          var authlist = []
          if (res.data.error) {
            context.commit("setAuths", authlist);
            context.commit("setLength", false);
            return
          }
          if (res.data.length < 1) {
            context.commit("setAuths", authlist);
            context.commit("setLength", false);
            return
          }
          for (const idx in res.data) {
            const el = res.data[idx];
            var auth = {
              idx: parseInt(idx) + 1,
              _id: el._id,
              userName: el.userName,
              image: el.image,
              role: el.role,
            };
            authlist.push(auth);
          }
          context.commit("setAuths", authlist);
          context.commit("setLength", true);
        }).catch((error) => {
          context.commit("setAuths", []);
          context.commit("setLength", false);
          console.log(error)
        });
      } catch (error) {
        context.commit("setLength", false);
        console.log(error);
      }
    },
    insertAuth(context,item){
      try {
        return axios.post(apiURL + `sign-up`, item)
      } catch (error) {
        console.log(error)
      }
    }
  },
}
export default authModule
