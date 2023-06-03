interface ConfigInterface {
  node: string;
  port: number;
  databaseUri?: string;
  jwt?: {
    secret: string;
    lifetime: string;
    algorithm: Algorithm;
  };
}

export default (): ConfigInterface => ({
  node: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 4000,
});
