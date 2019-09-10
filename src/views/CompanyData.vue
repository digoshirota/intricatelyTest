<template>
  <div class="data">
    <breadcumb ></breadcumb>
    dawdadw
  </div>
</template>
<script>
import breadcumb from "../components/breadcumb.vue";


export default {
    components: {
        breadcumb
    },
    data: () => ({
        breadcumb: [
        {
          name: "HOME",
        },
        {
          name: "COMPANY DATA"
        }
      ]
    }),
    created() {
        this.initialize();
    },
    methods: {
        initialize(){
            this.$store.state.breadcumb = this.breadcumb
            console.log(this.$store.state.breadcumb)
        },
    }
};
 

</script>
