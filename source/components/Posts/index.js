// Core
import React, { Component } from 'react';
import { List } from 'immutable';
import FlipMove from 'react-flip-move';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Styles from './styles.m.css';
import { postActions } from '../../bus/posts/actions';
import { Composer, Catcher, Post } from '../../components';

const { createPostAsync, fetchPostsAsync, removePostAsync } = postActions;
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        createPostAsync,
        fetchPostsAsync,
        removePostAsync,
    }, dispatch),
});
const mapStateToProps = state => ({
    posts: state.posts,
    profile: state.profile,
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Posts extends Component {
    componentDidMount () {
        const { actions } = this.props;

        actions.fetchPostsAsync();
    }

    render () {
        const { actions, posts, profile } = this.props;

        const postsJSX = posts.map((post) => {
            return (
                <Catcher key = { post.get('id') }>
                    <Post
                        actions = { actions }
                        author = { post.get('author') }
                        comment = { post.get('comment') }
                        created = { post.get('created') }
                        id = { post.get('id') }
                        likes = { post.get('likes') }
                        profile = { profile }
                    />
                </Catcher>
            );
        });

        return (
            <section className = { Styles.posts }>
                <Composer actions = { actions } profile = { profile } />
                <FlipMove>{postsJSX}</FlipMove>
            </section>
        );
    }
}
