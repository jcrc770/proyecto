<script>

</script>


<template>
    <aside class="w-64 p-6 ml-9 mb-40 bg-colorWhite">
        <section class="mb-6">
          <h4 class="text-xs mb-3 font-inter text-colorGray">Type</h4>
          <label class="block mb-2 text-colorTitle font-inter font-medium">
            <input type="checkbox" name="type" value="sport" class="mr-2"> Sport <span class=" text-colorGray">(10)</span>
          </label>
          <label class="block mb-2 text-colorTitle font-inter font-medium">
            <input type="checkbox" name="type" value="suv" class="mr-2"> SUV <span class=" text-colorGray">(12)</span>
          </label>
          <label class="block mb-2 text-colorTitle font-inter font-medium">
            <input type="checkbox" name="type" value="mpv" class="mr-2"> MPV <span class=" text-colorGray">(16)</span>
          </label>
          <label class="block mb-2 text-colorTitle font-inter font-medium">
            <input type="checkbox" name="type" value="sedan" class="mr-2"> Sedan <span class=" text-colorGray">(20)</span>
          </label>
          <label class="block mb-2 text-colorTitle font-inter font-medium">
            <input type="checkbox" name="type" value="coupe" class="mr-2"> Coupe <span class=" text-colorGray">(14)</span>
          </label>
          <label class="block mb-2 text-colorTitle font-inter font-medium">
            <input type="checkbox" name="type" value="hatchback" class="mr-2"> Hatchback <span class=" text-colorGray">(14)</span>
          </label>
        </section>
        
        <!-- Capacity Category -->
        <section class="mb-6">
          <h4 class="text-xs mb-3 font-inter text-colorGray">Capacity</h4>
          <label class="block mb-2 text-colorTitle font-inter font-medium">
            <input type="checkbox" name="capacity" value="2person" class="mr-2"> 2 Person <span class=" text-colorGray">(10)</span>
          </label>
          <label class="block mb-2 text-colorTitle font-inter font-medium">
            <input type="checkbox" name="capacity" value="4person" class="mr-2"> 4 Person <span class=" text-colorGray">(14)</span>
          </label>
          <label class="block mb-2 text-colorTitle font-inter font-medium">
            <input type="checkbox" name="capacity" value="6person" class="mr-2"> 6 Person <span class=" text-colorGray">(12)</span>
          </label>
          <label class="block mb-2 text-colorTitle font-inter font-medium">
            <input type="checkbox" name="capacity" value="8person" class="mr-2"> 8 Person <span class=" text-colorGray">(16)</span>
          </label>
        </section>
        
        <!-- Price Category -->
        <section class="mb-6">
          <h4 class="text-xs mb-3 font-inter text-colorGray">Price</h4>
          <input type="range" id="priceRange" min="0" max="100000" step="1000" value="100000" class="w-full mb-2">
          <label for="priceRange" class="block text-left text-sm font-inter font-medium">Max: $100,000</label>
        </section>
    </aside>

</template>