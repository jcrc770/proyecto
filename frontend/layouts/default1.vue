<script>
import headerSearch from '../components/headerSearch.vue'
import footerPage from '../components/footerPage.vue'

export default {
    components: {
        headerSearch,
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

        <div class="col-span-12 grid grid-cols-12">

            <main class="col-span-12 bg-colorBody">
                <nuxt />
            </main>

        </div>

        <!-- Footer -->
        <footer class="col-span-12 overflow-hidden">
            <footerPage />
        </footer>
    </div>
</template>