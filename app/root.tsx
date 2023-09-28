import React from 'react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
} from '@remix-run/react';
import App from './App';

export default function Root() {
  //TODO: Hook with wagner, decide to render logged in based on result
  const loggedIn = false;

  return (
      <html>
      <head>
        <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
        />
        <Meta/>
        <Links/>
      </head>
      <body>

      <App />

      <Outlet/>
      <Scripts/>
      <LiveReload/>
      </body>
      </html>
  );
}
