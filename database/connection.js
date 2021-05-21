const MongoClient = require("mongodb").MongoClient;

const state = {
  db: null,
};

module.exports.connect = (done) => {
  const dbname = "myFirstDatabase";
  const uri =
    process.env.DATABASE_URI_PART_ONE +
    dbname +
    process.env.DATABASE_URI_PART_TWO;

  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, data) => {
      if (err) return done(err);
      state.db = data.db(dbname);
      done();
    }
  );
};

module.exports.get = () => {
  return state.db;
};
