class Layout extends React.Component {
  constructor(){
    super();
    this.state = {name: "WWWW"};
  }
    changeTitle(title) {
      this.setState({title});
    }
  render() {
    const title = "this is title"
    // setTimeout(() => {
    //   this.setState({name: "bob"}) 
    // }, 1000)

    return (
    <div>
      <h1> It workings! {this.state.name} </h1>
      <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
    </div>
    );
  }
}

const app = document.getElementById('mount-point');
ReactDOM.render(<Layout/>, app);
