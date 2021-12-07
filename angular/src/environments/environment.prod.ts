export const environment: {
  production: boolean;
  baseUrlRestServices: string;
  security: 'jwt' | 'csrf';
} = {
  production: true,
  //detectara en el reverse proxy 
  baseUrlRestServices: 'http://localhost:80/api',
  security: 'csrf'
};
