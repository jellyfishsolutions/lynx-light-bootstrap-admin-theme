import { App } from "lynx-framework";
import { BaseMiddleware } from "lynx-framework/base.middleware";
import { Middleware } from "lynx-framework/decorators";
import * as express from "express";

import LightBootstrapAdminModule from "../index";

@Middleware(LightBootstrapAdminModule.settings.themeWorkingRoute)
export default class AddToRequestMiddleware extends BaseMiddleware {
    constructor(app: App) {
        super(app);
    }
    async apply(req: express.Request, _: express.Response) {
        let r: any = req as any;

        r.admin = Object.assign({}, LightBootstrapAdminModule.settings);
        r.admin.sidebar = Object.assign(
            {},
            LightBootstrapAdminModule.settings.sidebar
        );
    }
}
