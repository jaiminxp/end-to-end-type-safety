import createClient from 'openapi-fetch'
import type { paths } from './api.types'

const { GET, POST, PUT, DELETE } = createClient<paths>({ baseUrl: 'http://localhost:4000' })

GET('/tasks', {
    params: {
        query: {
            completed: true
        }
    }
})

POST('/tasks', {
    body: {
        title: 'New Task',
        description: 'This is a new task',
        completed: false
    }
})
