import user from '../controller/user_controller';

export default function indexRoute(server:any, options:any, next:any) {
    server.get('/', async (req:any, res:any) => {
        return user.getAll(req, res);
    });

    // server.post('/', (req:any, res:any) => {
    //     res.code(201).send({ method: 'post' });
    // });

    // server.put('/', (req:any, res:any) => {
    //     res.code(200).send({ method: "put" });
    // });

    // server.delete('/', (req:any, res:any) => {
    //     res.code(200).send({ method: 'delete' });
    // });

    next();
};