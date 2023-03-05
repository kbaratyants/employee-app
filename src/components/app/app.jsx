import { Component } from 'react';
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: true, rise: false, id: nextId()},
                {name: 'Alex M.', salary: 3000, increase: false, rise: false, id: nextId()},
                {name: 'Carl W.', salary: 15000, increase: true, rise: false, id: nextId()},
            ],
            term: '',
            filter: 'all',
        }
    }

    deleteItem = (id) => {
        this.setState((({data}) => {
            return {
                data: data.filter(item => item.id !== id),
            }
        }));
    }

    addItem = ({ name, salary }) => {
        if (name.length < 3 || salary <= 0) {
            return;
        }
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: nextId(),
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            }
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, increase: !old.increase};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr,
            }
        })
    }

    onToggleRise = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, rise: !old.rise};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr,
            }
        })
    }

    onToggleFilter = (filter) => {
        this.setState({ filter });
    }

    filteredEmployees = () => {
        const { data, filter } = this.state;
        
        switch (filter) {
            case 'increase':
                return data.filter(item => item.increase);
            case 'bigSalary':
                return data.filter(item => item.salary >= 1000);
            default:
                return data;
        }
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    render() {
        const { data, term, filter } = this.state;
        const increaseEmployees = data.filter(item => item.increase);
        const  visibleData = this.searchEmp(this.filteredEmployees(), term);

        return (
            <div className='app'>
                <AppInfo
                    employeesCount={data.length}
                    increaseEmployeesCount={increaseEmployees.length}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onToggleFilter={this.onToggleFilter}/>
                </div>
    
                <EmployeesList 
                    data={visibleData } 
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm addItem={this.addItem}/>
            </div>
        );
    }
}

export default App;