const createApp = require("./shared/infrastructure/container/createApp");

const PORT = 3001;
const app = createApp();

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
