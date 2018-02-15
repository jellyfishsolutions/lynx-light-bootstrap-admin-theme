# lynx-light-bootstrap-admin-theme

Bootstrap administration theme for the Lynx framework.

It is based on the [Light Bootstrap Dashboard Team](https://www.creative-tim.com/product/light-bootstrap-dashboard) by [Creative Tim](https://www.creative-tim.com).

## Installation

```
npm install lynx-light-bootstrap-admin-theme --save
```

## Usage

In your main app file:

```
import LightBootstrapAdminModule from "lynx-light-bootstrap-admin-theme";
...

let myConfig = new ConfigBuilder(__dirname).build();

const app = new App(myConfig, [new LightBootstrapAdminModule()]);
app.startServer(port);
```

## Customization

You can override the settings of the theme using the `LightBootstrapAdminModule.settings`.
Please check the `src/views/` and the `src/locale` folders to create further customizations.
