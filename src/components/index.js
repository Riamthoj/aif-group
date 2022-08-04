import drawer from "@/components/Drawer";
import foot from "@/components/Footer";
import navbar from "@/components/NavBar";
import table from "@/components/Table";
import btn from "@/components/Btn";
function useFrameWork(app) {
  console.log(app);
}
function setComponents(app) {
  app.component("v-navbar", navbar);
  app.component("v-drawer", drawer);
  app.component("v-btn-riam", btn);
  app.component("v-tb", table);
  app.component("v-foot", foot);
}
export { setComponents, useFrameWork };
