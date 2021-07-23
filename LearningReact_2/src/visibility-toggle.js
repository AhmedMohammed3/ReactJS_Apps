class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState(prevState => {
            return { visibility: !prevState.visibility }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide' : 'Show'} details</button>

                {this.state.visibility && <p>Hey, These are some details you can see</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle title="Visibility Toggle" />, document.getElementById('app'));