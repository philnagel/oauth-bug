# Reproduce arcgis-rest-js OAUTH2 bug

This repo serves to demonstrate a bug in the `@esri/arcgis-rest-request` module when using the browser-based OAUTH2 flow on a site using `#` based URLs, for example `VueJS` with `vue-router` in hash history mode.

To reproduce, clone this repo and then:

`npm install`

edit the file `.env` to add your `clientID`. Add the relevant URL to the allowed `redirectUri` list for the app, for example `http://127.0.0.1:5173/authenticate` and `http://127.0.0.1:5173/#/authenticate`
(the `authenticate` route is fixed, adjust the IP and port as needed).

Start the dev server:
`npm run dev`

Observe that the OAUTH2 flow works fine in the default configuration (no errors shown in console).

Now, edit the file `src/router/index.ts` and change the following from:

    export  const  router = createRouter({
    history:  createWebHistory(),
    routes,
    });

to:

    export  const  router = createRouter({
    history:  createWebHashHistory(),
    routes,
    });
This changes the `vue-router` to use hash-based routing instead of normal HTML5 routing mode. This is needed in some cases where the hosting web server for an app cannot be configured to handle the routing for SPA apps.
Now, when going through the OAUTH2 flow, an error will be returned, even though the authentication succeeds on the AGOL side.
