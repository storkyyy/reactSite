import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
        
        constructor(props){ // whenever class component created with constructor, must include props
            super(props); // always first line of constructor, required
            this.state = {
                selectdCampsite: null
            };
        }

        onCampsiteSelect(campsite) {
            //Set selected campsite to clicked campsite
            //Never set state directly utilizing this.state.selectedCampsite = campsite; ALWAYS use setState
            this.setState({selectdCampsite: campsite});
        }

        renderSelectedCampsite(campsite) {
            //Campsite has object in it before trying to build card
            if(campsite) {
                return (
                    <Card>
                        <CardImg top src={campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardTitle>{campsite.name}</CardTitle>
                            <CardText>{campsite.description}</CardText>
                        </CardBody>
                    </Card>
                );
            }
            return <div />;
        }

        render() {

            // Loop through campsites and return card for each one 
            const directory = this.props.campsites.map(campsite => {
                return (
                    <div key={campsite.id} className="col-md-5 m-1">
                        <Card onClick={() => this.onCampsiteSelect(campsite)}>
                            <CardImg width = "100%" src={campsite.image} alt={campsite.name} />
                            <CardImgOverlay>
                                <CardTitle>{campsite.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
            });

            return (

                // Create container containing all campsites in directory
                <div className="container">
                    <div className="row">
                        {directory}
                    </div>
                    <div className="row">
                        <div className="col-md-5 m-1">
                            {this.renderSelectedCampsite(this.state.selectdCampsite)}
                        </div>
                    </div>
                </div>
            );

        }

}

export default Directory;