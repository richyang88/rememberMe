getRelatedBucketListItems = () => {
    // create empty array for userBucketListItems
    let userBucketListItems = []
    // this.props.match.params.userId is string, need integer
    const userId = parseInt(this.props.match.params.userId)
    //get all bucket list items
    Axios.get("/api/bucketlistitem/")
        .then(res => {
            this.setState({ allBucketListItems: res.data })
            for (let i = 0; i < this.state.allBucketListItems.length; i++) {
                // console.log(this.state.allBucketListItems.length)
                if (userId === this.state.allBucketListItems[i].userId) {
                    userBucketListItems.push(this.state.allBucketListItems[i])
                    // console.log("Its a match!!")
                    this.setState({ specificBList: userBucketListItems })
                }
                // else {
                    // console.log("It's not a match!!")
                // }
            }
        })
}



import React from 'react'
import Axios from 'axios'
import BLForm from "../bucketListFolder/BLForm"
import BLApp from '../bucketListFolder/BLApp'
import { Redirect } from 'react-router-dom'
import 'bulma/css/bulma.css'
export default class SingleU extends React.Component {
    state = {
        user: {},
        redirectToUser: false
    }
    getSingleUser = () =>
        Axios.get(`/api/user/${this.props.match.params.userId}/`)
            .then(res => {
                this.setState({ user: res.data })
            })
    componentDidMount() {
        this.getSingleUser()
    }
    handleDeleteUser = () => {
        Axios.delete(`/api/user/${this.props.match.params.userId}/`)
            .then(() => {
                // this is the trigger to change setState for redirectToHome
                this.setState({ redirectToUser: true })
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        // conditional rendering for redirectToHome is truthy
        if (this.state.redirectToUser) {
            return (
                <Redirect to="/user" />
            )
        }
        return (
            <div>
                <nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/user">Users</a></li>
    <li class="is-active"><a href={`/user/${this.state.user.userName}/`}>{this.state.user.userName}</a></li>
  </ul>
</nav>
                <BLForm {...this.props}
                    userId={this.state.user.id}
                />
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src={this.state.user.picture} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{this.state.user.userName}
                                    <button onClick={this.handleDeleteUser}>Delete</button>
                                </p>
                                <p class="subtitle is-6">{this.state.user.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <BLApp {...this.props}
                />
            </div>
        )
    }
}



import React from "react"
import Axios from "axios"
import { bucketListItemList } from "../importsFolder/functions"
import 'bulma/css/bulma.css'
export default class BLApp extends React.Component {
    state = {
        currentBucketListItem: 1,
        bucketListItems: [],
        allBucketListItems: [],
        specificBList: []
    }
    getRelatedBucketListItems = () => {
        // create empty array for userBucketListItems
        let userBucketListItems = []
        // this.props.match.params.userId is string, need integer
        const userId = parseInt(this.props.match.params.userId)
        //get all bucket list items
        Axios.get("/api/bucketlistitem/")
            .then(res => {
                this.setState({ allBucketListItems: res.data })
                for (let i = 0; i < this.state.allBucketListItems.length; i++) {
                    if (userId === this.state.allBucketListItems[i].userId) {
                        userBucketListItems.push(this.state.allBucketListItems[i])
                        this.setState({ specificBList: userBucketListItems })
                    }
                }
            })
    }
    componentDidMount = () => {
        this.getRelatedBucketListItems()
    }
    getAllBucketListItems = () =>
        // eliminates need for {bucketListItemList(testBucketListItems)}
        // changed state of specificBlist instead of bucketListItems
        Object.values(this.state.specificBList)
    render = () => (
        <div className='container'>
            {bucketListItemList(this.getAllBucketListItems())}
        </div>
    )
}
//  ONLY USE COLON (:id) TO SET SPECIFIC ROUTE



import React from "react"
import Axios from "axios"
import 'bulma/css/bulma.css'
// this is the class component that will set the state of the BucketListItem component  
const initialState = {
    newBucketListItem: {
        bucketListName: "",
        status: false,
        picture: ""
    }
}
const styling = {
    form: {
        width: "300px",
        margin: "5px 35px 5px 35px"
    },
    button: {
        backgroundColor: "black",
        margin: "5px 35px 5px 35px"
    }
}
export default class BLForm extends React.Component {
    state = { ...initialState }
    handleInput = (event) => {
        let newBucketListItem = { ...this.state.newBucketListItem };
        newBucketListItem[event.target.name] = event.target.value;
        this.setState({ newBucketListItem })
    }
    clearForm = () => {
        this.setState({ ...initialState })
    }
    componentDidMount = () => {
        this.findTheUser()
    }
    findTheUser = () => {
        let userId = this.props.match.params.userId
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // extraction from an object
        const { userId } = this.props.match.params;
        const { newBucketListItem } = this.state;
        // merges objects right to left, (newBucketListItem goes into {userId:userId}).. and so on
        const payload = Object.assign({}, { userId: userId }, newBucketListItem)
        // calls post req to pass state of newBucketListItem
        // path, data that's being posted
        Axios.post(`/api/bucketlistitem/`, payload)
        .then(() => {
            this.clearForm()
            window.location.reload();
            })
    }
    render = () => (
        <div class="control">
            <form onSubmit={this.handleSubmit}>
                <input style={styling.form} class="input" type="text" name="bucketListName" value={this.state.newBucketListItem.bucketListName} onChange={this.handleInput} placeholder="Bucket List Item Name" />
                <input style={styling.form} class="input" type="text" name="picture" value={this.state.newBucketListItem.picture} onChange={this.handleInput} placeholder="Picture" />
                <input style={styling.button} class="button is-primary" type="submit" value="New Bucket List Item" />
            </form>
        </div>
    )
}
