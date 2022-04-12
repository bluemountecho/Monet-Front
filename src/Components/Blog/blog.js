import React from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios'
import {Parser} from 'html-to-react'

const htmlToReactParser = new Parser()
const serverURL = "http://167.86.120.197"
const baseURL = ""

class Blog extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            blogs: [],
            redirectURL: ''
        }
    }

    componentDidMount() {
        axios.get(baseURL + '/getblogs')
        .then((res) => {
            this.setState({
                blogs: res.data
            })
        })
    }

    render() {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString)
        const blogID = urlParams.get('ann_id')
        var index = -1

        for (var i = 0; i < this.state.blogs.length; i ++) {
            if (this.state.blogs[i].blog_id == blogID) {
                index = i
                break
            }
        }

        if (index == -1) {
            return (
                <div className="content-body pb-20" style={{background: 'var(--color-green3)'}}>
                    <div className="content">
                        {this.state.blogs.map((blog, index) => {
                            return <>
                                <div className="pb-20">
                                    <article className="best-post" onClick={() => {
                                        this.setState({
                                            redirectURL: blog.blog_id
                                        })
                                        browserHistory.push("/announcements?ann_id=" + blog.blog_id)
                                    }}>
                                        <div
                                            className="best-post-image"
                                            style={{
                                                backgroundImage: 'url(' + serverURL + blog.blog_image + ')'
                                            }}
                                        ></div>
                                        <div className="best-post-content" style={{maxWidth: '60%'}}>
                                            {/* <div className="best-post-content-cat">videograper</div> */}
                                            <div className="best-post-content-title">
                                            {blog.blog_title}
                                            </div>
                                            <div className="best-post-content-sub">
                                            {blog.blog_description.substr(0, 300)}...
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </>
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="content-body" style={{background: 'var(--color-green3)', padding: '0px'}}>
                    <div className="content text-justify blog">
                        <div className="width-80 auto-div" style={{background: 'var(--color-green8)', padding: '30px 10% 60px'}}>
                            {htmlToReactParser.parse(this.state.blogs[index].content)}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Blog;