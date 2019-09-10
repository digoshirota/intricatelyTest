<template>
  <div id="app">
    <header id="header">
    </header>
    
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
        navbar: [] 
    }),
    created() {
        this.initialize();
    },
    methods: {
        initialize(){
            this.navbar = [
              {
                name: "COMPANY DATA",
                link: "CompanyData"
              },
              {
                name: "COMPANY TABLE"
              },
              {
                name: "COMPANY PAGE"
              }
            ]
        },
    }
};
</script>

