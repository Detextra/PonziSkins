import { createRouter, createWebHashHistory } from "vue-router";

import Allskins from "@/views/Allskins.vue";
import DescriptionSkins from "@/views/DescriptionSkins.vue";
import Graphiques from "@/views/Graphiques.vue";

const routes = [
  {
    path: "/",
    name: "Allskins",
    component: Allskins,

    
  },
  {
    path: "/DescriptionSkins",
    name: "DescriptionSkins",
    component: DescriptionSkins,
    
  },
  {
    path: "/graphique",
    name: "graphique",
    component: Graphiques,
    
  },
  
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
})

export default router;