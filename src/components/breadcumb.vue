<template>
  <div class="breadcumb">
    <ul>
        <li v-for="element in breadcumb" v-bind:key="element.name"> 
            <span>{{element.name}}</span>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
    data: () => ({
        breadcumb: [] 
    }),
    created() {
        this.initialize();
    },
    methods: {
        initialize(){
            this.breadcumb = this.$store.state.breadcumb 
        },
    }
};
</script>