export default class NewUserForm extends React.Component{
    state =
        {
            userName: ""
            , email: ""
        }
    handleInput = (evnt) => {
        let newUser = { ...this.state };
        newUser[evnt.target.userName] = evnt.target.value;
        this.ListeningStateChangedEvent(newUser)
    }

    handleSubmit = (evnt) => {
        event.preventDefault();
        this.props.addNewUser(this.state)
    }

    render = () => (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="userNameInput"
                onChange={this.handleInput}
                value={this.state.username}
                placeholder="User Name" />
            <input type="submit" value="New User" />
        </form>
    )
}