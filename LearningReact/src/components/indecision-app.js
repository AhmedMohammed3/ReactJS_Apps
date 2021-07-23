import React from 'react';
import { StatusCodes } from 'http-status-codes';

import Header from './header';
import Action from './action';
import Options from './options';
import AddOption from './add-option';

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    }
    componentDidMount() {
        try {
            fetch('http://localhost:12345/main/options', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if (res.status === StatusCodes.NOT_FOUND) {
                        throw new Error(res.msg);
                    }
                    return res.json();
                })
                .then(resData => {
                    console.log(resData);
                    const options = resData.options;
                    if (options) {
                        this.setState(_ => ({
                            options
                        }))
                    }
                })
        }
        catch (e) {
            console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            // put on database
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handlePick = () => {
        const randomNum = Math.floor(
            Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }

    addOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        fetch('http://localhost:12345/main/option', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                optionText: option
            })
        })
            .then(res => {
                if (res.status === StatusCodes.UNPROCESSABLE_ENTITY) {
                    throw new Error(res.msg);
                }
                return res.json();
            })
            .then(resData => {
                console.log(resData);
                const createdOption = resData.createdOption;
                this.setState(prevState => ({ options: [...prevState.options, createdOption] }));
            })
            .catch(err => console.log(err));

    }

    deleteOneOption = (optionIdToRemove) => {
        fetch('http://localhost:12345/main/option/' + optionIdToRemove, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === StatusCodes.INTERNAL_SERVER_ERROR) {
                    throw new Error(res.msg);
                }
                return res.json();
            })
            .then(resData => {
                console.log(resData);
                const deletedOption = resData.deletedOption;
                this.setState(prevState => {
                    return { options: prevState.options.filter(option => optionIdToRemove !== option._id) }
                })
            })
            .catch(err => console.log(err));
    }

    handleDeleteOptions = () => {
        this.setState(_ => ({ options: [] }))
    }

    render() {
        return (
            <div>
                <Header subtitle="Put your life in the hands of a computer" />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options options={this.state.options}
                    deleteOneOption={this.deleteOneOption}
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption addOption={this.addOption} />
            </div>
        );
    }
}
