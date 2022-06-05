import React from 'react';
import MyButton from './UI/button/MyButton.jsx';
import {useNavigate} from 'react-router-dom';
// useNavigate вместо useHistory

const PostItem = (props) => {
    const router = useNavigate()
    // console.log(router);
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router('/posts/' + props.post.id )}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem;