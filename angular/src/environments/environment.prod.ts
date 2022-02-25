export const environment: {
  production: boolean;
  baseUrlRestServices: string;
  security: 'jwt' | 'csrf';
} = {
  production: true,
  //detectara en el reverse proxy 
  baseUrlRestServices: '/jumpthequeue/services/rest',
  security: 'csrf'
};
