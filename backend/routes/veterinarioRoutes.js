import express from 'express';
const router = express.Router();
import { 
    registrar, 
    perfil, 
    confirmar, 
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword
} from '../controllers/veterinarioController.js';
//import checkAuth from '../middleware/authMiddleware.js';
import checkAuth from '../middleware/authMiddleware.js'

//area publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar); //se envia un parametro dinamico con :token debe ser el mismo nombre que fue creado en el controllers.
router.post("/login", autenticar);
router.post('/olvide-password', olvidePassword);
// router.get('/olvide/password/:token', comprobarToken);
// router.post('/olvide/password/:token', nuevoPassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword); //Channing


//area privada
router.get("/perfil",checkAuth, perfil);

export default router;
