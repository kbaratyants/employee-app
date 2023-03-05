import './app-filter.css';

const AppFilter = (props) => {

    const buttonsDate = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'increase', label: 'На повышение'},
        {name: 'bigSalary', label: 'З/п больше 1000$'},
    ]

    const buttons = buttonsDate.map(({name, label}) => {
        const active = name === props.filter;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button 
                type="button" 
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onToggleFilter(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;