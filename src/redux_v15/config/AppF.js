import '../config/AppF.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoffeeAction, updateCoffeeAction, deleteCoffeeAction, filterCoffeeAction, clearFilterCoffeeAction } from "./actionsfi";
function AppF() {
    const types = useSelector((data) => data.types);
    const coffees = useSelector((data) => data.coffees);
    const coffeesFilter = useSelector((data) => data.coffeesFilter);
    const listecoffeesmap = coffeesFilter.length > 0 ? coffeesFilter : coffees;
    const indexCoffee = coffees.length;
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState(1);
    const [typeFilter, setTypeFilter] = useState(1);
    const dispatch = useDispatch();
    const handleEnregistrer = () => {
        dispatch(
            addCoffeeAction({
                id: indexCoffee + 1,
                name: name,
                description: description,
                type: type,
            })
        );
        handleClear();
    };
    const handleClear = () => {
        setId("");
        setName("");
        setDescription("");
        setType(1);
    };
    const handleRemplirForm = (id) => {
        const coffee = coffees.find((u) => u.id === parseInt(id, 10));
        setId(id);
        setName(coffee.name);
        setDescription(coffee.description);
        setType(coffee.type);
    };
    const handleModifier = () => {
        dispatch(
            updateCoffeeAction({
                id: id,
                name: name,
                description: description,
                type: type,
            })
        );
        handleClear();
    };
    const handleDelet = (id) => {
        dispatch(deleteCoffeeAction(id));
    };
    const handleFilter = () => {
        dispatch(filterCoffeeAction(typeFilter));
    };
    const handleFilterClear = () => {
        dispatch(clearFilterCoffeeAction());
    };
    return (
        <div className="App">
            <h1>Star Coffee List2</h1>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    {types.map((type) => (
                        <option key={type.id} value={type.id}>
                            {type.name}
                        </option>
                    ))}
                </select>
                {id ? <button onClick={() => handleModifier()}>Modifier</button> : <button onClick={() => handleEnregistrer()}>Enregistrer</button>}
                <button onClick={() => handleClear()}>Clear</button>
            </div>
            <div>
                <label>Filterr par type</label>
                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                    {types.map((type) => (
                        <option key={type.id} value={type.id}>
                            {type.name}
                        </option>
                    ))}
                </select>
                <button onClick={() => handleFilter()}>Filterr</button>
                <button onClick={() => handleFilterClear()}>Clear</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Type</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {listecoffeesmap.map((coffee, index) => {
                        const type = types.find((t) => t.id === coffee.type);
                        return (
                            <tr key={index}>
                                <td>{coffee.id}</td>
                                <td>{coffee.name}</td>
                                <td>{coffee.description}</td>
                                <td>{type ? type.name : "Unknown Type"}</td>
                                <td>
                                    <button onClick={() => handleRemplirForm(coffee.id)}>Modifier</button>
                                    <button onClick={() => handleDelet(coffee.id)}>Supprimer</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default AppF;