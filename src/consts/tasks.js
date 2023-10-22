import { v4 as uuidv4 } from 'uuid'

export const TASKS = [
    {
        id: uuidv4(),
        title: 'Realizar frontend para API de passwords aleatorios',
        date: new Date(Date.now() - 5 * 60 * 60 * 1000),
        completed: false
    },
    {
        id: uuidv4(),
        title: 'Estudiar todo el temario del tema1 de diseño web',
        date: new Date(Date.now() - 23 * 60 * 60 * 1000),
        completed: false
    },
    {
        id: uuidv4(),
        title: 'Mejorar interfaz de formulario hecho con PHP',
        date: new Date(Date.now() - 12 * 60 * 60 * 1000),
        completed: true
    },
]