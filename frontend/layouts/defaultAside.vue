<script>
import headerSearch from '../components/headerSearch.vue'
import asidePage from '../components/asidePage.vue'
import footerPage from '../components/footerPage.vue'

export default {
    components: {
        headerSearch,
        asidePage,
        footerPage
    }
}
</script>

<template>

    <div class="grid grid-cols-12">
        
        <!-- Header -->
        <header class="col-span-12 h-32 overflow-hidden">
           <headerSearch />
        </header>

        <!-- Contenido Central -->

        <div class="col-span-12 flex">

            <aside class="">
                <asidePage />
            </aside>

            <main class="bg-colorBody w-full p-5">
                <nuxt />
            </main>

        </div>

        <!-- Footer -->
        <footer class="col-span-12 overflow-hidden">
            <footerPage />
        </footer>
    </div>
</template>