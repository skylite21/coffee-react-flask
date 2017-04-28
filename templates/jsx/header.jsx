class Header extends React.Component {
  handleChange(e){
    const title = e.target.value; 
    this.props.changeTitle(title); 
  }
  render() {
    console.log(this.props);
    return (
      <div>
        what a div you are {this.props.title}
        <input onChange={this.handleChange.bind(this)} />
      </div>

    );
  }
}
