import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class CampsiteInfo extends Component {

    renderComments(comments) {

        // Ensure comments exist
        if(comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                {comment.text}<br/>
                                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </div>
                        );
                    })}
                </div>
            );
        }
        return <div />;

    }


    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }


    render() {

        // Ensure campsite passed to component
        if(this.props.campsite) {
            return (
                <div className="row">
                    {/* Renders the campsite passed through directory */}
                    {this.renderCampsite(this.props.campsite)}

                    {/* Render comments applicable to campsite */}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            );
        }
        
        return <div />;

    }

}

export default CampsiteInfo;