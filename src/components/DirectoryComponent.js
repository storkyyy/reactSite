import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

class Directory extends Component {
        
        constructor(props){ // whenever class component created with constructor, must include props
            super(props); // always first line of constructor, required
            this.state = {
                selectedCampsite: null
            };
        }

        onCampsiteSelect(campsite) {
            //Set selected campsite to clicked campsite
            //Never set state directly utilizing this.state.selectedCampsite = campsite; ALWAYS use setState
            this.setState({selectedCampsite: campsite});
        }

        render() {

            // Loop through campsites and return card for each one 
            const directory = this.props.campsites.map(campsite => {
                return (
                    <div key={campsite.id} className="col-md-5 m-1">
                        <Card onClick={() => this.onCampsiteSelect(campsite)}>
                            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
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
                    <CampsiteInfo campsite={this.state.selectedCampsite} />
                </div>
                
            );

        }

}

export default Directory;

