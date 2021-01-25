import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import intro from "../pages/intro.vue";
import design from "../pages/design.vue";
import theory from "../pages/theory.vue";
import concept from "../pages/concept.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/intro",
    name: "intro",
    component: intro,
  },
  {
    path: "/design",
    name: "design",
    component: design,
  },
  {
    path: "/theory",
    name: "theory",
    component: theory,
  },
  {
    path: "/concept",
    name: "concept",
    component: concept,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;