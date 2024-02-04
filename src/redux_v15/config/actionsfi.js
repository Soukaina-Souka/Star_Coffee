export const addCoffeeAction = (coffee) => {
    return { type: "Add_coffee", payload: coffee }
}
export const updateCoffeeAction = (newcoffee) => {
    return { type: "Update_coffee", payload: newcoffee }
}
export const deleteCoffeeAction = (id) => {
    return { type: "Delete_coffee", payload: id }
}
export const filterCoffeeAction = (idtype) => {
    return { type: "Filter_coffee", payload: idtype }
}
export const clearFilterCoffeeAction = () => {
    return { type: "Clear_Filter_coffee" }
}
