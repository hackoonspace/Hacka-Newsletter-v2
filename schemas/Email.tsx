import { object, string } from 'yup';

const schema = object({
    email: string().required().email(),
    token: string().required()
});

export default schema;