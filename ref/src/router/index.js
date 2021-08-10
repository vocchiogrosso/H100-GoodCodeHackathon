import { createRouter, createWebHistory } from 'vue-router'

import AuthRoutes from '../views/Auth/_router';
import HomeRoutes from '../views/Home/_router';
import InfoRoutes from '../views/Info/_router';


const routes = [
  ...AuthRoutes,
  ...HomeRoutes,
  ...InfoRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
