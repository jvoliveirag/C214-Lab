const mongoose = require("mongoose");

const uri = `mongodb+srv://admin:admin@cluster0.pqwejg4.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { Schema } = mongoose;

const UserSchema = new Schema({
  id: {
    type: String,
    index: true,
    unique: true,
  },
  Produtor: {
    type: String,
    unique: true,
  },
  nome: String,
  Protagonista: String,
  ano: String,
});

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = {
  UserModel,
};
