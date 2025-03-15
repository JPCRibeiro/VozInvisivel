import { denuncias } from "../models/index.js";

class DenunciasController {
  static async cadastrarDenuncia(req, res, next) {
    try {
      let denuncia = new denuncias(req.body);
      const denunciaResultado = await denuncia.save();
      res.status(201).send(denunciaResultado.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static async listarDenuncias(req, res, next) {
    try {
      const denunciasResultado = await denuncias.find();
      res.status(200).json(denunciasResultado);
    } catch (error) {
      next(error);
    }
  };

  static async listarDenunciaPorId(req, res, next) {
      try {
        const id = req.params.id;
        const denunciaResultado = await denuncias.findById(id);
  
        if (denunciaResultado !== null) {
          res.status(200).send(denunciaResultado);
        } 
      } catch (error) {
        next(error);
      }
    };
}

export default DenunciasController;