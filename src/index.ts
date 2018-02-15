import SimpleModule from "lynx-framework/simple.module";

export interface MenuElement {
    id: number;
    icon: string;
    label: string;
    route: string;
}

export interface Settings {
    themeWorkingRoute: string;
    sidebarPath: string;
    navbarPath: string;
    footerPath: string;
    faviconPath: string;
    appletouchiconPath: string;
    title: string;
    logoutRoute: string;
    sidebar: {
        title: string;
        elements: MenuElement[];
        activeElemenetId?: number;
    };
}

export default class LightBootstrapAdminModule extends SimpleModule {
    static settings: Settings = {
        themeWorkingRoute: "/*",
        sidebarPath: "/light-bootstrap-admin/sidebar",
        navbarPath: "/light-bootstrap-admin/navbar",
        footerPath: "/light-bootstrap-admin/footer",
        faviconPath: "/light-bootstrap-admin/img/favicon.ico",
        appletouchiconPath: "/light-bootstrap-admin/img/apple-icon.png",
        title: "Light Bootstrap Dashboard",
        logoutRoute: "logout",
        sidebar: {
            title: "administration",
            elements: [
                {
                    id: 0,
                    icon: "nc-icon nc-chart-pie-35",
                    label: "Dashboard",
                    route: "dashboard.html"
                },
                {
                    id: 1,
                    icon: "nc-icon nc-notes",
                    label: "Table",
                    route: "table.html"
                }
            ],
            activeElemenetId: 1
        }
    };

    get public(): string {
        return __dirname + "/public";
    }

    get translation(): string {
        return __dirname + "/locale";
    }
    get views(): string {
        return __dirname + "/views";
    }

    get middlewares(): string {
        return __dirname + "/middlewares";
    }
}
