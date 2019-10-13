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



