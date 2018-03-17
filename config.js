const env = process.env;

export const logStars = (msg) => {
  console.info('*******');
  console.info(msg);
  console.info('*******');

  return true;
}

export const nodeEnv = env.NODE_ENV || 'development';

export default {
  port: env.PORT || 8080
};
