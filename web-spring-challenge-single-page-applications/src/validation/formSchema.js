import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().required('name is required'),
    size: yup.string().required('size is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
    peppers: yup.boolean(),
    instructions: yup.string(),
})