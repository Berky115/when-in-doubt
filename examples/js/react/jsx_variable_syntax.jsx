class DateTimeNow extends React.Component {
    render() {
        let dateTimeNow = new Date().toLocaleString();
        return (<span> Current date and time is { dateTimeNow }.</span>
            <span> Current date and time is { new Date(Date.now()).toLocaleTimeString() }.</span>
        )
    }
}