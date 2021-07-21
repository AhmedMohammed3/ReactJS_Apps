class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.addOption = this.addOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options: ['Item 1', 'Item 2', 'Item 3']
        }
    }
    handlePick() {
        let randomNum = Math.floor(
            Math.random * this.state.options.length);
        alert(this.state.options[randomNum]);
    }
    addOption(option) {
        this.setState(prevState => {
            return {
                options: [...prevState.options, option]
            }
        })
    }
    handleDeleteOptions() {
        this.setState(_ => {
            return {
                options: []
            }
        })
    }
    render() {
        return (
            <div>
                <Header title="Indecision App"
                    subtitle="Put your life in the hands of a computer" />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption addOption={this.addOption} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >What should I do?</button>
            </div>
        );
    }
}


class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}
                >Remove All</button>
                <p>{this.props.options.length}</p>
                <ol>
                    {
                        this.props.options.map(option => {
                            return (
                                <Option key={option} option={option} />
                            );
                        })
                    }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.option}</li>
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.trim();
        if (option) {
            this.props.addOption(option);
        }
        e.target.elements.option = '';
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));