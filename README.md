Run `pnpm start`

Hit `localhost:3000`

Observe async storage persists into tap

May have something to do with the async local storage being managed by the AppService? Should try and move it to a lib. Have tested elsewhere with a lib and the storage does not persist, but not sure if that's really the cause and why.
