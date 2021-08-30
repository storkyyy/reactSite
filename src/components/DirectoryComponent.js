import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({campsite, onClick}) {

    return (
        <Card onClick={() => onClick(campsite.id)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );

}


function Directory(props) {

        // Loop through campsites and return card for each one 
        const directory = props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
                </div>
            );
        });

        return (
            // Create container containing all campsites in directory
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );

}

export default Directory;

