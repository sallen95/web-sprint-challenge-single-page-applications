import React from 'react'

function PizzaForm(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Order your Pizza</h2>

                <label>Name 
                    <input 
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onChange}
                        placeholder='Enter your name'
                    />
                </label><br/>

                <h3>Size of Pizza</h3>

                <label>
                    <select name='size' value={values.size} onChange={onChange}>
                        <option value=''>-- Select a Size --</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label><br/>

                <h3>Add Toppings</h3>

                <label>Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                </label><br/>

                <label>Sausage
                    <input 
                        type='checkbox'
                        name='sausage'
                        checked={values.sausage}
                        onChange={onChange}
                    />
                </label><br/>

                <label>Mushrooms
                    <input 
                        type='checkbox'
                        name='mushrooms'
                        checked={values.mushrooms}
                        onChange={onChange}
                    />
                </label><br/>

                <label>Bell Peppers
                    <input 
                        type='checkbox'
                        name='peppers'
                        checked={values.peppers}
                        onChange={onChange}
                    />
                </label><br/>

                <h3>Special Instructions</h3>

                <label>
                    <input 
                        type='text'
                        name='instructions'
                        value={values.instructions}
                        onChange={onChange}
                        placeholder="Anything else you'd like to add?"
                    />
                </label><br/>
            </div>
            <div className='form-submit'>
                <button id='submitButton' disabled={disabled}>Add to Order</button>
            </div>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
            </div>
        </form>
    )


}

export default PizzaForm;