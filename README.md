# Weather App - Curso Professional Developer (Digital House) 🌦️

Este proyecto es una **aplicación de clima** desarrollada con **React** como parte del curso **Professional Developer** en **Digital House**. Permite a los usuarios obtener información climática de cualquier ciudad, usando APIs modernas para búsquedas por texto, voz y geolocalización.

---

## 📋 Características

1. **Búsqueda manual por ciudad**: 
   - Ingrese el nombre de la ciudad en un campo de texto para obtener información del clima.
   
2. **Reconocimiento de voz**: 
   - Use el micrófono para buscar el clima mediante comandos de voz en español.
   
3. **Ubicación actual**: 
   - Utiliza la API de Geolocalización para determinar la ubicación del usuario y mostrar el clima en tiempo real.

4. **Visualización de datos climáticos**:
   - Temperatura (en grados Celsius).
   - Humedad relativa.
   - Descripción textual del clima.
   - Íconos representativos basados en datos de la API.

---

## 🛠️ Tecnologías utilizadas

- **React**: Biblioteca principal para la interfaz de usuario.
- **JavaScript (ES6+)**: Lógica de la aplicación.
- **CSS**: Diseño responsivo y estilos personalizados.
- **OpenWeatherMap API**: Fuente de datos climáticos.
- **Geolocalización del navegador**: Para detectar la ubicación actual del usuario.
- **Web Speech API**: Reconocimiento de voz para búsquedas más accesibles.

---

## 🚀 Configuración del proyecto

### Requisitos previos
- [Node.js](https://nodejs.org/) instalado (v16 o superior).
- Acceso a una clave de API de [OpenWeatherMap](https://openweathermap.org/).

### Pasos para instalar y ejecutar
1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Oscar-Echeverry/weather-app.git
   cd weather-app
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar la API Key**:
   - Abre el archivo `WeatherApp.jsx`.
   - Reemplaza la constante `API_KEY` con tu clave de OpenWeatherMap.

4. **Ejecutar el proyecto**:
   ```bash
   npm start
   ```

5. **Abrir en el navegador**:
   - Por defecto estará disponible en: [http://localhost:3000](http://localhost:3000).

---

## 📂 Estructura del proyecto

```plaintext
src/
├── assets/          # Archivos estáticos (Logo,favicon, etc.)
├── main.jsx         # Entrada principal del proyecto
├── WeatherApp.css   # Estilos personalizados
├── WeatherApp.jsx   # Componente principal de la aplicación
```

---

## ⚙️ Configuración adicional

- **Reconocimiento de voz**: Asegúrate de que tu navegador tenga habilitado el uso de la **Web Speech API**.
- **Geolocalización**: La aplicación solicita permisos de ubicación al usuario.

---

## 🧑‍💻 Autor

Este proyecto fue desarrollado por **Oscar Echeverri** como parte del curso **Professional Developer** en **Digital House**.
