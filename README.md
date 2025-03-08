# businesstech

to run in local server
```
  npm run start
```
> browser nav http://localhost:8080/

package.json
```
  "scripts": {
    ...
    "start": "nodemon src/server.js"
    },
```

run client using http-server
```
  npx http-server -o business.hbs // FAIL
  npx http-server -o index.html
```