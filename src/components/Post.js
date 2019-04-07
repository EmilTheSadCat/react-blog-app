import React, { Component } from "react";
import { connect } from "react-redux";
import { storage } from "../firebase/firebase";
import moment from 'moment';

import Likes from "./Likes";

// class Post extends Component {

//     render() {
//         <div>
//             {this.props}
//             {/* <h2>{this.props.post.title}</h2>
//             <h4>{this.props.post.subtitle}</h4>
//             <p>{this.props.post.text}</p> */}
//         </div>
//     }
// }


// const Post = (props) => {
//     // console.log("post: ", props.post)
//     const post = props.post;
//     const downloadImage = () => {
//         storage.ref("image/image.png").getDownloadURL().then((url) => {
//             const img = document.getElementById('imageHolder');
//             img.src = url;

//         }).catch(e => console.log(e));
//     }
//     return (
//         <div>
//             <img id="imageHolder" onLoad={downloadImage} src="" alt="Firebase image test ..." />
//             <h2>{post.title}</h2>
//             <h4>{post.subtitle}</h4>
//             <p>{post.text}</p>
//         </div>
//     )
// }


class Post extends Component {

    componentDidMount() {
        this.downloadImage();
    }
    downloadImage = () => {
        storage.ref(`images/image_${this.props.post.image}`).getDownloadURL().then((url) => {
            let img = document.getElementById('imageHolder');
            img.src = url;

        }).catch(e => console.log(e));
    }
    render() {

        return (
            <div>
                <img id="imageHolder" onLoad={this.downloadImage} src="" alt="Firebase image test ..." />
                {/* {console.log(this.props.post.image)} */}
                <p>{moment(this.props.post.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
                <h2>{this.props.post.title}</h2>
                <h4>{this.props.post.subtitle}</h4>
                <p>{this.props.post.text}</p>
                <Likes paramsId={this.props.post.id} />
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    // console.log(typeof props.paramsId);
    return {
        post: state.posts.find((item) => item.id === props.paramsId)
    };
};

export default connect(mapStateToProps)(Post);