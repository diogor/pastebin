<template>
    <main>
        <div>
            <h2 v-if="paste.title !== paste.slug">{{paste.title}}</h2>
            <h3>https://pastebin.dr6.com.br/{{paste.slug}}</h3>
        </div>
        <Paste :text="paste.text"/>
    </main>
</template>

<script>
import axios from "axios"
import { useRoute, useRouter } from "vue-router"
import Paste from "../components/Paste.vue"
import { onMounted, reactive } from "vue"

async function getPaste(slug) {
    const paste = await axios.get(`https://paste.dr6.com.br/${slug}`)
    return paste.data
}

export default {
    components: {
        Paste
    },
    setup() {
        const route = useRoute()
        const router = useRouter()
        const paste = reactive({})
        const slug = route.params.slug
        
        onMounted(async () => {
            let paste_data = await getPaste(slug)
            paste.slug = paste_data.slug
            paste.title = paste_data.title
            paste.text = paste_data.text
        })

        return {paste, router}
    },
}
</script>

<style lang="sass" scoped>
main
    width: auto
    >div
        color: #d8dee9
        display: grid
        justify-items: start
        h2
            margin-bottom: 0px
        h2, h3
            font-size: 13pt
            font-weight: lighter
        h3
            font-size: 11pt
            font-style: italic
            margin-top: 0px
        a
            padding: 10px
            padding-left: 0px
            margin-left: 0px
</style>
