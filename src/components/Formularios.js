import React from 'react';


class Formulario extends React.Component {
    constructor () {
        super();
        this.state = {
            Tittle: '',
            Responsible: '',
            Description: '',
            Priority: "low"
        };
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput (e) {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit (e) {
        e.preventDefault()
        this.props.onAddTodo(this.state)
        console.log('Sending Data....')
    }

    render() {
        return (
            <div className="card"> 
                <form className="card-body" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <input 
                            type="text"
                            name="Tittle"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="Responsible"
                            className="form-control"
                            placeholder="Responsible"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="Description"
                            className="form-control"
                            placeholder="Description"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="Priority"
                            className="form-control"
                            onChange={this.handleInput}
                        >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                        </select>

                    </div>
                    <button type="submit" className="btn btn-primary">
                    Save
                    </button>
                </form>
            </div>
        )
    }
}

export default Formulario