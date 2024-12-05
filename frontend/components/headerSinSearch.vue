<script>

</script>

<template>
    <div class="min-h-32 grid grid-cols-12 gap-4 bg-ColorWhite sm:shadow mb-1">
        <!-- Logo -->
        <div
            class="col-span-6 sm:col-span-2  order-1 sm:order-1 flex justify-center items-center text-2xl lg:text-3xl text-colorSecondary font-inter font-medium">
            MORENT
        </div>
        <!-- Toolbar Search -->
        <div class="col-span-12 sm:col-span-7 order-3 sm:order-2 flex items-center">
        </div>
        <!-- User - Interactives Icons -->
        <div class="col-span-6 sm:col-span-3 order-2 sm:order-3 flex justify-center items-center space-x-4">

                <v-icon class="border border-colorBorderSearch rounded-full h-10 w-10 lg:h-12 lg:w-12">
                    mdi-heart
                </v-icon>

                <!-- Ícono de Campana de Notificación -->
                <v-icon class="border border-colorBorderSearch rounded-full h-10 w-10 lg:h-12 lg:w-12">
                    mdi-bell
                </v-icon>

                <!-- Ícono de Engranaje de Configuración -->
                <v-icon class="border border-colorBorderSearch rounded-full h-10 w-10 lg:h-12 lg:w-12">
                    mdi-cog
                </v-icon>

                <!-- Ícono de Avatar de Usuario -->
                <v-icon class="border border-colorBorderSearch rounded-full h-10 w-10 lg:h-12 lg:w-12">
                    mdi-account
                </v-icon>
        </div>
    </div>
</template>