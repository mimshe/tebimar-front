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

    render() {
        return (
            <Col className="mt-4" lg="12" md="12">
                <div className="comment-box">
                    <div>
                        <h3 className="box-title">Comments</h3>
                    </div>
                    <div className="item d-flex align-items-md-start mt-3 mb-3">
                        <div className="text-center">
                            <img src={user} alt="" />
                            <i className="far fa-star mt-2"></i>
                        </div>
                        <div className="content ml-2">
                            <h4 className="title">Sara <small>from NY</small></h4>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        </div>
                    </div>
                    <div className="item d-flex align-items-md-start mt-3 mb-3">
                        <div className="text-center">
                            <img src={user} alt="" />
                            <i className="far fa-star mt-2"></i>
                        </div>
                        <div className="content ml-2">
                            <h4 className="title">Alex <small>from NY</small></h4>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        </div>
                    </div>
                    <div className="item d-flex align-items-md-start mt-3 mb-3">
                        <div className="text-center">
                            <img src={user} alt="" />
                            <i className="far fa-star mt-2"></i>
                        </div>
                        <div className="content ml-2">
                            <h4 className="title">Deby <small>from NY</small></h4>
                            <p className="desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center pt-4">
                    <nav aria-label="...">
                        <Pagination>
                            <PaginationItem className="disabled">
                            <PaginationLink
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                                tabIndex="-1"
                            >
                                <i className="fa fa-angle-left" />
                                <span className="sr-only">Previous</span>
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                1
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem className="active">
                            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                2 <span className="sr-only">(current)</span>
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                3
                            </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                                <i className="fa fa-angle-right" />
                                <span className="sr-only">Next</span>
                            </PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </nav>
                </div>
        </Col>
        );
    }
}

export default Comments;
