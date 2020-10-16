import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import PizzaForm from './PizzaForm.js'
import Home from './Home.js'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/formSchema.js'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  peppers: false,
  instructions: '',
};

const initialFormErrors = {
  name: '',
  size: '',
};

const initialPizzas = [];
const initialDisabled = true;

function App() {
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewPizza = newPizza => {
    axios.post(`https://reqres.in/api/pizzas`, newPizza)
      .then(res => {
        console.log(res)
        setPizzas([...pizzas, res.data])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
        setFormErrors(initialFormErrors)
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors, [name]: "",
        })
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      mushrooms: formValues.mushrooms,
      peppers: formValues.peppers,
      instructions: formValues.instructions.trim(),
    }
    postNewPizza(newPizza);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues]);

  return (
    <div>

      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/pizza'}>Pizza?</Link> 
        </div>
      </nav>

      <Switch>
        
        <Route path={'/pizza'}>
          <PizzaForm
            values={formValues}
            submit={formSubmit}
            change={inputChange}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route exact path='/'>
          <Home />
        </Route>

      </Switch>



    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
