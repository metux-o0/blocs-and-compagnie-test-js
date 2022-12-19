# blocs-and-compagnie-test-js

# Setup:

- install the project with `npm i` and start the server with `npm run start`

# pouchDb

The database is initialized locally when running the app. But you can also work the data from the file if you want.

Here are the endpoints you can request, just copy paste those requests with curl:

## From local file:

- `curl http://localhost:4000/routes/from-file`
  This will return every routes without the details of their locations

## From local pouchDb

- `curl http://localhost:4000/routes/`
  This will return every routes without the details of their locations

- `curl http://localhost:4000/routes/id/287631248083171e9d577634`
  This will return the route with the id '287631248083171e9d577634'

- `curl http://localhost:4000/routes/with-total-distance`
  In order to get every routes with locations and total distance by route

You can run tests with `npm run:test`
