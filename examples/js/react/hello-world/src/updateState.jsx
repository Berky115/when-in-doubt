class UnitedStates extends React.Component {
    constructor(){
        super(props)
        this.state = {
            name: "Dante",
            homeState: "California"
        }
    }

    setName(newName) {
        this.setState({
            name: newName
        })
    }

    render(){
        if (this.state.name !== "Drew") {
            this.setName("Drew")
        }
        return <a>{this.state.name} lives in {this.state.homeState}</a>
    }
}