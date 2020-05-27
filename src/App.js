import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tareas } from './tasks.json';
import Formulario from './components/Formularios';


// import Navigation from './components/navigation';  // Quedara como comment de como se hacen con modulos

////// ES MUY IMPORTANTE ESTE COMENTARIO YA QUE LA SINTAXIS POR DEFAULT AL BAJAR REACT ES ESTA QUE ESTA COMENTADA, Entonces para poder agregar el constructor =
// Tienes que crear una clase, es por eso que cambie toda la sintaxis a la que esta en la parte de abajo comenzando en la linea 20 ////////////////
// function App() {
//   return (
//     <div className="App">
    
//     <Navigation title="Tasks" ></Navigation>

//       <img src={logo} className="App-logo" alt="logo" />
//     </div>
//   );
// }

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      tareas: tareas
    }
    this.handleAddTarea = this.handleAddTarea.bind(this)
  }

  handleAddTarea(tarea){
    this.setState({
      tareas: [...this.state.tareas, tarea]
    })
  }

  handleRemove(index) {
    this.setState ({
      tareas: this.state.tareas.filter((e,i) => {
        return i !== index
      })
    })
    console.log(index)
  }

  render () {
    const tareas = this.state.tareas.map((tarea, i ) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{tarea.Tittle}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {tarea.Priority}
              </span>
            </div>
            <div className="card-body">
              <p>{tarea.Description}</p>
              <p><strong>{tarea.Responsible}</strong></p>
            </div>
            <div className="card-footer">
            <button className="btn btn-danger" onClick={this.handleRemove.bind(this, i)}>
            Delete</button>
            </div>
          </div>
        </div>
      )
    })

    return (
  <div className="App">
    
    <nav className="navbar navbar-dark bg-dark">
      <a href="/" className="text-white"> 
        Tasks
        <span className="badge badge-pill badge-light ml-2" >
          {this.state.tareas.length}
        </span>
      </a>
    </nav>
      
    <div className="container">
    <div className="row mt-4">
      <div className="col-md-3 text-center">
        <img src={logo} className="App-logo" alt="logo" />
          <Formulario onAddTodo={this.handleAddTarea}></Formulario>
        </div>
        <div className="col-md-8">
          <div className="row">
            { tareas }
          </div>
        </div>
    </div>
    </div>
  </div>
    )
  }
}

export default App;