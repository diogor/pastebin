<template>
<div class="logo">
    <router-link to="/">Paste</router-link>
</div>
<router-view/>
</template> 

<style lang="sass">
@import "./assets/css/main.sass"
div.logo
    padding: 10px
    a
        color: #d8dee9
        padding: 10px
        text-decoration: none
        border: 1px dashed #65728a
</style>
