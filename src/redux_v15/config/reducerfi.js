const initialState = {
    types: [
        { id: 1, name: "Iced Coffee" },
        { id: 2, name: "Hot Coffee" },
        { id: 3, name: "New" },
    ],
    coffees: [
        { id: 1, name: "Cappuccino", description: "description of Cappuccino's coffee ", type: 1 },
        { id: 2, name: "Espresso", description: "description of Espresso's coffee ", type: 2 },
        { id: 3, name: "Iced coffee", description: "description of Iced coffee's coffee ", type: 1 },
        { id: 4, name: "Cheesecake", description: "description of Cheesecake's coffee ", type: 3 }
    ],
    coffeesFilter: [] 
};
const reducerfi = (state = initialState, action) => {
    switch (action.type) {
        case "Add_coffee":
            return { ...state, coffees: [...state.coffees, action.payload] };
        case "Update_coffee":
            const updatedCoffees = state.coffees.map((coffee) => {
                if (coffee.id === parseInt(action.payload.id)) {
                    return {
                        ...coffee,
                        name: action.payload.name,
                        description: action.payload.description,
                        type: action.payload.type
                    };
                }
                return coffee;
            });
            return { ...state, coffees: updatedCoffees };

        case "Delete_coffee":
            return { ...state, coffees: [...state.coffees.filter((c) => c.id !== parseInt(action.payload))] };

        case "Filter_coffee":
            return { ...state, coffeesFilter: [...state.coffees.filter((c) => c.type === parseInt(action.payload))] };

        case "Clear_Filter_coffee":
            return { ...state, coffeesFilter: [] };

        default:
            return state;
    }
};
export default reducerfi;