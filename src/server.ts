//initalize the app with port 
import app from "./app";
import { PORT } from "./constants/api.constants";

app.listen(PORT, () => console.log(`listening on port ${PORT}`));