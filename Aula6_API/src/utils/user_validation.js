const create = {
  nome: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
  },
  produtor: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
  },
  protagonista: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
  },
  ano: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
  },
};

const update = {
  nome: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
  },
  produtor: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
  },
};

const get = {
  produtor: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
  },
};

const deleteBy = {
  produtor: {
    presence: {
      allowEmpty: false,
    },
    type: "string",
  },
};

module.exports = {
  update,
  create,
  get,
  deleteBy,
};
