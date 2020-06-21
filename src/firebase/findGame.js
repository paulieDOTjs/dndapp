import dbvars from "./dbvars";

import db from "./db";

const findGame = (gameHost) => {
  const games = [];
  if (gameHost) {
    db.collection(dbvars.GameCollection.name)
      .where(dbvars.GameCollection.fields.GAMEHOST === "God")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          games.push(change);
        });
      });
  } else {
    db.collection(dbvars.GameCollection.name).onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        games.push(change);
      });
    });
  }
  return games;
};

export default findGame;
