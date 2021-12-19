<template>
    <highlightjs v-if="text" autodetect :code="text"/>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>