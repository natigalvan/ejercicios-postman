const axios = require("axios");

class UserController {
  constructor() {
    this.names = [];
  }

  getUser(req, res) {
    console.log(this.names);
    res.json(this.names);
  }

  postUser(req, res) {
    const { body, headers } = req;

    if (body.name && headers.token == "r2d2") {
      console.log(body.name);
      this.names.push(body.name);
      console.log(this.names);
      res.status(200).send("usuario agregado con éxito");
    } else if (headers.token != "r2d2") {
      res.status(401).send("el token no existe o es incorrecto");
    } else if (!body.name) {
      res.status(400).send("falta el nombre");
    }
  }

  modifyUser(req, res) {
    const { body } = req;

    if (body.index && body.newName) {
      this.names.splice(body.index, 1, body.newName);
      // Por que no funciona esto?
      // this.names[body.index] = body.newName;
      // console.log(body.newName);
      console.log(this.names);
      res.status(200).send("usuario modificado");
    } else {
      res.status(400).send("falta información");
    }
  }

  deleteUser(req, res) {
    const userNumber = req.params.indice - 1;
    if (userNumber >= 0 && this.names[userNumber]) {
      this.names.splice(userNumber, 1);
      console.log(this.names);
      res
        .status(200)
        .send(`Se borró al usuario en la posicion ${req.params.indice}`);
    } else if (!userNumber) {
      res.status(400).send("falta el numero de usuario para borrar");
    } else if (!this.names[userNumber]) {
      res.status(400).send("no existe el numero usuario");
    }
  }
}

module.exports = UserController;
