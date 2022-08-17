/*
import axios from "axios";


const setting = {
    withCredentials: true,
    headers: {
        "API-KEY": "****"
    }
}
const instance = axios.create({
    baseURL:'https://*******',
    ...setting
})


//API
export const nameAPI = {
    getParams() {
        return instance.get<Type<Her>>('params-params')
    },
    createParams() {
        return instance.post<ResponseType<{ item: ParamsType }>>('params-params', {title: title})
    },
    deleteParams() {
        return instance.delete<ResponseType>(`params-params/${paramId}`)
    },
    updateParams() {
        return instance.put<ResponseType>(`params-params/${paramId}`, {par: par})
    },
    }



export const authAPI = {
    login(data:LoginParamsType){
        return instance.post<ResponseType<{ userId?: number }>>('auth/login', data)
    },
    logout(){
        return instance.delete<ResponseType<{ userId?: number }>>('auth/login')
    },
    me(){
        return instance.get<ResponseType<{ id: number, email:string, login:string }>>('auth/me')
    }
}


//types
export  type LoginParamsType={
    email:string
    password:string
    rememberMe:boolean
    captcha?:string
}

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
export enum TaskStatuses {
    New=0,
    InProgress  =1,
    Completed=2,
    Draft=3,
    Del=4
}/////const a:TaskStatuses=TaskStatuses.Completed
export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}
export type ResponseType<D ={}> = {
    resultCode: number
    messages: string[],
    data: D
}
export type UpdateTaskModelType ={
    title: string
    description: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
}
export type TaskType = {
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string

}
type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}*/

export {}