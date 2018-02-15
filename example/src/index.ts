import { App, ConfigBuilder } from "lynx-framework";

const port = Number(process.env.PORT) || 3000;

import * as session from "express-session";
import * as redisStore from "connect-redis";

import LightBootstrapAdminModule from "lynx-light-bootstrap-admin-theme";

let myConfig = new ConfigBuilder(__dirname).build();

const app = new App(myConfig, [new LightBootstrapAdminModule()]);
app.startServer(port);
