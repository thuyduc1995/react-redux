const initialState = {
    dashboard: {
        title: 'My Dashboard',
        layoutColumn: 3,
        widgets: [
            {
                title: 'widget 1'
            },
            {
                title: 'widget 2'
            },
            {
                title: 'widget 3'
            }
        ]
    }
}


export const dashboard = (state = {initialState}) => {
    return state
}
