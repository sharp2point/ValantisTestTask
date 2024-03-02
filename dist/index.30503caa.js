// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bB8Rd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "21497b0d30503caa";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"d4YrJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _api = require("./api/api");
var _apiCommands = require("./api/api_commands");
var _appstate = require("./appstate/appstate");
var _paginator = require("./components/paginator/paginator");
var _paginatorDefault = parcelHelpers.interopDefault(_paginator);
var _pageManager = require("./page_manager");
var _pageManagerDefault = parcelHelpers.interopDefault(_pageManager);
var _loader = require("./components/loader/loader");
var _loaderDefault = parcelHelpers.interopDefault(_loader);
var _filter = require("./filter/filter");
var _utils = require("./utils/utils");
var _notify = require("./notyfy/notify");
var _notifyDefault = parcelHelpers.interopDefault(_notify);
window.addEventListener("load", async ()=>{
    (0, _appstate.APPSTATE).rootApp = document.querySelector("#app");
    (0, _appstate.APPSTATE).filter = document.querySelector(".filter");
    (0, _appstate.APPSTATE).filter.addSubscriber(queryFilter);
    (0, _appstate.APPSTATE).filter.addCloseAction((0, _utils.closeFilterActionButton));
    (0, _appstate.APPSTATE).loader = new (0, _loaderDefault.default)();
    (0, _appstate.APPSTATE).loader.appendToDOM((0, _appstate.APPSTATE).rootApp);
    (0, _appstate.APPSTATE).pageManager = new (0, _pageManagerDefault.default)("main", uploadData);
    (0, _appstate.APPSTATE).pageManager.addSubscriber((0, _utils.appendPageToDocument));
    (0, _appstate.APPSTATE).filterPageManager = new (0, _pageManagerDefault.default)("filter", ()=>{
        console.log("Filter Update Page");
    });
    (0, _appstate.APPSTATE).filterPageManager.addSubscriber((0, _utils.appendPageToDocument));
    (0, _appstate.APPSTATE).pageManagerFocused = (0, _appstate.APPSTATE).pageManager;
    (0, _appstate.APPSTATE).paginator = new (0, _paginatorDefault.default)((0, _appstate.APPSTATE).pageManager);
    (0, _appstate.APPSTATE).paginator.appendToDOM(document.querySelector(".settings"));
    (0, _utils.initFilterButton)();
    console.clear();
    //-----------------------------------------------------------------------//
    startAppData();
});
async function getProductData(options) {
    const ids = await (0, _api.getDataFromApi)((0, _apiCommands.APICOMMANDS).getIDs({
        offset: options.offset,
        limit: options.limit
    }));
    if (ids.result) {
        const products = await (0, _api.getDataFromApi)((0, _apiCommands.APICOMMANDS).getItems({
            ids: ids.result
        }));
        return Promise.resolve(products.result);
    } else return Promise.reject();
}
function fillPage(products, pageManager) {
    let page = pageManager.pageRemaind();
    for(let i = 0; i < products.length; i++){
        const result = page.addProduct(products[i]);
        if (!result) {
            fillPage(products.slice(i, products.length - 1), pageManager);
            break;
        }
    }
    return pageManager;
}
function uploadData() {
    (0, _appstate.APPSTATE).loader.show(true);
    getProductData({
        offset: (0, _appstate.APPSTATE).loadOffset,
        limit: (0, _appstate.APPSTATE).loadLimit
    }).then((products)=>{
        (0, _utils.shiftOffset)();
        return fillPage((0, _utils.clearDublicateProduct)(products), (0, _appstate.APPSTATE).pageManager);
    }).then(()=>{
        (0, _appstate.APPSTATE).loader.show(false);
    }).catch((err)=>{
        setTimeout(()=>{
            console.log("Product Request Repeat");
            uploadData();
        }, 1000);
    });
}
function startAppData() {
    getProductData({
        offset: (0, _appstate.APPSTATE).loadOffset,
        limit: (0, _appstate.APPSTATE).loadLimit
    }).then((products)=>{
        return fillPage((0, _utils.clearDublicateProduct)(products), (0, _appstate.APPSTATE).pageManager);
    }).then((pageManager)=>{
        (0, _utils.shiftOffset)();
        (0, _appstate.APPSTATE).loader.show(false);
        return (0, _utils.appendPageToDocument)(pageManager.getFirstPage());
    }).catch((err)=>{
        setTimeout(()=>{
            console.log("Filter Request Repeat");
            startAppData();
        }, 1000);
    });
}
//Filter---------------
async function queryFilter(query) {
    if (!(0, _utils.isQueryEmpty)(query)) {
        (0, _utils.clearNotify)();
        (0, _appstate.APPSTATE).loader.show(true);
        (0, _appstate.APPSTATE).filterPageManager.clearState();
        (0, _appstate.APPSTATE).pageManagerFocused = (0, _appstate.APPSTATE).filterPageManager;
        (0, _filter.getFilterData)(query).then((products)=>{
            const notify = new (0, _notifyDefault.default)("result-notify", `\u{432}\u{441}\u{435}\u{433}\u{43E} ${products.length}`);
            notify.appendToDOM(document.querySelector(".notify"));
            return fillPage((0, _utils.clearDublicateProduct)(products), (0, _appstate.APPSTATE).filterPageManager);
        }).then((pageManager)=>{
            (0, _appstate.APPSTATE).loader.show(false);
            (0, _appstate.APPSTATE).paginator.setPageManager((0, _appstate.APPSTATE).filterPageManager);
            if (pageManager.pageCount > 0) return (0, _utils.appendPageToDocument)(pageManager.getFirstPage());
            else {
                const notify = new (0, _notifyDefault.default)("not-found-notify", "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B");
                return (0, _utils.appendPageToDocument)(notify);
            }
        }).then(()=>{
            (0, _appstate.APPSTATE).filter.classList.toggle("open-filter");
        }).catch((err)=>{
            setTimeout(()=>{
                console.log("Filter Request Repeat");
                queryFilter(query);
            }, 1000);
        });
    }
}

},{"./api/api":"6eeY2","./api/api_commands":"kzo89","./appstate/appstate":"joGLK","./components/paginator/paginator":"8wKwG","./page_manager":"iGAnG","./components/loader/loader":"7uXOE","./filter/filter":"kcdKs","./utils/utils":"ccful","./notyfy/notify":"4L79e","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"6eeY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDataFromApi", ()=>getDataFromApi);
var _utils = require("../../scripts/utils/utils");
var _appstate = require("../appstate/appstate");
async function getDataFromApi(command) {
    const request = new Request((0, _appstate.APPSTATE).apiURL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "X-Auth": (0, _utils.md5)(),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(command)
    });
    //---------------------------------------------
    let count = 10;
    while(count)return getData(request).then((result)=>{
        return result.json();
    }).catch(()=>{
        count -= 1;
        if (count > 0) console.log(`\u{41A}\u{43E}\u{43B}-\u{432}\u{43E} \u{43F}\u{43E}\u{432}\u{442}\u{43E}\u{440}\u{43E}\u{432} \u{437}\u{430}\u{43F}\u{440}\u{43E}\u{441}\u{430}: ${10 - count}`);
    });
}
async function getData(request) {
    const result = await fetch(request.clone());
    if (result.status >= 200 && result.status < 400) return Promise.resolve(result);
    else {
        console.log(`Error: ${result.statusText} -> ${result.status}`);
        return Promise.reject(false);
    }
}

},{"../../scripts/utils/utils":"ccful","../appstate/appstate":"joGLK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"ccful":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "md5", ()=>md5);
parcelHelpers.export(exports, "clearDublicateID", ()=>clearDublicateID);
parcelHelpers.export(exports, "clearDublicateProduct", ()=>clearDublicateProduct);
parcelHelpers.export(exports, "shiftOffset", ()=>shiftOffset);
parcelHelpers.export(exports, "appendPageToDocument", ()=>appendPageToDocument);
parcelHelpers.export(exports, "isQueryEmpty", ()=>isQueryEmpty);
parcelHelpers.export(exports, "clearFilter", ()=>clearFilter);
parcelHelpers.export(exports, "clearNotify", ()=>clearNotify);
parcelHelpers.export(exports, "closeFilterNotifyAction", ()=>closeFilterNotifyAction);
parcelHelpers.export(exports, "closeFilterActionButton", ()=>closeFilterActionButton);
parcelHelpers.export(exports, "initFilterButton", ()=>initFilterButton);
var _md5Js = require("crypto-js/md5.js");
var _md5JsDefault = parcelHelpers.interopDefault(_md5Js);
var _appstate = require("../appstate/appstate");
function md5() {
    const date = new Date();
    const partMD5 = date.toISOString().slice(0, 10).replaceAll("-", "");
    return (0, _md5JsDefault.default)(`${(0, _appstate.APPSTATE).password}_${partMD5}`).toString();
}
function clearDublicateID(data) {
    return [
        ...new Set([
            ...data
        ])
    ];
}
function clearDublicateProduct(data) {
    const idMap = new Map();
    data.forEach((product)=>{
        if (!idMap.get(product.id)) idMap.set(product.id, product);
    });
    return [
        ...idMap.values()
    ];
}
function shiftOffset() {
    (0, _appstate.APPSTATE).loadOffset = (0, _appstate.APPSTATE).loadOffset + (0, _appstate.APPSTATE).loadLimit;
}
function appendPageToDocument(page) {
    const pagePlace = document.querySelector(".app-page");
    if (pagePlace) {
        pagePlace.replaceChildren(page);
        return true;
    }
    return false;
}
function isQueryEmpty(query) {
    let isEmpty = true;
    [
        ...query.values()
    ].forEach((item)=>{
        if (item) isEmpty = false;
    });
    return isEmpty;
}
function clearFilter() {
    clearNotify();
    (0, _appstate.APPSTATE).pageManagerFocused = (0, _appstate.APPSTATE).pageManager;
    (0, _appstate.APPSTATE).paginator.setPageManager((0, _appstate.APPSTATE).pageManagerFocused);
    appendPageToDocument((0, _appstate.APPSTATE).pageManagerFocused.getFirstPage());
}
function clearNotify() {
    const notifyPlace = document.querySelector(".notify");
    while(notifyPlace.firstChild)notifyPlace.removeChild(notifyPlace.firstChild);
}
function closeFilterNotifyAction(nameNotify) {
    clearFilter();
}
function closeFilterActionButton() {
    const filter = document.querySelector(".filter");
    filter.classList.toggle("open-filter");
    clearFilter();
//filterButton = "../filter.webp";
}
function initFilterButton() {
    const filterButton = document.querySelector(".filter-button");
    const filter = document.querySelector(".filter");
    let filterState = false;
    filterButton.addEventListener("click", ()=>{
        if (!filterState) {
            const res = filter.classList.toggle("open-filter");
            filterState = res;
        } else if ((0, _appstate.APPSTATE).pageManagerFocused.name === "filter") {
            clearFilter();
            filterState = false;
        } else {
            filter.classList.toggle("open-filter");
            filterState = false;
        }
    });
}

},{"crypto-js/md5.js":"26tNv","../appstate/appstate":"joGLK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"26tNv":[function(require,module,exports) {
(function(root, factory) {
    // CommonJS
    module.exports = exports = factory(require("df297d5f1a7605f5"));
})(this, function(CryptoJS) {
    (function(Math1) {
        // Shortcuts
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        // Constants table
        var T = [];
        // Compute constants
        (function() {
            for(var i = 0; i < 64; i++)T[i] = Math1.abs(Math1.sin(i + 1)) * 0x100000000 | 0;
        })();
        /**
	     * MD5 hash algorithm.
	     */ var MD5 = C_algo.MD5 = Hasher.extend({
            _doReset: function() {
                this._hash = new WordArray.init([
                    0x67452301,
                    0xefcdab89,
                    0x98badcfe,
                    0x10325476
                ]);
            },
            _doProcessBlock: function(M, offset) {
                // Swap endian
                for(var i = 0; i < 16; i++){
                    // Shortcuts
                    var offset_i = offset + i;
                    var M_offset_i = M[offset_i];
                    M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
                }
                // Shortcuts
                var H = this._hash.words;
                var M_offset_0 = M[offset + 0];
                var M_offset_1 = M[offset + 1];
                var M_offset_2 = M[offset + 2];
                var M_offset_3 = M[offset + 3];
                var M_offset_4 = M[offset + 4];
                var M_offset_5 = M[offset + 5];
                var M_offset_6 = M[offset + 6];
                var M_offset_7 = M[offset + 7];
                var M_offset_8 = M[offset + 8];
                var M_offset_9 = M[offset + 9];
                var M_offset_10 = M[offset + 10];
                var M_offset_11 = M[offset + 11];
                var M_offset_12 = M[offset + 12];
                var M_offset_13 = M[offset + 13];
                var M_offset_14 = M[offset + 14];
                var M_offset_15 = M[offset + 15];
                // Working variables
                var a = H[0];
                var b = H[1];
                var c = H[2];
                var d = H[3];
                // Computation
                a = FF(a, b, c, d, M_offset_0, 7, T[0]);
                d = FF(d, a, b, c, M_offset_1, 12, T[1]);
                c = FF(c, d, a, b, M_offset_2, 17, T[2]);
                b = FF(b, c, d, a, M_offset_3, 22, T[3]);
                a = FF(a, b, c, d, M_offset_4, 7, T[4]);
                d = FF(d, a, b, c, M_offset_5, 12, T[5]);
                c = FF(c, d, a, b, M_offset_6, 17, T[6]);
                b = FF(b, c, d, a, M_offset_7, 22, T[7]);
                a = FF(a, b, c, d, M_offset_8, 7, T[8]);
                d = FF(d, a, b, c, M_offset_9, 12, T[9]);
                c = FF(c, d, a, b, M_offset_10, 17, T[10]);
                b = FF(b, c, d, a, M_offset_11, 22, T[11]);
                a = FF(a, b, c, d, M_offset_12, 7, T[12]);
                d = FF(d, a, b, c, M_offset_13, 12, T[13]);
                c = FF(c, d, a, b, M_offset_14, 17, T[14]);
                b = FF(b, c, d, a, M_offset_15, 22, T[15]);
                a = GG(a, b, c, d, M_offset_1, 5, T[16]);
                d = GG(d, a, b, c, M_offset_6, 9, T[17]);
                c = GG(c, d, a, b, M_offset_11, 14, T[18]);
                b = GG(b, c, d, a, M_offset_0, 20, T[19]);
                a = GG(a, b, c, d, M_offset_5, 5, T[20]);
                d = GG(d, a, b, c, M_offset_10, 9, T[21]);
                c = GG(c, d, a, b, M_offset_15, 14, T[22]);
                b = GG(b, c, d, a, M_offset_4, 20, T[23]);
                a = GG(a, b, c, d, M_offset_9, 5, T[24]);
                d = GG(d, a, b, c, M_offset_14, 9, T[25]);
                c = GG(c, d, a, b, M_offset_3, 14, T[26]);
                b = GG(b, c, d, a, M_offset_8, 20, T[27]);
                a = GG(a, b, c, d, M_offset_13, 5, T[28]);
                d = GG(d, a, b, c, M_offset_2, 9, T[29]);
                c = GG(c, d, a, b, M_offset_7, 14, T[30]);
                b = GG(b, c, d, a, M_offset_12, 20, T[31]);
                a = HH(a, b, c, d, M_offset_5, 4, T[32]);
                d = HH(d, a, b, c, M_offset_8, 11, T[33]);
                c = HH(c, d, a, b, M_offset_11, 16, T[34]);
                b = HH(b, c, d, a, M_offset_14, 23, T[35]);
                a = HH(a, b, c, d, M_offset_1, 4, T[36]);
                d = HH(d, a, b, c, M_offset_4, 11, T[37]);
                c = HH(c, d, a, b, M_offset_7, 16, T[38]);
                b = HH(b, c, d, a, M_offset_10, 23, T[39]);
                a = HH(a, b, c, d, M_offset_13, 4, T[40]);
                d = HH(d, a, b, c, M_offset_0, 11, T[41]);
                c = HH(c, d, a, b, M_offset_3, 16, T[42]);
                b = HH(b, c, d, a, M_offset_6, 23, T[43]);
                a = HH(a, b, c, d, M_offset_9, 4, T[44]);
                d = HH(d, a, b, c, M_offset_12, 11, T[45]);
                c = HH(c, d, a, b, M_offset_15, 16, T[46]);
                b = HH(b, c, d, a, M_offset_2, 23, T[47]);
                a = II(a, b, c, d, M_offset_0, 6, T[48]);
                d = II(d, a, b, c, M_offset_7, 10, T[49]);
                c = II(c, d, a, b, M_offset_14, 15, T[50]);
                b = II(b, c, d, a, M_offset_5, 21, T[51]);
                a = II(a, b, c, d, M_offset_12, 6, T[52]);
                d = II(d, a, b, c, M_offset_3, 10, T[53]);
                c = II(c, d, a, b, M_offset_10, 15, T[54]);
                b = II(b, c, d, a, M_offset_1, 21, T[55]);
                a = II(a, b, c, d, M_offset_8, 6, T[56]);
                d = II(d, a, b, c, M_offset_15, 10, T[57]);
                c = II(c, d, a, b, M_offset_6, 15, T[58]);
                b = II(b, c, d, a, M_offset_13, 21, T[59]);
                a = II(a, b, c, d, M_offset_4, 6, T[60]);
                d = II(d, a, b, c, M_offset_11, 10, T[61]);
                c = II(c, d, a, b, M_offset_2, 15, T[62]);
                b = II(b, c, d, a, M_offset_9, 21, T[63]);
                // Intermediate hash value
                H[0] = H[0] + a | 0;
                H[1] = H[1] + b | 0;
                H[2] = H[2] + c | 0;
                H[3] = H[3] + d | 0;
            },
            _doFinalize: function() {
                // Shortcuts
                var data = this._data;
                var dataWords = data.words;
                var nBitsTotal = this._nDataBytes * 8;
                var nBitsLeft = data.sigBytes * 8;
                // Add padding
                dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
                var nBitsTotalH = Math1.floor(nBitsTotal / 0x100000000);
                var nBitsTotalL = nBitsTotal;
                dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 0x00ff00ff | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 0xff00ff00;
                dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 0x00ff00ff | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 0xff00ff00;
                data.sigBytes = (dataWords.length + 1) * 4;
                // Hash final blocks
                this._process();
                // Shortcuts
                var hash = this._hash;
                var H = hash.words;
                // Swap endian
                for(var i = 0; i < 4; i++){
                    // Shortcut
                    var H_i = H[i];
                    H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
                }
                // Return final computed hash
                return hash;
            },
            clone: function() {
                var clone = Hasher.clone.call(this);
                clone._hash = this._hash.clone();
                return clone;
            }
        });
        function FF(a, b, c, d, x, s, t) {
            var n = a + (b & c | ~b & d) + x + t;
            return (n << s | n >>> 32 - s) + b;
        }
        function GG(a, b, c, d, x, s, t) {
            var n = a + (b & d | c & ~d) + x + t;
            return (n << s | n >>> 32 - s) + b;
        }
        function HH(a, b, c, d, x, s, t) {
            var n = a + (b ^ c ^ d) + x + t;
            return (n << s | n >>> 32 - s) + b;
        }
        function II(a, b, c, d, x, s, t) {
            var n = a + (c ^ (b | ~d)) + x + t;
            return (n << s | n >>> 32 - s) + b;
        }
        /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */ C.MD5 = Hasher._createHelper(MD5);
        /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */ C.HmacMD5 = Hasher._createHmacHelper(MD5);
    })(Math);
    return CryptoJS.MD5;
});

},{"df297d5f1a7605f5":"fDlqJ"}],"fDlqJ":[function(require,module,exports) {
var global = arguments[3];
(function(root, factory) {
    // CommonJS
    module.exports = exports = factory();
})(this, function() {
    /*globals window, global, require*/ /**
	 * CryptoJS core components.
	 */ var CryptoJS = CryptoJS || function(Math1, undefined) {
        var crypto;
        // Native crypto from window (Browser)
        if (typeof window !== "undefined" && window.crypto) crypto = window.crypto;
        // Native crypto in web worker (Browser)
        if (typeof self !== "undefined" && self.crypto) crypto = self.crypto;
        // Native crypto from worker
        if (typeof globalThis !== "undefined" && globalThis.crypto) crypto = globalThis.crypto;
        // Native (experimental IE 11) crypto from window (Browser)
        if (!crypto && typeof window !== "undefined" && window.msCrypto) crypto = window.msCrypto;
        // Native crypto from global (NodeJS)
        if (!crypto && typeof global !== "undefined" && global.crypto) crypto = global.crypto;
        // Native crypto import via require (NodeJS)
        if (!crypto && true) try {
            crypto = require("b7760e5f0b7216d4");
        } catch (err) {}
        /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */ var cryptoSecureRandomInt = function() {
            if (crypto) {
                // Use getRandomValues method (Browser)
                if (typeof crypto.getRandomValues === "function") try {
                    return crypto.getRandomValues(new Uint32Array(1))[0];
                } catch (err) {}
                // Use randomBytes method (NodeJS)
                if (typeof crypto.randomBytes === "function") try {
                    return crypto.randomBytes(4).readInt32LE();
                } catch (err) {}
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
        };
        /*
	     * Local polyfill of Object.create

	     */ var create = Object.create || function() {
            function F() {}
            return function(obj) {
                var subtype;
                F.prototype = obj;
                subtype = new F();
                F.prototype = null;
                return subtype;
            };
        }();
        /**
	     * CryptoJS namespace.
	     */ var C = {};
        /**
	     * Library namespace.
	     */ var C_lib = C.lib = {};
        /**
	     * Base object for prototypal inheritance.
	     */ var Base = C_lib.Base = function() {
            return {
                /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */ extend: function(overrides) {
                    // Spawn
                    var subtype = create(this);
                    // Augment
                    if (overrides) subtype.mixIn(overrides);
                    // Create default initializer
                    if (!subtype.hasOwnProperty("init") || this.init === subtype.init) subtype.init = function() {
                        subtype.$super.init.apply(this, arguments);
                    };
                    // Initializer's prototype is the subtype object
                    subtype.init.prototype = subtype;
                    // Reference supertype
                    subtype.$super = this;
                    return subtype;
                },
                /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */ create: function() {
                    var instance = this.extend();
                    instance.init.apply(instance, arguments);
                    return instance;
                },
                /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */ init: function() {},
                /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */ mixIn: function(properties) {
                    for(var propertyName in properties)if (properties.hasOwnProperty(propertyName)) this[propertyName] = properties[propertyName];
                    // IE won't copy toString using the loop above
                    if (properties.hasOwnProperty("toString")) this.toString = properties.toString;
                },
                /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */ clone: function() {
                    return this.init.prototype.extend(this);
                }
            };
        }();
        /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */ var WordArray = C_lib.WordArray = Base.extend({
            /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */ init: function(words, sigBytes) {
                words = this.words = words || [];
                if (sigBytes != undefined) this.sigBytes = sigBytes;
                else this.sigBytes = words.length * 4;
            },
            /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */ toString: function(encoder) {
                return (encoder || Hex).stringify(this);
            },
            /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */ concat: function(wordArray) {
                // Shortcuts
                var thisWords = this.words;
                var thatWords = wordArray.words;
                var thisSigBytes = this.sigBytes;
                var thatSigBytes = wordArray.sigBytes;
                // Clamp excess bits
                this.clamp();
                // Concat
                if (thisSigBytes % 4) // Copy one byte at a time
                for(var i = 0; i < thatSigBytes; i++){
                    var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                    thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
                }
                else // Copy one word at a time
                for(var j = 0; j < thatSigBytes; j += 4)thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
                this.sigBytes += thatSigBytes;
                // Chainable
                return this;
            },
            /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */ clamp: function() {
                // Shortcuts
                var words = this.words;
                var sigBytes = this.sigBytes;
                // Clamp
                words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
                words.length = Math1.ceil(sigBytes / 4);
            },
            /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */ clone: function() {
                var clone = Base.clone.call(this);
                clone.words = this.words.slice(0);
                return clone;
            },
            /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */ random: function(nBytes) {
                var words = [];
                for(var i = 0; i < nBytes; i += 4)words.push(cryptoSecureRandomInt());
                return new WordArray.init(words, nBytes);
            }
        });
        /**
	     * Encoder namespace.
	     */ var C_enc = C.enc = {};
        /**
	     * Hex encoding strategy.
	     */ var Hex = C_enc.Hex = {
            /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */ stringify: function(wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                // Convert
                var hexChars = [];
                for(var i = 0; i < sigBytes; i++){
                    var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                    hexChars.push((bite >>> 4).toString(16));
                    hexChars.push((bite & 0x0f).toString(16));
                }
                return hexChars.join("");
            },
            /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */ parse: function(hexStr) {
                // Shortcut
                var hexStrLength = hexStr.length;
                // Convert
                var words = [];
                for(var i = 0; i < hexStrLength; i += 2)words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
                return new WordArray.init(words, hexStrLength / 2);
            }
        };
        /**
	     * Latin1 encoding strategy.
	     */ var Latin1 = C_enc.Latin1 = {
            /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */ stringify: function(wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                // Convert
                var latin1Chars = [];
                for(var i = 0; i < sigBytes; i++){
                    var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
                    latin1Chars.push(String.fromCharCode(bite));
                }
                return latin1Chars.join("");
            },
            /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */ parse: function(latin1Str) {
                // Shortcut
                var latin1StrLength = latin1Str.length;
                // Convert
                var words = [];
                for(var i = 0; i < latin1StrLength; i++)words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
                return new WordArray.init(words, latin1StrLength);
            }
        };
        /**
	     * UTF-8 encoding strategy.
	     */ var Utf8 = C_enc.Utf8 = {
            /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */ stringify: function(wordArray) {
                try {
                    return decodeURIComponent(escape(Latin1.stringify(wordArray)));
                } catch (e) {
                    throw new Error("Malformed UTF-8 data");
                }
            },
            /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */ parse: function(utf8Str) {
                return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            }
        };
        /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */ var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
            /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */ reset: function() {
                // Initial values
                this._data = new WordArray.init();
                this._nDataBytes = 0;
            },
            /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */ _append: function(data) {
                // Convert string to WordArray, else assume WordArray already
                if (typeof data == "string") data = Utf8.parse(data);
                // Append
                this._data.concat(data);
                this._nDataBytes += data.sigBytes;
            },
            /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */ _process: function(doFlush) {
                var processedWords;
                // Shortcuts
                var data = this._data;
                var dataWords = data.words;
                var dataSigBytes = data.sigBytes;
                var blockSize = this.blockSize;
                var blockSizeBytes = blockSize * 4;
                // Count blocks ready
                var nBlocksReady = dataSigBytes / blockSizeBytes;
                if (doFlush) // Round up to include partial blocks
                nBlocksReady = Math1.ceil(nBlocksReady);
                else // Round down to include only full blocks,
                // less the number of blocks that must remain in the buffer
                nBlocksReady = Math1.max((nBlocksReady | 0) - this._minBufferSize, 0);
                // Count words ready
                var nWordsReady = nBlocksReady * blockSize;
                // Count bytes ready
                var nBytesReady = Math1.min(nWordsReady * 4, dataSigBytes);
                // Process blocks
                if (nWordsReady) {
                    for(var offset = 0; offset < nWordsReady; offset += blockSize)// Perform concrete-algorithm logic
                    this._doProcessBlock(dataWords, offset);
                    // Remove processed words
                    processedWords = dataWords.splice(0, nWordsReady);
                    data.sigBytes -= nBytesReady;
                }
                // Return processed words
                return new WordArray.init(processedWords, nBytesReady);
            },
            /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */ clone: function() {
                var clone = Base.clone.call(this);
                clone._data = this._data.clone();
                return clone;
            },
            _minBufferSize: 0
        });
        /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */ var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
            /**
	         * Configuration options.
	         */ cfg: Base.extend(),
            /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */ init: function(cfg) {
                // Apply config defaults
                this.cfg = this.cfg.extend(cfg);
                // Set initial values
                this.reset();
            },
            /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */ reset: function() {
                // Reset data buffer
                BufferedBlockAlgorithm.reset.call(this);
                // Perform concrete-hasher logic
                this._doReset();
            },
            /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */ update: function(messageUpdate) {
                // Append
                this._append(messageUpdate);
                // Update the hash
                this._process();
                // Chainable
                return this;
            },
            /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */ finalize: function(messageUpdate) {
                // Final message update
                if (messageUpdate) this._append(messageUpdate);
                // Perform concrete-hasher logic
                var hash = this._doFinalize();
                return hash;
            },
            blockSize: 16,
            /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */ _createHelper: function(hasher) {
                return function(message, cfg) {
                    return new hasher.init(cfg).finalize(message);
                };
            },
            /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */ _createHmacHelper: function(hasher) {
                return function(message, key) {
                    return new C_algo.HMAC.init(hasher, key).finalize(message);
                };
            }
        });
        /**
	     * Algorithm namespace.
	     */ var C_algo = C.algo = {};
        return C;
    }(Math);
    return CryptoJS;
});

},{"b7760e5f0b7216d4":"9C0N7"}],"9C0N7":[function(require,module,exports) {
"use strict";

},{}],"joGLK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "APPSTATE", ()=>APPSTATE);
const APPSTATE = {
    rootApp: null,
    filter: null,
    loader: null,
    paginator: null,
    apiURL: "https://api.valantis.store:41000/",
    password: "Valantis",
    loadOffset: 0,
    loadLimit: 100,
    productsOnPage: 50,
    pageManager: null,
    filterPageManager: null,
    pageManagerFocused: null
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"kzo89":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "APICOMMANDS", ()=>APICOMMANDS);
const APICOMMANDS = {
    filter: filter,
    getIDs: getIDs,
    getItems: getItems,
    getFields: getFields
};
//----- Функции запросов к API ---------------------------------------------------
function filter(params) {
    /*  возвращает упорядоченный список идентификаторов товаров,
        соответствующих заданному значению.

        В качестве параметра может использоваться любое поле возвращаемое
        методом get_fields без параметров. В качестве значения должен
        использоваться тип данных соответствующий полю. Для поля product
        будет проверяться вхождение параметра в строку.
        Для остальных полей проверяется строгое соответствие.
    */ return {
        "action": "filter",
        "params": params
    };
}
function getIDs(params) {
    /*  метод возвращает упорядоченный список идентификаторов товаров
        <offset: number> смещение относительно начала списка
        <limit: number> желаемое число возвращаемых записей
    */ return {
        "action": "get_ids",
        "params": params
    };
}
function getItems(params) {
    /*  возвращает упорядоченный список товаров со всеми характеристиками,
        если переданы идентификаторы товаров.
        <ids:Array<string>> идентификаторы товаров, которые будут возвращены.
    */ return {
        "action": "get_items",
        "params": params
    };
}
function getFields(params) {
    /*  без параметров возвращает упорядоченный список имеющихся полей товаров
        <field: string> действительное название поля товара
        <offset: number> смещение относительно начала списка
        <limit: number> желаемое число возвращаемых записей
    */ return {
        "action": "get_fields",
        "params": params
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8wKwG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Paginator extends HTMLElement {
    root = null;
    cursor = 0;
    pageManager;
    pageCount = 0;
    dom = {
        position: null,
        leftButton: null,
        rightButton: null
    };
    //-----------------------------------------
    set position(position) {
        if (position < this.pageManager.pageCount) this.cursor = position;
    }
    get position() {
        return this.cursor;
    }
    //------------------------------------------
    constructor(pageManager){
        super();
        this.pageManager = pageManager;
        this.root = this.attachShadow({
            mode: "open"
        });
        this.setAttribute("class", "page-paginator");
        this.root.innerHTML = renderTemplate(this.cursor + 1);
        this.dom.position = this.root.querySelector(".position");
        this.dom.leftButton = this.root.querySelector(".left-button");
        this.dom.rightButton = this.root.querySelector(".right-button");
    }
    connectedCallback() {
        this.pageManager.addPageSubscriber(this.updateContent);
        this.dom.leftButton.addEventListener("click", ()=>{
            this.previewPosition();
            this.updateContent();
            this.pageManager.paginator(this.cursor);
        });
        this.dom.rightButton.addEventListener("click", ()=>{
            this.nextPosition();
            this.updateContent();
            this.pageManager.paginator(this.cursor);
        });
    }
    nextPosition() {
        if (this.cursor < this.pageManager.pageCount - 1) this.cursor += 1;
    }
    previewPosition() {
        if (this.cursor > 0) this.cursor -= 1;
    }
    appendToDOM(parent) {
        parent.appendChild(this);
    }
    setPageManager = (pageManager)=>{
        this.pageManager = pageManager;
        this.cursor = 0;
        this.updateContent();
    };
    updateContent = (countPage)=>{
        this.pageCount = countPage || this.pageCount;
        this.dom.position.textContent = `${this.cursor + 1}`;
    };
}
exports.default = Paginator;
if (!customElements.get("nice2jm-page-paginator")) customElements.define("nice2jm-page-paginator", Paginator);
function renderTemplate(position) {
    const html = `
        <div class="left-button button"></div>
        <span class="position">${position}</span>
        <div class="right-button button"></div>
    `;
    const css = `
        <style>
            :host {
                --border-color: rgb(50,50,50);
                --border-color-focus: rgb(230,60,70);
                --inaccess-border-color: rgb(150,150,150);
                --text-color: rgb(10,10,10);
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 0.5rem;
                background: rgba(200, 200, 200,0.9);
                min-width: 100px;
                min-height: 30px;
                border: 3px solid rgb(100, 100, 100);
                border-radius:1rem;
                padding: 1rem;
            }
            .position{
                color: var(--text-color);
                font:bold 2rem "Arial";
            }
            .button {
                width: 40px;
                height: 40px;
                background-color: transparent;
                cursor: pointer;
            }

            .left-button::before {
                position: absolute;
                display: block;
                content: "";
                width: 10px;
                height: 10px;
                border-left: 5px solid var(--border-color);
                border-top: 5px solid var(--border-color);
                transform: translate(15px,12px) rotate(-45deg);
            }

            .right-button::after {
                display: block;
                position:absolute;
                content: "";
                width: 10px;
                height: 10px;
                border-right: 5px solid var(--border-color);
                border-top: 5px solid var(--border-color);
                transform: translate(10px,12px) rotate(45deg);
            }
            .right-button:hover::after {
                border-right: 5px solid var(--border-color-focus);
                border-top: 5px solid var(--border-color-focus);
            }
            .left-button:hover::before {
                border-left: 5px solid var(--border-color-focus);
                border-top: 5px solid var(--border-color-focus);
            }

            .inaccess::before{
                border-left: 5px solid var(--inaccess-border-color);
                border-top: 5px solid var(--inaccess-border-color);
            }
            .inaccess::after{
                border-right: 5px solid var(--inaccess-border-color);
                border-top: 5px solid var(--inaccess-border-color);
            }
        </style>
    `;
    return `${html}${css}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"iGAnG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _appstate = require("./appstate/appstate");
var _page = require("./components/page/page");
var _pageDefault = parcelHelpers.interopDefault(_page);
class PageManager {
    pages = new Array();
    cursor = 0;
    subscribers = new Array();
    addPageSubscribers = new Array();
    uploadDataEvent = ()=>{};
    _name;
    get name() {
        return this._name;
    }
    get pageCount() {
        return this.pages.length;
    }
    constructor(name, uploadDataEvent){
        this._name = name;
        if (uploadDataEvent) this.uploadDataEvent = uploadDataEvent;
    }
    clearState() {
        this.pages = [];
        this.cursor = 0;
    }
    getPageByIndex = (index)=>{
        this.cursor = index;
        return this.pages[index];
    };
    getFirstPage = ()=>{
        this.cursor = 0;
        return this.pages[0];
    };
    getLastPage = ()=>{
        this.cursor = this.pages.length - 1;
        return this.pages[this.pages.length - 1];
    };
    addPageSubscriber(fn) {
        this.addPageSubscribers.push(fn);
    }
    addSubscriber(fn) {
        this.subscribers.push(fn);
    }
    paginator = (position)=>{
        this.cursor = position;
        if (this.cursor === this.pages.length - 1) this.uploadDataEvent();
        this.notyfy();
    };
    notyfy = ()=>{
        this.subscribers.forEach((fn)=>{
            fn(this.getPageByIndex(this.cursor));
        });
    };
    pageRemaind = ()=>{
        if (!(this.getLastPage() && this.getLastPage().capasity > 0)) {
            const page = new (0, _pageDefault.default)(this.getLastPage() ? this.getLastPage().pageID + 1 : 0, this.pages.length * (0, _appstate.APPSTATE).productsOnPage);
            this.pages.push(page);
            this.addPageSubscribers.forEach((fn)=>{
                fn(this.pages.length);
            });
        }
        return this.getLastPage();
    };
}
exports.default = PageManager;

},{"./appstate/appstate":"joGLK","./components/page/page":"hoyhW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"hoyhW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _product = require("src/scripts/components/product/product");
var _productDefault = parcelHelpers.interopDefault(_product);
var _appstate = require("src/scripts/appstate/appstate");
class PageComponent extends HTMLElement {
    root;
    _capasity = (0, _appstate.APPSTATE).productsOnPage;
    _id = 0;
    indexProduct = 0;
    get pageID() {
        return this._id;
    }
    get capasity() {
        return this._capasity;
    }
    constructor(id, firstProductIndex){
        super();
        this._id = id;
        this.indexProduct = firstProductIndex;
        this.root = this.attachShadow({
            mode: "open"
        });
        this.root.innerHTML = renderTemplate();
        this.setAttribute("class", "page");
    }
    addProduct(product_data) {
        if (this.capasity > 0) {
            const product = new (0, _productDefault.default)(this.indexProduct, product_data);
            this.root.getRootNode().appendChild(product);
            this._capasity -= 1;
            this.indexProduct += 1;
            return true;
        } else return false;
    }
}
exports.default = PageComponent;
if (!customElements.get("nice2jm-page-products")) customElements.define("nice2jm-page-products", PageComponent);
//-----------------------------------------------
function renderTemplate() {
    const html = `
        <div class="header">
            <span class="id"></span>     
            <span class="product-id">id</span>
            <span class="brand">\u{431}\u{440}\u{435}\u{43D}\u{434}</span>
            <span class="price">\u{446}\u{435}\u{43D}\u{430}</span>
            <span class="product">\u{43E}\u{43F}\u{438}\u{441}\u{430}\u{43D}\u{438}\u{435}</span>
        </div>
    `;
    const css = `
        <style>
            :host{
                --back-color:rgb(120,30,50);
                --font-color: rgb(220,220,200);
                display:flex;
                flex-direction:column;
                justify-content: start;
                align-items:center;
                gap:0.1rem;
                background:rgb(100,100,100);
                width:100%;
                border:3px solid rgb(150,150,150);
            }
            .header{                
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                align-items: center;
                flex-wrap:nowrap;
                width:95%;
                min-height:40px;
                font:900 1.3rem "Arial";
                border-bottom:1px solid rgb(100,100,100);
                background: var(--back-color);
                color: var(--font-color);
            }
            span{
                display:flex;
                flex-direction:row;
                justify-content:center;
                padding-inline:0.3rem;
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                text-transform:uppercase;
                letter-spacing: 0.2rem;
            }
            span.id{
                display:flex;
                flex-direction:row;
                gap:0;
                flex-basis:6%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.product-id{
                flex-basis:25%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.brand{
                flex-basis:10%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.price{
                flex-basis:10%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.product{
                flex-basis:50%;
            }
        </style>
    `;
    return `${html}${css}`;
}

},{"src/scripts/components/product/product":"2i6Pm","src/scripts/appstate/appstate":"joGLK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"2i6Pm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ProductComponent extends HTMLElement {
    root;
    product = null;
    _id = 0;
    constructor(id, product){
        super();
        this._id = id;
        this.product = product;
        this.root = this.attachShadow({
            mode: "open"
        });
        this.setAttribute("class", "product-cmp");
        this.root.innerHTML = renderTemplate(this._id, this.product);
    }
}
exports.default = ProductComponent;
if (!customElements.get("nice2jm-product")) customElements.define("nice2jm-product", ProductComponent);
//-----------------------------------------------
function renderTemplate(id, product) {
    const rid = `${id}`;
    const lid = "".padStart(5 - rid.length, "0");
    const isEvenID = id % 2 === 0 ? false : true;
    const html = `   
        <span class="id"><span class="lid">${lid}</span><span class="rid">${rid}</span></span>     
        <span class="product-id">${product.id}</span>
        <span class="brand">${product.brand}</span>
        <span class="price">${product.price}</span>
        <span class="product">${product.product}</span>
    `;
    const css = `
        <style>
            :host{
                --odd-back-color:rgb(60,60,60);
                --even-back-color:rgb(70,70,70);
                --font-color:rgb(200,200,200);
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                align-items: center;
                flex-wrap:nowrap;
                width:95%;
                min-height:40px;
                font:100 1.2rem "Arial";
                border-bottom:1px solid rgb(100,100,100);
                background: ${isEvenID ? "var(--even-back-color)" : "var(--odd-back-color)"};
            }
            span{
                padding-inline:0.3rem;                
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;  
                color:var(--font-color);
            }
            span.id{          
                display:flex;
                flex-direction:row;                
                justify-content:start;  
                gap:0;    
                flex-basis:6%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.id span{
                margin:0;
                padding:0;
            }
            span.id .lid{
                border:none;
                color:rgb(150,150,150);
            }
            span.id .rid{
                border:none;
                font-size:1.3rem;
                color:rgb(220,150,100);
            }
            span.product-id{                
                flex-basis:25%;  
                border-right: 1px solid rgb(100,100,100);              
            }
            span.brand{
                display:flex;
                justify-content:center;
                flex-basis:10%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.price{
                display:flex;
                justify-content:center;
                flex-basis:10%;
                border-right: 1px solid rgb(100,100,100);
            }
            span.product{
                flex-basis:50%;
            }
        </style>
    `;
    return `${html}${css}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7uXOE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Loader extends HTMLElement {
    root = null;
    constructor(){
        super();
        this.root = this.attachShadow({
            mode: "open"
        });
        this.root.innerHTML = renderTemplate();
        this.setAttribute("class", "loader-screen");
        this.root.querySelector("img").src = "public/gem.webp";
    }
    appendToDOM = (parent)=>parent.appendChild(this);
    show(is_show) {
        if (is_show) {
            this.classList.remove("opaq-0");
            this.classList.add("opaq-100");
            setTimeout(()=>{
                this.classList.remove("hide");
            }, 300);
        } else {
            this.classList.remove("opaq-100");
            this.classList.add("opaq-0");
            setTimeout(()=>{
                this.classList.add("hide");
            }, 1000);
        }
    }
}
exports.default = Loader;
if (!customElements.get("nice2jm-loader")) customElements.define("nice2jm-loader", Loader);
function renderTemplate() {
    const html = `
            <div class="loader">
                <img>
                <span style="--i:0"></span>
                <span style="--i:1"></span>
                <span style="--i:2"></span>
                <span style="--i:3"></span>
                <span style="--i:4"></span>
                <span style="--i:5"></span>
                <span style="--i:6"></span>
                <span style="--i:7"></span>
                <span style="--i:8"></span>
                <span style="--i:9"></span>
                <span style="--i:10"></span>
                <span style="--i:11"></span>
                <span style="--i:12"></span>
                <span style="--i:13"></span>
                <span style="--i:14"></span>
                <span style="--i:15"></span>
                <span style="--i:16"></span>
                <span style="--i:17"></span>
                <span style="--i:18"></span>
                <span style="--i:19"></span>
            </div>
    `;
    const css = `
        <style>
        :host{
            width: 100vw;
            height: 100vh;
            position: absolute;
            top:0;
            left:0;
            background-color: rgba(30, 25, 115, 0.7);
            display:flex;
            justify-content: center;
            align-items: center;
            z-index:10;
            color:white;
            user-select: none;
        }

        .loader{
            position: relative;
            width:160px;
            height:160px;
        }
        .loader span{
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            transform: rotate(calc(18deg*var(--i)));
        }
        .loader img{
            position: absolute;
            top:calc(50% - 40px);
            left:calc(50% - 40px);
            width: 80px;
            height: 80px;
            animation: rotateanim 5s linear infinite;
        }
        .loader span::before {
            content:"";
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
            border:1px solid rgba(157, 160, 0, 0.9);
            border-radius: 30%;
            transform: scale(5);
            transform: rotate(calc(18deg * var(--i)));
            animation: scaleanim 3s linear infinite;
            animation-delay: calc(0.1s * var(--i));
        }
        .hide{
            display: none;
        }
        .opaq-0{
            animation: opaqanim 1s linear;
        }
        .opaq-1 {
            animation: opaqanim 1s linear reverse;
        }
        @keyframes scaleanim {
            0%{
                transform: scale(0);
                opacity: 1;
            }
            10%{
                transform: scale(1.1);
                opacity: 0.3;
            }
            50%{
                transform: scale(1.1);
                opacity: 0.8;
            }
            100%{
                transform: scale(0.5);
                opacity: 0;
            }
        }
        @keyframes rotateanim {
            0% {
                transform: rotateY(0);
            }

            100% {
                transform: rotateY(360deg);
            }
        }        
        @keyframes opaqanim {
            0%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }
        </style>
    `;
    return `${html}${css}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"kcdKs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFilterData", ()=>getFilterData);
var _api = require("../api/api");
var _apiCommands = require("../api/api_commands");
var _utils = require("../utils/utils");
async function getFilterData(query) {
    const results = new Array();
    results.push(queryPromise(query, "product"));
    results.push(queryPromise(query, "brand"));
    results.push(queryPromise(query, "price"));
    return Promise.all(results).then((data)=>{
        const result = isEmptyData(data);
        return filterIntersect(result);
    }).then((ids)=>{
        return (0, _api.getDataFromApi)((0, _apiCommands.APICOMMANDS).getItems({
            ids: ids
        }));
    }).then((products)=>{
        return (0, _utils.clearDublicateProduct)(products.result);
    });
}
async function queryPromise(query, key) {
    let params = null;
    switch(key){
        case "product":
            params = {
                "product": `${query.get(key)}`
            };
            break;
        case "brand":
            params = {
                "brand": `${query.get(key)}`
            };
            break;
        case "price":
            params = {
                "price": parseFloat(`${query.get(key)}`)
            };
            break;
    }
    if (query.has(key) && query.get(key)) return await (0, _api.getDataFromApi)((0, _apiCommands.APICOMMANDS).filter(params));
}
function isEmptyData(data) {
    const result = [];
    data.forEach((el)=>{
        if (el) result.push(el.result);
    });
    return result;
}
function filterIntersect(data) {
    if (data.length === 0) return [];
    else if (data.length === 1) return (0, _utils.clearDublicateID)(data[0]);
    else {
        let buf = [
            ...data[0]
        ];
        const base = [
            ...data.slice(1, data.length)
        ];
        base.forEach((d)=>{
            buf = buf.filter((el)=>d.includes(el));
        });
        return buf;
    }
}

},{"../api/api":"6eeY2","../api/api_commands":"kzo89","../utils/utils":"ccful","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4L79e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NotifyComponent extends HTMLElement {
    root;
    name;
    content;
    actions = new Array();
    actionDescription;
    constructor(name, content){
        super();
        this.name = name;
        this.content = content;
        this.root = this.attachShadow({
            mode: "open"
        });
        this.root.innerHTML = renderTemplate(content);
    }
    connectedCallback() {
        this.addEventListener("click", ()=>{
            this.actions.forEach((fn)=>{
                fn(this.name);
            });
        });
    }
    attachClickAction(fn, description) {
        this.actions.push(fn);
        this.style.cursor = "pointer";
        if (description) {
            this.actionDescription = description;
            this.addEventListener("mouseenter", ()=>{
                this.root.querySelector("span").innerText = this.actionDescription;
            });
            this.addEventListener("mouseleave", ()=>{
                this.root.querySelector("span").innerText = this.content;
            });
        }
    }
    appendToDOM(parent) {
        parent.appendChild(this);
    }
}
exports.default = NotifyComponent;
if (!customElements.get("nice2jm-notify")) customElements.define("nice2jm-notify", NotifyComponent);
function renderTemplate(content) {
    const html = `
        <span>${content}</span>
    `;
    const css = `
        <style>
            :host{
                display:flex;
                flex-direction:row;
                justify-content:center;
                align-items:center;
                min-width: 70px;
                height:40px;
                padding:1rem;
                border:2px solid rgb(100,100,100);
                border-radius:1rem;
                background: rgb(50,50,10);                
            }
            span{
                margin: 1rem;
                color: rgb(200,200,200);
                font:bold 1rem "Arial";
            }
        </style>
    `;
    return `${html}${css}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}]},["bB8Rd","d4YrJ"], "d4YrJ", "parcelRequire1910")

