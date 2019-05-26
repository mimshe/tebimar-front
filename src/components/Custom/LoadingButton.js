import React, {Component} from 'react';
import {Button} from "reactstrap";
import ReactLoading from 'react-loading';

export default class LoadingButton extends Component {
    render() {
        return (
            <div className="text-center" style={{minHeight: 75}}>
                {this._loading()}
            </div>
        )
    }

    _loading = () => {
        if (this.props.loading) {
            return (<Button disabled className="mt-4 mb-2 mr-6" color="link">
                <ReactLoading type={'bubbles'} color={'#00b400'} height={30} className="loading-button"/>
            </Button>)
        } else {
            return (<Button className="mt-4" color="primary" type="submit">
                {this.props.children}
            </Button>)
        }
    }
}