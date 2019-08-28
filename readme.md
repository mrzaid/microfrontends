# Microfrontends Web Component

we are using **WEB COMPONENT** approach for kind of dynamic solution, with different kinds of modules or completely separate applications.

We have two layers of Application - **Root Application** and **Separate Modules/Components**, in which we can use different modules. Below I will describe them in more detail.

### Root Application

In Root Application we have ~~two~~ a file:
1.  modules.json
2.  ~~modules.js~~

In **modules.json** we should add all modules/components, and in that object we have properties in which we are defining: module name, module route, module application tag.

With the help of _json_ file we can create dynamic routes and if we need to show modules dynamically in Sidebar, we can use in that too, like already implemented.

> _Object Example_:
>   {
> "name": "Article",  	// Module/Component Name
> "path": "/article",  	// Route Path
> "component": "article-app",  	// component Tag
> "tag": "<article-app></article-app>",  	// tag (optional)
> "showRoute": true,  // if we need to show in sidebar
> "module": "/module/article-app.min.js"  // path of your component 
 }
 
~~In  **modules.js** we have to add all our modules/component compiled path, that is compiled by web component, and need to import those module/component in Root Application, so we can easily access all created web components in different modules/component as well.~~

> ~~Import Example:
import "app-path/dist/wc-module.js";~~

Now we have removed the dependency of **modules.js**. So now we can build directly modules into our root application and importing into html file using javascript by script tag with the help of **modules.json**

After that the challenging part is the routing of **web components**, but for that we need to use web component router because we cannot use _Vue Router_ for web components routing. For that we used **@vaadin/router**


### Separate Modules/Components
Once we have created Vue application, I have created Vue application using Vue Cli.

Once created, need to add one package to wrapped up application/module/component into **Web Component**, so we can easily use that component in other applications. The good part is - we can create complete separate routing as well as state management for that specific module, because in our case we have article module, and it contains its own routing and its own store, but for now we are not using store (Vuex), although we can.

It is a two step process - in a first step we need to add package and on second we need to create a build from that library/package of web component wrapper, that needs the application starting/root component. Usually, and in our case, its **“src/App.vue”** and it takes name to create custom tag name to use that tag in other application. Add that build command into project **package.json > scripts**

1.  Package: _yarn add @vue/web-component-wrapper_
2.  Add command in scripts: ~~_"wc": "vue-cli-service build --target wc --name article-app ./src/App.vue"_~~ _"build:toRoot": "vue-cli-service build --target wc --no-clean --dest ../root-app/public/modules --name auth-app ./src/App.vue"_
3. To build: ~~_yarn run wc_~~ _yarn run build:toRoot_

##### Please Note:

Suppose if we have two modules, **ModuleA** and **ModuleB**, both are completely separate app without any kind of root app.

Let’s say, _ModuleB_ is a web component, and we need to use in _ModuleA_, for that we need to import ModuleB into ModuleA application, after that it will be accessible to use in ModuleA.

But in our case we are using a kind of root application, so we need to just import all components/modules in Root Application like already we did in _modules.js_

And also we need to define routing in _initRouter.js_ in application, because using web component wrapper it takes main component and Router is initialized in main.js if we are using Vue Cli, so thats why we need to use _initRouter.js_ file for define routes of application and a Router initialization in application.