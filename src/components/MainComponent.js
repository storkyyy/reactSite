import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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

                <Header />
                {/* Send on click method with props */}
                <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)} />
                {/* Send campsite by ID from index 0 in array created by filter, CampsiteInfo expecting an object */}
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
                <Footer />

            </div>
        );
    }
}

export default Main;
