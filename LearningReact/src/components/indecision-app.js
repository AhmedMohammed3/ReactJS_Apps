import React from 'react';

import Header from './header';
import Action from './action';
import Options from './options';
import AddOption from './add-option';
import OptionModal from './option-modal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            if (options) {
                this.setState(_ => ({
                    options
                }))
            }
        }
        catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options))
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    closeModal = () => {
        this.setState(_ => ({
            selectedOption: undefined
        }))
    }
    handlePick = () => {
        const randomNum = Math.floor(
            Math.random() * this.state.options.length);
        const selectedOption = this.state.options[randomNum];
        this.setState(_ => ({
            selectedOption
        }))
    }

    addOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }


        this.setState(prevState => ({ options: [...prevState.options, option] }));
    }

    deleteOneOption = (optionToRemove) => {
        this.setState(prevState => {
            return { options: prevState.options.filter(option => optionToRemove !== option) }
        })
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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    closeModal={this.closeModal} />
            </div>
        );
    }
}