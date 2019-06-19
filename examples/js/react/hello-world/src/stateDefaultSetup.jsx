class Clock extends React.Component {
    constructor(){
        super(props)
        this.state = { 
            currentTime: (new Date()).toLocaleString(),
            books: [
                'Dantes Inferno',
                'A Clash of Kings',
                'Simulacra and Simulation'
            ]
        }
    }
    render() {
        return <a>lol</a>
    }
}
