class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.addOption = this.addOption.bind(this);
        this.deleteOneOption = this.deleteOneOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options: []
        }
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

    handlePick() {
        const randomNum = Math.floor(
            Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }

    addOption(option) {

        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }


        this.setState(prevState => ({ options: [...prevState.options, option] }));
    }

    deleteOneOption(optionToRemove) {
        this.setState(prevState => {
            return { options: prevState.options.filter(option => optionToRemove !== option) }
        })
    }

    handleDeleteOptions() {
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

const Header = props => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>

)

Header.defaultProps = {
    title: 'Indecision App'
}

const Action = props => (
    <div>
        <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >What should I do?</button>
    </div>
)


const Options = props => (
    <div>
        <button onClick={props.handleDeleteOptions}
        >Remove All</button>
        {props.options.length <= 0 && <p>No Options Available</p>}
        {
            props.options.map(option => {
                return (
                    <Option key={option}
                        option={option}
                        deleteOneOption={props.deleteOneOption}
                    />
                );
            })
        }

    </div>
)


const Option = props => (
    <div>
        {props.option}
        <button
            onClick={(e) => {
                props.deleteOneOption(props.option)
            }}>
            remove
        </button>
    </div>
)


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        this.setState(() => ({ error }));

        if (!error) e.target.elements.option.value = '';
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));