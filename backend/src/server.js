const createApp = require("./shared/infrastructure/container/createApp");
const config = require("./shared/config");

const app = createApp();
const PORT = config.server.port;

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
