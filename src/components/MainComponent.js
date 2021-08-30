import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }


    onCampsiteSelect(campsiteId) {
        //Set selected campsite to clicked campsite
        //Never set state directly utilizing this.state.selectedCampsite = campsite; ALWAYS use setState
        this.setState({selectedCampsite: campsiteId});
    }


    render() {
        return ( 
            <div>
                <Navbar dark color = "primary">
                    <div className = "container">
                        <NavbarBrand href = "/">NuCamp</NavbarBrand> 
                    </div> 
                </Navbar>

                {/* Send on click method with props */}
                <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)} />
                {/* Send campsite by ID from index 0 in array created by filter, CampsiteInfo expecting an object */}
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
                
            </div>
        );
    }
}

export default Main;
