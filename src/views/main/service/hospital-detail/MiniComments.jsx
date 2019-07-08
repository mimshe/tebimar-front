import React from "react";
import user from '../../../../assets/img/theme/team-3-800x800.jpg'

class MiniComments extends React.Component {

    render() {
        let comments = (this.props.comments.length > 3 ? this.props.comments.slice(1, 3) : this.props.comments);
        const miniCommentsList = [];
        comments.map(item =>
            miniCommentsList.push(
            <div key={item.id} className="item d-flex align-items-md-start">
            <img src={user} alt="" />
            <div className="content ml-2">
                <h5 className="title">{`${item.user.name} ${item.user.family}`} <small>from {item.user.country.name}</small></h5>
                <p className="desc m-1">{item.comment}</p>
            </div>
            </div>
        ));
      

        return (
            <div className="mini-comment-box">
                {miniCommentsList}
            </div>
        );
    }
}

export default MiniComments;
