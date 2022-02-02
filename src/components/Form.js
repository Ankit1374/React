import React, {Component} from 'react';
import FormValidator from './FormValidator';
class Form extends Component{
constructor(){
super();
this.validator = new FormValidator([{
field: 'name',
method: 'isEmpty',
validWhen: false,
message: 'Please enter name.'
}, {
field: 'email',
method: 'isEmpty',
validWhen: false,
message: 'Please enter your email address.'
}, {
field: 'email',
method: 'isEmail',
validWhen: true,
message: 'Please enter valid email address.'
}, {
field: 'phone',
method: 'isEmpty',
validWhen: false,
message: 'Please enter a phone number.'
}, {
field: 'phone',
method: 'matches',
args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
validWhen: true,
message: 'Please enter valid phone number.'
}, {
field: 'password',
method: 'isEmpty',
validWhen: false,
message: 'Enter password.'
}]);
    this.state = {
    name: '',
    email: '',
    phone: '',
    password: '',
    validation: this.validator.valid(),
    }
    this.submitted = false;
    }
    handleInputChange = event => {
    event.preventDefault();
    this.setState({
    [event.target.name]: event.target.value,
    });
    }
    handleFormSubmit = event => {
        event.preventDefault();
        const validation = this.validator.validate(this.state);
        this.setState({
        validation
        });
        this.submitted = true;
        if(validation.isValid) {
        }
        const emailInput = event.target.email;
        const nameInput = event.target.name;

        alert(emailInput.value);
        alert(nameInput.value);
        }
        render() {
        let validation = this.submitted ?this.validator.validate(this.state) : this.state.validation
        return (
        <div className="container">
        <div className="row">
        <div className="col-md-4 col-md-offset-4">
        <form className="registrationForm">
        <h2>Registration Page</h2>
        <div className={validation.email.isInvalid && 'has-error'}>
        <label htmlFor="name">Name</label>
        <input type="string" className="form-control" name="name" placeholder="Name" onChange={this.handleInputChange} /> <span className="help-block">{validation.name.message}</span> </div>
        <div className={validation.email.isInvalid && 'has-error'}>
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" name="email" placeholder="Email address" onChange={this.handleInputChange} /> <span className="help-block">{validation.email.message}</span> </div>
        <div className={validation.phone.isInvalid && 'has-error'}>
        <label htmlFor="phone">Phone Number</label>
        <input type="phone" className="form-control" name="phone" placeholder="Phone Number" onChange={this.handleInputChange} /> <span className="help-block">{validation.phone.message}</span> </div>
        <div className={validation.password.isInvalid && 'has-error'}>
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleInputChange} /> <span className="help-block">{validation.password.message}</span> </div>
        <button onClick={this.handleFormSubmit} className="btn btn-primary"> Register </button>
        </form>
        </div>
        </div>
        </div>
        )
        }
        }
        export default Form;
