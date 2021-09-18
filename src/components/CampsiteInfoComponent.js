import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, Label, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const minLength = len => val => val && (val.length >= 2);
const maxLength = len => val => !val || (val.length <= 15);

function RenderComments({ comments, postComment, campsiteId }) {

    // Ensure comments exist
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                <Stagger in>
                    {comments.map(comment => {
                        return (
                            <Fade in key={comment.id}>
                                <div>
                                    {comment.text}<br />
                                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                                </div>
                            </Fade>
                        );
                    })}
                </Stagger>
                <CommentForm campsiteId={campsiteId} postComment={postComment} />
            </div>
        );
    }
    return <div />;

}


function RenderCampsite({ campsite }) {

    return (
        <div className="col-md-5 m-1">
            <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)'}}>
                <Card>
                    <CardImg top src={baseUrl + campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    );

}


function CampsiteInfo(props) {

    if(props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    if(props.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    // Ensure campsite passed to component
    if (props.campsite) {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/directory'>Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {/* Renders the campsite passed through directory */}
                    <RenderCampsite campsite={props.campsite} />
                    {/* Render comments applicable to campsite */}
                    <RenderComments 
                        comments={props.comments} 
                        postComment={props.postComment}
                        campsiteId={props.campsite.id}
                    />
                </div>
            </div>
        );
    }

    return <div />;

}

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        //Bind event handler to this 
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.campsiteId, values.rating, values.author, values.text);
    }

    toggleModal() {

        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

    }

    render() {

        return (
            <React.Fragment>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg" /> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select
                                    className="form-control"
                                    model=".rating"
                                    id="rating"
                                    name="rating"
                                >
                                    <option>Select rating...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text
                                    className="form-control"
                                    model=".author"
                                    name="author"
                                    id="author"
                                    placeholder="Your Name"
                                    validators={{
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        minLength: 'Must be atleast 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea
                                    className="form-control"
                                    model=".text"
                                    name="text"
                                    id="text"
                                    rows="6"
                                />
                            </div>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }

}

export default CampsiteInfo;