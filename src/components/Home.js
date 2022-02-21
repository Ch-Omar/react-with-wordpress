import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            posts: [],
            error: ''
        }
    }

    componentDidMount() {
        const wordPressUrl = 'http://localhost:8000/';
        this.setState({ loading: true }, () => {
            axios.get(`${wordPressUrl}/wp-json/wp/v2/posts`).then(res => {
                this.setState({ loading: false, posts: res.data })
            }).catch(error => this.setState({ loading: false, error: error.response.data }))
        });
    }


    render() {
        console.log('State : ', this.state)
        const { posts } = this.state;

        return (
            <div>
                <Navbar />

            </div>
        )
    }
}

export default Home