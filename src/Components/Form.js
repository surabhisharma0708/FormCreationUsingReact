import { Component, useState, React } from 'react'
import '../App.css'
import { FormErrors } from './FormErrors';
export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            first: '',
            last: '',
            phone: '',
            email: '',
            add: '',
            city: '',
            states: '',
            zip: '',
            formErrors: { first: '', last: '', phone: '', email: '', add: '', city: '', states: '', zip: '' },
            firstValid: false,
            lastValid: false,
            phoneValid: false,
            emailValid: false,
            addValid: false,
            cityValid: false,
            statesValid: false,
            zipValid: false,
            formValid: false,
        }
    }


    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstValid = this.state.firstValid;
        let lastValid = this.state.lastValid;
        let phoneValid = this.state.phoneValid;
        let emailValid = this.state.emailValid;


        let addValid = this.state.addValid;
        let cityValid = this.state.cityValid;
        let statesValid = this.state.statesValid;
        let zipValid = this.state.zipValid;

        switch (fieldName) {
            case 'first':
                firstValid = value.length > 0;
                fieldValidationErrors.phone = phoneValid ? '' : 'first name is empty';
                break;

            case 'last':
                firstValid = value.length > 0;
                fieldValidationErrors.phone = phoneValid ? '' : 'last name is empty';
                break;

            case 'phone':
                phoneValid = value.length == 10;
                fieldValidationErrors.phone = phoneValid ? '' : ' is too short';
                break;

            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'add':
                firstValid = value.length > 0;
                fieldValidationErrors.phone = phoneValid ? '' : 'Please fill your address';
                break;
            case 'city':
                firstValid = value.length > 0;
                fieldValidationErrors.phone = phoneValid ? '' : 'Please fill your city name';
                break;
            case 'states':
                firstValid = value.length > 0;
                fieldValidationErrors.phone = phoneValid ? '' : 'Please fill your state name';
                break;
            case 'zip':
                phoneValid = value.length == 6;
                fieldValidationErrors.phone = phoneValid ? '' : 'zip code is not valid';
                break;
            default:
                break;

        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            phoneValid: phoneValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.phoneValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }
    render() {
        return (
            <>
                <div className='contain'>

                    <h1>Contact Details</h1>
                    <br />
                    <form>
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>
                        <div className='row'>
                            <div className="col-md-3">
                                <label>First Name</label>
                                <input type="text" className="form-control" placeholder='First Name' name='first' value={this.state.first} onChange={(event) => this.handleUserInput(event)} />

                            </div>
                            <div className="row col-md-3">
                                <label>Last Name</label>
                                <input type="text" className="form-control" id="inputLastName4" placeholder='Last Name' name='last' value={this.state.last} onChange={(event) => this.handleUserInput(event)} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label>Contact No.</label>

                            <input type="tel" className="form-control" id="inputNumber" placeholder='Phone Number' name='phone' value={this.state.phone} onChange={(event) => this.handleUserInput(event)} />
                        </div>
                        <div className="col-6">
                            <label>Email id</label>
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" name='email' value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
                        </div>

                        <div className="col-6">
                            <label>Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" name='add' value={this.state.add} onChange={(event) => this.handleUserInput(event)} />
                        </div>
                        <div className="col-md-6">
                            <label>City</label>
                            <input type="text" className="form-control" id="inputCity" placeholder='Enter City' name='city' value={this.state.city} onChange={(event) => this.handleUserInput(event)} />
                        </div>
                        <div className="col-md-6">
                            <label>State</label>
                            <input type="text" className="form-control" id="inputCity" placeholder='Enter State' name='states' value={this.state.states} onChange={(event) => this.handleUserInput(event)} />
                        </div>
                        {/* <div className="col-md-4">
                        <label>Storage Medium</label>
                        <select id="inputState" className="form-select" >
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div> */}

                        <div className="col-md-4">
                            <label>Zip Code</label>
                            <input type="text" className="form-control" id="inputZip" placeholder='Enter Zip Code' name='zip' value={this.state.zip} onChange={(event) => this.handleUserInput(event)} />
                        </div>

                        <br />

                        <div className="col12">
                            <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Submit</button>
                        </div>
                    </form>

                </div >


            </>
        )
    }
}
