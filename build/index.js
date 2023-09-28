var __defProp = Object.defineProperty;
var __require = /* @__PURE__ */ ((x) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(x, {
  get: (a, b) => (typeof require < "u" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require < "u")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => Root
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload
} from "@remix-run/react";

// app/LoggedIn/index.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";

// app/LoggedOut/LoginForm/index.tsx
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var LoginForm = () => {
  let { address, connector, isConnected } = useAccount(), { data: ensName } = useEnsName({ address }), { connect, connectors, error, isLoading, pendingConnector } = useConnect(), { disconnect } = useDisconnect();
  return isConnected ? /* @__PURE__ */ jsxDEV3("div", { children: [
    /* @__PURE__ */ jsxDEV3("div", { children: ensName ? `${ensName} (${address})` : address }, void 0, !1, {
      fileName: "app/LoggedOut/LoginForm/index.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { children: [
      "Connected to ",
      connector?.name
    ] }, void 0, !0, {
      fileName: "app/LoggedOut/LoginForm/index.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("button", { onClick: () => disconnect(), children: "Disconnect" }, void 0, !1, {
      fileName: "app/LoggedOut/LoginForm/index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/LoggedOut/LoginForm/index.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV3("div", { children: [
    connectors.map((connector2) => /* @__PURE__ */ jsxDEV3(
      "button",
      {
        onClick: () => connect({ connector: connector2 }),
        children: [
          connector2.name,
          !connector2.ready && " (Not Ready To Connect)",
          isLoading && connector2.id === pendingConnector?.id && " (connecting)"
        ]
      },
      connector2.id,
      !0,
      {
        fileName: "app/LoggedOut/LoginForm/index.tsx",
        lineNumber: 26,
        columnNumber: 11
      },
      this
    )),
    error && /* @__PURE__ */ jsxDEV3("div", { children: error.message }, void 0, !1, {
      fileName: "app/LoggedOut/LoginForm/index.tsx",
      lineNumber: 40,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/LoggedOut/LoginForm/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}, LoginForm_default = LoginForm;

// app/LoggedOut/index.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var LoggedOut = () => {
  let handleLogIn = () => {
  };
  return /* @__PURE__ */ jsxDEV4("div", { children: [
    /* @__PURE__ */ jsxDEV4("div", { children: [
      /* @__PURE__ */ jsxDEV4("h1", { children: "Welcome to [Project Name]!" }, void 0, !1, {
        fileName: "app/LoggedOut/index.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("h2", { children: "\u{1F389} Dive into the future of digital art and collectibles with [Project Name] - a unique and groundbreaking NFT collection that stands at the intersection of creativity, technology, and innovation." }, void 0, !1, {
        fileName: "app/LoggedOut/index.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { children: [
        /* @__PURE__ */ jsxDEV4("h3", { children: "\u{1F5BC} What's [Project Name] all about?" }, void 0, !1, {
          fileName: "app/LoggedOut/index.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { children: "Our project is more than just pixels and code; it's a blend of passion, artistic vision, and the endless possibilities of the blockchain. By becoming a part of our community, you are not only securing a piece of digital art but also supporting the ever-evolving landscape of digital creators and enthusiasts." }, void 0, !1, {
          fileName: "app/LoggedOut/index.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/LoggedOut/index.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { children: [
        /* @__PURE__ */ jsxDEV4("h3", { children: "\u{1FA84} Ready to Mint Your Token?" }, void 0, !1, {
          fileName: "app/LoggedOut/index.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { children: "You're in the right place! This is the dedicated space where you can mint new tokens, expanding your collection and securing a piece of [Project Name]'s legacy. Just follow the instructions below, and you'll be the proud owner of a unique NFT in no time!" }, void 0, !1, {
          fileName: "app/LoggedOut/index.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/LoggedOut/index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { children: [
        /* @__PURE__ */ jsxDEV4("h3", { children: "\u{1F4A1} Not Familiar with NFTs?" }, void 0, !1, {
          fileName: "app/LoggedOut/index.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { children: "No worries! NFT stands for Non-Fungible Token. In simpler terms, it's a one-of-a-kind digital asset verified by blockchain technology, ensuring its authenticity and uniqueness. Think of it as a collectible digital trading card or artwork!" }, void 0, !1, {
          fileName: "app/LoggedOut/index.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/LoggedOut/index.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { children: [
        /* @__PURE__ */ jsxDEV4("h3", { children: "\u{1F91D} Join Our Community!" }, void 0, !1, {
          fileName: "app/LoggedOut/index.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { children: "The real magic happens when enthusiasts like you come together. Connect with fellow collectors, share your insights, and stay updated on the latest [Project Name] news and releases by joining our community channels." }, void 0, !1, {
          fileName: "app/LoggedOut/index.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/LoggedOut/index.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { children: "Thank you for being a part of this journey with us. Let's mint the future together! \u{1F680}" }, void 0, !1, {
        fileName: "app/LoggedOut/index.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/LoggedOut/index.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("br", {}, void 0, !1, {
      fileName: "app/LoggedOut/index.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4(LoginForm_default, {}, void 0, !1, {
      fileName: "app/LoggedOut/index.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/LoggedOut/index.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this);
}, LoggedOut_default = LoggedOut;

// app/App/index.tsx
import { configureChains, createConfig, mainnet, WagmiConfig } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
typeof window < "u" && (window.Buffer = window.Buffer || __require("buffer").Buffer);
var { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
), config = createConfig({
  autoConnect: !0,
  connectors: [
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi"
      }
    }),
    new MetaMaskConnector({
      chains,
      options: {
        shimDisconnect: !0
      }
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        getProvider() {
          if (typeof window < "u" && window.ethereum)
            return window.ethereum;
        },
        shimDisconnect: !0
      }
    })
  ],
  publicClient,
  webSocketPublicClient
}), App = () => /* @__PURE__ */ jsxDEV5(WagmiConfig, { config, children: /* @__PURE__ */ jsxDEV5(LoggedOut_default, {}, void 0, !1, {
  fileName: "app/App/index.tsx",
  lineNumber: 56,
  columnNumber: 35
}, this) }, void 0, !1, {
  fileName: "app/App/index.tsx",
  lineNumber: 55,
  columnNumber: 7
}, this), App_default = App;

// app/root.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Root() {
  return /* @__PURE__ */ jsxDEV6("html", { children: [
    /* @__PURE__ */ jsxDEV6("head", { children: [
      /* @__PURE__ */ jsxDEV6(
        "link",
        {
          rel: "icon",
          href: "data:image/x-icon;base64,AA"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 18,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("body", { children: [
      /* @__PURE__ */ jsxDEV6(App_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV6(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV6(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV6(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7TBY4QJC.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-ER7PLH5W.js", "/build/_shared/chunk-ONWUGS7F.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-G2ATKMJI.js", imports: ["/build/_shared/chunk-H5TQA62F.js", "/build/_shared/chunk-HJXDG4R7.js", "/build/_shared/chunk-CSQX3O44.js", "/build/_shared/chunk-F2MW2ORK.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "e0c75fd2", hmr: { runtime: "/build/_shared/chunk-ONWUGS7F.js", timestamp: 1695923703150 }, url: "/build/manifest-E0C75FD2.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
