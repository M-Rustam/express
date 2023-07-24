import  {Router} from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';
import userDeleteById from './userDeleteById';
import userDeleteAll from './userDeleteAll';


const router = Router();

router.post('/', userRegister); //POST localhost:5000/user
router.get('/', userGetAll); //GET localhost:5000/user
router.get('/:userId', userGetById); //GET localhost:5000/user/64bde3f8f82bb4c9bf0271e3
router.patch('/:userId', userUpdateById); //PATCH localhost:5000/user/64bde3f8f82bb4c9bf0271e3
router.delete('/:userId', userDeleteById); //Delete localhost:5000/user/64bde3f8f82bb4c9bf0271e3
router.delete('/', userDeleteAll); //Delete localhost:5000/user


export default router;
