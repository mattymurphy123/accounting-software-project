//global variables
const inputStyle = {
  weidth: 235,
  margin: 5
}

//defining parent component with state containing client information to be printed onto invoice
class ClientProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: '',
      priceCharged: '',
      dateTutored: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Form
          clientName={this.state.clientName}
          priceCharged={this.state.priceCharged}
          dateTutored={this.state.dateTutored}
          handleChange={this.handleChange} />
      </div>

    )
  }
}  

//creating a stateless child component to be called for the text inputs that will update the state of the parent component.
class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <input
          type='text'
          value={this.props.clientName}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <input
          type='text'
          value={this.props.priceCharged}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <input
          type='text'
          value={this.props.dateTutored}
          onChange={this.handleChange}
          style={inputStyle}
        />
      </form>
    )
  }
}
