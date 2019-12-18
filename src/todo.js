import React, { Component } from "react";

class TodoComponent extends Component {
    todo = "Take a break";

    constructor(props) {
        super(props);
        this.state = {
            userName: "Simona",

            selectedTodo: { id: 0, name: "" },

            todoItems: [
                { id: 1, name: "Go to the shopping" },
                { id: 2, name: "Feed the cat" },
                { id: 3, name: "Walk the dog" },
                { id: 4, name: "Buy gas" },
                { id: 5, name: "Take a break" },
                { id: 6, name: "Call mommy" }
            ],
            addItemName: "",
            editItemName: "",
            isEditVisible: "hide"
        };
    }

    addNewTextValue = event => {
        this.setState({ addItemName: event.target.value });
    };

    editNewTextValue = event => {
        this.setState({ editItemName: event.target.value });
    };

    onEditTodo = (e, item) => {
        e.preventDefault();
        console.log("Name " + item.name);
        console.dir(this.state.selectedTodo);
        this.setState({
            selectedTodo: { id: item.id, name: item.name },
            editItemName: item.name,
            isEditVisible: "show"
        });
    };

    onUpdate() {
        let findTodo = this.state.todoItems.find(
            t => t.id === this.state.selectedTodo.id
        );
        if (findTodo) {
            findTodo.name = this.state.editItemName;

            this.setState({
                todoItems: [...this.state.todoItems],
                editItemName: ""
            });
        }
    }

    onAdd() {
        this.setState({
            todoItems: [
                ...this.state.todoItems,
                { id: this.state.todoItems.length + 1, name: this.state.addItemName }
            ],
            addItemName: ""
        });
    }

    render() {
        return (
            <div>
                <h4 className="bg-primary text-white text-center p-2">
                   Lista delle cose da fare di:   {this.state.userName} (
                    {this.state.todoItems.filter(t => !t.done).length} impegni
                </h4>
                <input value={this.state.addItemName} onChange={this.addNewTextValue} />
                <button onClick={() => this.onAdd()}>Aggiungi</button>
                <ul className="todos">
                    {this.state.todoItems.map((item, index) => (
                        <li key={index} onClick={e => this.onEditTodo(e, item)}>
                            <span className="badge">{item.id}</span>
                            {item.name}
                        </li>
                    ))}
                </ul>

                <div className={this.state.isEditVisible}>
                    <fieldset className="editTodo">
                        <legend>{this.state.selectedTodo.name.toUpperCase()} Dettagli</legend>
                        <div>
                            <span>id: </span>
                            {this.state.selectedTodo.id}
                            <br />
                            Name:
                            <input
                                className="todos"
                                value={this.state.editItemName}
                                onChange={this.editNewTextValue}
                            />
                            <button onClick={() => this.onUpdate()}>Aggiorna</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default TodoComponent;
