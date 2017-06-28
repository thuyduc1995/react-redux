import { ADD_TODO_TASK, CHANGE_TASK } from '../dashboard/components/todoWidget/todoWidget.action'

export const tasks = (state = {}, action = {}) => {
    switch (action.type) {
        case ADD_TODO_TASK:
            return [
                ...state,
                {
                    id: action.taskId,
                    task: action.content,
                    isCompleted: false,
                    userId: 1
                }
            ]
        case CHANGE_TASK: {
            return state.map(task => {
                if (task.id === action.taskId) {
                    return {
                        ...task,
                        isCompleted: !task.isCompleted
                    }
                }

                return {
                    ...task
                }
            })
        }

        default: return state
    }

}


