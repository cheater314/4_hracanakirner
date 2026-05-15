import { Router } from 'express';

import controller from '../controllers/users.js';

const router = Router();

router.get('/profile', controller.profile);
router.post('/login', controller.login);

router.get(
    '/list',
    authorization,
    validation(schema.getUsersList, 'query'),
    controller.getUsersList,
);

// views
router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

export default router;

