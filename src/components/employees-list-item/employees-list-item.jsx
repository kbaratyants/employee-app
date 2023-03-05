import './employees-list-item.css';

const EmployeesListItem = (props) => {
    const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise } = props;

    return <li className={`list-group-item d-flex justify-content-between ${increase ? "increase" : ''} ${rise ? "like" : ''}`}>
        <span onClick={onToggleRise} className="list-group-item-label">{name}</span>
        <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
                className="btn-cookie btn-sm "
                onClick={onToggleIncrease}>
                <i className="fas fa-cookie"></i>
            </button>

            <button type="button"
                    onClick={onDelete}
                    className="btn-trash btn-sm ">
                <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
        </div>
    </li>
}

export default EmployeesListItem;