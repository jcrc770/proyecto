<template>
  <div class="myContainer">
    <!-- Barra de navegación -->
    <nav class="navbar">
      <div class="logo">
        RentaCarTo
      </div>
      <ul class="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#informacion">Información</a></li>
        <li><a href="#acerca-de-nosotros">Acerca de Nosotros</a></li>
        <li>
          <a class="rentar-button" @click="redirigir">
            Rentar
          </a>
        </li>
        <li>
          <a class="rentar-button" @click="ver">
            ver
          </a>
        </li>
      </ul>
    </nav>

    <!-- Sección de Inicio -->
    <section id="inicio" class="welcome-section">
      <div class="welcome-content">
        <h1>Bienvenido a <span class="highlight">RentaCarTo</span></h1>
        <p>
          La forma más confiable y segura de rentar el auto perfecto para tus aventuras en Guanajuato.
        </p>
        <a href="#informacion" class="cta-button">Conoce Más</a>
      </div>
    </section>

    <!-- Sección de Información -->
    <section id="informacion" class="info-section">
      <h2 class="section-title">
        ¿Por qué elegir <span class="highlight">RentaCarTo</span>?
      </h2>
      <div class="info-cards">
        <div class="card">
          <h3>Flota Moderna</h3>
          <p>Autos confiables y de última generación, perfectos para cualquier ocasión.</p>
        </div>
        <div class="card">
          <h3>Precios Justos</h3>
          <p>Transparencia en nuestras tarifas, sin sorpresas ni costos ocultos.</p>
        </div>
        <div class="card">
          <h3>Atención 24/7</h3>
          <p>Un servicio al cliente siempre disponible para ti.</p>
        </div>
      </div>
    </section>

    <!-- Sección Acerca de Nosotros -->
    <section id="acerca-de-nosotros" class="about-section">
      <h2 class="section-title">
        Sobre <span class="highlight">Nosotros</span>
      </h2>
      <p>
        En RentaCarTo nos especializamos en ofrecer el mejor servicio de renta de autos en Guanajuato. Nos enfocamos en la seguridad, comodidad y satisfacción de nuestros clientes.
      </p>
      <img src="" alt="Nuestra flota" class="about-image">
    </section>

    <!-- Pie de Página -->
    <footer class="footer">
      <p>&copy; 2024 RentaCarTo. Todos los derechos reservados.</p>
      <p>
        <a href="#inicio">Inicio</a> |
        <a href="#informacion">Información</a> |
        <a href="#acerca-de-nosotros">Acerca de Nosotros</a> |
        <a href="/rentar">Rentar</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'inicio',
  methods: {
    redirigir () {
      this.$router.push('/login')
    },
    ver () {
      this.$axios.get('/usuarios', {
        headers: {

        }
      }).then((res) => {
        console.log('usuarios => ', res.data)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
/* Estilos generales */
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
  background-color: #f0f8ff;
}

.myContainer {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Barra de navegación */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #007bff;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar .logo {
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.navbar .nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.navbar .nav-links li a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
  transition: color 0.3s;
}

.navbar .nav-links li a:hover {
  color: #d1e8ff;
}

.navbar .rentar-button {
  background-color: rgb(9, 9, 9);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.navbar .rentar-button:hover {
  background-color: #ba0c37;
  color: #0056b3;
}

/* Sección de Bienvenida */
.welcome-section {
  height: 100vh;
  background: linear-gradient(135deg, #007bff, #00aaff);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem;
}

.welcome-content {
  max-width: 600px;
}

.welcome-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.welcome-content .highlight {
  color: #d1e8ff;
}

.welcome-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #d1e8ff;
}

/* Sección de Información */
.info-section {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
  flex-grow: 1;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #007bff;
}

.info-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.info-cards .card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 280px;
}

.info-cards .card h3 {
  color: #007bff;
}

.info-cards .card p {
  color: #555;
}

/* Acerca de Nosotros */
.about-section {
  padding: 4rem 2rem;
  background-color: #f0f8ff;
  text-align: center;
}

.about-image {
  margin-top: 2rem;
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Pie de Página */
.footer {
  background-color: #007bff;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>
