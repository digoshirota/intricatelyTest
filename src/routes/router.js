import Vue from 'vue'
import Router from 'vue-router'
const CompanyData = () => import("../views/CompanyData.vue");
const Home = () => import("../views/Home.vue");

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/company-data',
      name: 'companydata',
      component: CompanyData
    }

  ]
})

