import axios from 'axios';
// Configurar encabezados por defecto para todas las solicitudes
// Instancia para el microservicio de contenido
const apiService = axios.create({ baseURL: `${import.meta.env.VITE_API_URL}` });

apiService.defaults.headers.common['Content-Type'] = 'application/json';
apiService.defaults.headers.common.Accept = 'application/json';

export const client = {
  api: apiService,
};
