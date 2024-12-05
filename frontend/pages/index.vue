<script>
export default {
  layout: 'default1',
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
        this.carros = response.data.slice(0,8); 
      } catch (error) {
        console.error('Error fetching car details:', error);
        alert('Ocurrió un error al obtener los detalles de los carros');
      }
    },
    rentar(idCarro) {
      this.carroId = idCarro;
      this.$router.push(`/usuario/payment/${idCarro}`);
    },
  },
  mounted() {
    this.mostrarCarros();
  }
};
</script>


<template>
  <div class="contenedor-principal">
    <div class="contenedor font-inter">
      <div class="cards-h c-one">
        <div class="contenedor-head-card">
          <h2 class="titleH">The Best Plataform</h2>
          <h2 class="titleH">for Car Rental</h2>
        </div>
        <div class="contendor-text-card">
          <p class="subH">Ease of doing a car rental safely and</p>
          <p class="subH">reliably. Of course at a low price.</p>
        </div>
        <div class="contenedor-button">
          <button class="btnH">RentalCar</button>
        </div>
        <div class="contenedor-img-card">
          <img class="img-h" src="../assets/img/carro_gris.png" alt="">
        </div>
      </div>
      <div class="cards-h c-two">
        <div class="contenedor-head-card">
          <h2 class="titleH">Easy way to rent a</h2>
          <h2 class="titleH">car at a low price</h2>
        </div>
        <div class="contendor-text-card">
          <p class="subH">Providing cheap car rental services</p>
          <p class="subH">and safe and comfortable facilities.</p>
        </div>
        <div class="contenedor-button">
          <button class="btnH2">RentalCar</button>
        </div>
        <div class="contenedor-img-card">
          <img class="img-h" src="../assets/img/carro_gris.png" alt="">
        </div>
      </div>
    </div>

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
            <h2>❤️</h2>
          </div>
        </div>
        <div class="contenedor-card-central">
          <div class="contenedor-img-carro">
            <img src="../assets/img/m1.png" alt="">
          </div>
          <div class="contenedor-card-logos">
            <p class="logos-carro">⛽{{ carro.gasolina }}</p>
            <p class="logos-carro">🚗{{ carro.direccion }}</p>
            <p class="logos-carro">👥{{ carro.capacidad }}</p>
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

.contenedor-principal {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contenedor {
  padding: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.cards-h {
  width: 670px;
  height: 370px;
  border-radius: 15px;
  padding: 35px;
}

.c-one {
  background-color: #5EABFF;
  margin: 0 20px;
}

.c-two {
  background-color: #416CEA;
  margin: 0 20px;
}

.titleH {
  font-size: 35px;
  font-weight: bold;
  color: white;
  letter-spacing: -2px;
}

.contendor-text-card {
  margin-top: 15px;
  margin-bottom: 20px;
}

.subH {
  color: white;
  font-size: 17px;
}

.contenedor-img-card {
  width: 450px;
  margin: 0 190px;
  position: relative;
  bottom: 110px;
}

.btnH {
  padding: 10px 28px;
  border-radius: 5px;
  color: White;
  font-size: 20px;
  background-color: #416CEA;
}

.btnH:hover {
  padding: 10px 28px;
  border-radius: 5px;
  color: #416CEA;
  font-size: 20px;
  background-color: white;
}

.btnH2 {
  padding: 10px 28px;
  border-radius: 5px;
  color: White;
  font-size: 20px;
  background-color: #5EABFF;
}

.btnH2:hover {
  padding: 10px 28px;
  border-radius: 5px;
  color: #416CEA;
  font-size: 20px;
  background-color: white;
}

/* Tarjetas de la tabla de carros */
.container-carros {
  height: 405px;
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
  column-gap: 40px;
  row-gap: 30px;
  padding: 0 100px;
}
</style>
