import { createRouter, createWebHistory } from 'vue-router'

import AuthRoutes from '../views/Auth/_router';
import HomeRoutes from '../views/Home/_router';
import SummaryRoutes from '../views/Summary/_router';


const routes = [
  ...AuthRoutes,
  ...HomeRoutes,
  ...SummaryRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
