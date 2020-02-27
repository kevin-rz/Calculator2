import React, { Component } from 'react';
import CostOfEngagementComparison from '../Components/costOfEngagementComparison';

class CostOfEngagementComparisonComponent extends Component {
    render() {
        return (
            <CostOfEngagementComparison
                //////////////////////////////Cantidades
                jr={this.props.jr}
                mid={this.props.mid}
                sr={this.props.sr}
                tech={this.props.tech}
                engMan={this.props.engMan}
                qa={this.props.qa}
                month={this.props.month}

                //DB Prices
                pricesInHouse={this.state.pricesInHouse}
                pricesNearShore={this.state.pricesNearShoreOffSite}
                pricesOffShore={this.state.pricesOffShoreOffSite}
                pricesOffShoreOnSite={this.setState.pricesOffShoreOnSite}

            />
        )
    }

    state = {
        pricesInHouse: {
            "type":"In-House",
            "jr": 65,
            "mid": 70,
            "sr": 75,
            "tech": 85,
            "engMan": 110,
            "qa": 70
        },
        pricesNearShoreOffSite: {
            "type":"NearshoreOffSite",
            "jr": 30,
            "mid": 38,
            "sr": 40,
            "tech": 55,
            "engMan": 75,
            "qa": 37
        },
        pricesNearShoreOnSite: {
            "type":"NearshoreOnSite",
            "jr": 0,
            "mid": 0,
            "sr": 0,
            "tech": 0,
            "engMan": 0,
            "qa": 0
        },
        pricesOffShoreOffSite: {
            "type":"",
            "jr": 25,
            "mid": 28,
            "sr": 30,
            "tech": 40,
            "engMan": 55,
            "qa": 26
        },
        pricesOffShoreOnSite: {
            "type":"",
            "jr": 70,
            "mid": 0,
            "sr": 85,
            "tech": 100,
            "engMan": 125,
            "qa": 0
        }
    };
    
    /*    componentDidMount() {
            fetch('http://10.16.0.64:9999/prices')
                .then(res => res.json())
                .then((data) => {
                    this.setState({ 
                        pricesInHouse: data[0],
                        pricesNearShore: data[1],
                        pricesOffShore: data[2]   
                    })
                })
                .catch(console.log)
        }*/
}

export default CostOfEngagementComparisonComponent

/*  {
                "type":"In-House",
                "jr": 65,
                "mid": 70,
                "sr": 75,
                "tech": 85,
                "engMan": 110,
                "qa": 70
            },
            {
                "type":"NearshoreOffSite",
                "jr": 30,
                "mid": 38,
                "sr": 40,
                "tech": 55,
                "engMan": 75,
                "qa": 37
            },
            {
                "type":"OffshoreOffSite",
                "jr": 25,
                "mid": 28,
                "sr": 30,
                "tech": 40,
                "engMan": 55,
                "qa": 26
            },
            {
                "type":"NearshoreOnSite",
                "jr": 25,
                "mid": 28,
                "sr": 30,
                "tech": 40,
                "engMan": 55,
                "qa": 26
            },
            {
                "type":"OffshoreOnSite",
                "jr": 25,
                "mid": 28,
                "sr": 30,
                "tech": 40,
                "engMan": 55,
                "qa": 26
            }
        */