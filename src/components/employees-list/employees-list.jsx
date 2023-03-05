import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {
    const createElements = (data) => {
        return data.map((item) => {
            return (
                <EmployeesListItem
                key={item.id}
                {...item}
                onToggleIncrease={() => onToggleIncrease(item.id)}
                onToggleRise={() => onToggleRise(item.id)}
                onDelete={() => onDelete(item.id)}/>
            )
        })
    }
    return (
        <ul className="app-list list-group">
            {createElements(data)}
        </ul>
    )
}

export default EmployeesList;
