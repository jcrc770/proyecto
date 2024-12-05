<script>
export default {
    head() {
        return {
            title: 'Detail Car', // Aquí se puede poner el título dinámico

        }
    },
    layout: 'defaultAside',
    data() {
    return {
      carros: [],
      carroId: null
    };
  },
  methods: {
    async mostrarCarros() {
      try {
        const response = await this.$axios.get('/carros/');
        this.carros = response.data; 
      } catch (error) {
        console.error('Error fetching car details:', error);
        alert('Ocurrió un error al obtener los detalles de los carros');
      }
    },
    rentar(idCarro) {
      this.carroId = idCarro;
      this.$router.push(`/usuario/payment/${idCarro}`);
    }
  },
  mounted() {
    this.mostrarCarros();
  }
}
</script>

<template>

<div class="contenedor-principal">

    <div class="container-cuadricula">
      <div
        v-for="(carro, index) in carros"
        :key="index"
        class="container-carros font-inter"
      >
        <div class="header-carro">
          <div class="cont-titulo-carro">
            <h2 class="titulo-carro">{{ carro.marca }} {{ carro.modelo }} {{ carro.year }}</h2>
            <p class="sub-carro">Sport</p>
          </div>
          <div class="icono-heart">
            <h2>corazón</h2>
          </div>
        </div>
        <div class="contenedor-card-central">
          <div class="contenedor-img-carro">
            <img src="../../assets/img/m1.png" alt="">
          </div>
          <div class="contenedor-card-logos">
            <p class="logos-carro">{{ carro.gasolina }}</p>
            <p class="logos-carro">{{ carro.direccion }}</p>
            <p class="logos-carro">{{ carro.cantidad }}</p>
          </div>
        </div>
        <div class="contenedor-footer-card">
          <div class="contenedor-precio">
            <p class="precio-carro">${{ carro.precio }}.00/ <span class="sub-precio">day</span></p>
          </div>
          <div class="contenedor-boton">
            <button class="btn-carro" @click="rentar(carro.id)">Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
html {
    box-sizing: border-box;
    font-size: 62.5%;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

img {
    width: 100%;
}


/* Tarjetas de la tabla de carros */
.container-carros {
    width: 315px;
    border-radius: 15px;
    background: white;
    padding: 20px;
}

.header-carro {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
}

.titulo-carro {
    font-weight: bold;
    font-size: 18px;
}

.sub-carro {
    font-size: 14px;
    font-weight: 500;
    color: #90A3BF;
}

.contenedor-card-logos {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
}

.icono-heart {
    color: #90A3BF;
}

.logos-carro {
    color: #90A3BF;
}

.contenedor-footer-card {
    display: flex;
    justify-content: space-between;
}

.precio-carro {
    font-weight: bold;
}

.sub-precio {
    color: #90A3BF;
    font-size: 13px;
}

.btn-carro {
    background: #416CEA;
    color: white;
    padding: 9px 15px;
    border-radius: 5px;
    font-size: 14px;
}

.btn-carro:hover {
    background: #2157F3;
}

.container-cuadricula {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    row-gap: 20px;
    column-gap: 20px;
}

.principal {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>
