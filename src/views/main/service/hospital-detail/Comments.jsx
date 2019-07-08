import React from "react";
// reactstrap components
import {
    Col,
    Pagination,
    PaginationItem,
    PaginationLink,
} from "reactstrap";
import user from '../../../../assets/img/theme/team-3-800x800.jpg'

class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allComments:[],
            visibleComments:[],
            displayCount:5,
            itemsCount:0,
            currentPage:1,

        };
    }

    componentWillReceiveProps(){
        const currentState = this.state;
        currentState.allComments = this.props.comments;
        currentState.visibleComments = this.props.comments.slice(0, this.state.displayCount);
        currentState.itemsCount = this.props.comments.length;
        this.setState(currentState);
    }

    changePage(page){
        const currentState = this.state;
        currentState.currentPage = page;
        if((this.state.itemsCount / this.state.displayCount) == page){
            currentState.visibleComments = this.state.allComments.slice(((page - 1) * this.state.displayCount), this.state.itemsCount);
        }
        else{
            currentState.visibleComments = this.state.allComments.slice(((page - 1) * this.state.displayCount), page * this.state.displayCount);
        }
        this.setState(currentState);
    }

    render() {
        const CommentsList = [];
        this.state.visibleComments.map(item =>
            CommentsList.push(
            <div key={item.id} className="item d-flex align-items-md-start mt-3 mb-3">
                <div className="text-center">
                    <img src={user} alt="" />
                    <i className="far fa-star mt-2"></i>
                </div>
                <div className="content ml-2">
                    <h4 className="title">{`${item.user.name} ${item.user.family}`} <small>from {item.user.country.name}</small></h4>
                    <p className="desc">{item.comment}</p>
                </div>
            </div>
        ));

        const PaginationList = [];
        for (let i = 0; i < this.state.itemsCount / this.state.displayCount; i++) {
            PaginationList.push(
                <PaginationItem key={i+1} className={`${ this.state.currentPage == i+1 ? 'active' : ''}`}>
                <PaginationLink onClick={e => this.changePage(i+1)}>
                    {i+1}
                </PaginationLink>
                </PaginationItem>
            );
        }

        return (
            <Col className="mt-4" lg="12" md="12">
                <div className="comment-box">
                    <div>
                        <h3 className="box-title">Comments</h3>
                    </div>
                    {CommentsList}
                </div>
                <div className={`${(this.state.itemsCount <= this.state.displayCount ? 'd-none' : '')}`}>
                    <div className="d-flex justify-content-center pt-4">
                        <nav aria-label="...">
                            <Pagination>
                                <PaginationItem className={`${ this.state.currentPage == 1 ? 'disabled' : ''}`}>
                                <PaginationLink
                                    onClick={e => this.changePage(this.state.currentPage -1)}
                                    tabIndex="-1"
                                >
                                    <i className="fa fa-angle-left" />
                                    <span className="sr-only">Previous</span>
                                </PaginationLink>
                                </PaginationItem>
                                {PaginationList}
                                <PaginationItem  className={`${ this.state.currentPage == (this.state.itemsCount / this.state.displayCount) ? 'disabled' : ''}`}>
                                <PaginationLink onClick={e => this.changePage(this.state.currentPage +1)}>
                                    <i className="fa fa-angle-right" />
                                    <span className="sr-only">Next</span>
                                </PaginationLink>
                                </PaginationItem>
                            </Pagination>
                        </nav>
                    </div>
                </div>
        </Col>
        );
    }
}

export default Comments;
