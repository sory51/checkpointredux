export const ADD_TASK = "ADD_TASK"
export const DELETE_TASK = "DELETE_TASK"
export const UPDATE_TASK = "UPDATE_TASK"
export const DONE_TASK = "DONE_TASK"

export function addTask (tasks) {
    return {
        type : ADD_TASK,
        payload : tasks
    }
}

export function deleteTask (tasksId) {
    return {
        type : DELETE_TASK,
        payload : tasksId
    }
}

export function updateTask (tasks) {
    return {
        type : UPDATE_TASK,
        payload : tasks 
    }
}

export function doneTask (tasks) {
    return {
        type : DONE_TASK,
        payload : tasks 
    }
}