var db = require("./connection");
const objectId = require("mongodb").ObjectID;

module.exports = {
  viewData: () => {
    let result = db.get().collection("ToDoList").find({}).toArray();
    return result;
  },
  addData: (data) => {
    let result = db.get().collection("ToDoList").insertOne(data);
    return result;
  },
  viewById: (data) => {
    let result = db
      .get()
      .collection("ToDoList")
      .findOne({ _id: objectId(data) });
    return result;
  },
  updateById: (data) => {
    let result = db
      .get()
      .collection("ToDoList")
      .updateOne(
        {
          _id: objectId(data._id),
        },
        {
          $set: {
            title: data.title,
            desc: data.desc,
          },
        }
      );
    return result;
  },
  deleteById: (data) => {
    let result = db
      .get()
      .collection("ToDoList")
      .removeOne({ _id: objectId(data.id) });
    return result;
  },
};
