export const actionType = {
    GET_COLOR: "GET_COLOR",
    GET_COLOR_SUCCESS: "GET_COLOR_SUCCESS",
}

const getColor = () => ({
    type: actionType.GET_COLOR
})

export { getColor }