import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
    const createElements = (data) => {
        return data.map((item) => {
            return (
                <EmployeesListItem key={item.id} {...item}/>
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