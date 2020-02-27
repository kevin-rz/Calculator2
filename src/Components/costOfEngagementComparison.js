import React from 'react'
import { Table } from 'react-bootstrap';

function CostOfEngagementComparison({ jr, mid, sr, tech, engMan, qa, month, pricesInHouse, pricesNearShore, pricesOffShore, pricesOffShoreOnSite }) {
    //170 Valor fijo de la formula
    //Project Team Costs In Hose
    //////////////////////////////cambiar 85 por 95 del tech
    const PTCInHouse = (jr * pricesInHouse.jr * 170) + (mid * pricesInHouse.mid * 170) + (sr * pricesInHouse.sr * 170) + (tech * pricesInHouse.tech * 170) + (engMan * pricesInHouse.engMan * 170) + (qa * pricesInHouse.qa * 170) * month

    //Project Team Costs NearShore
    //////////////////////////////Cambiar valores de 40 a 46 
    const PTCNear = (jr * pricesNearShore.jr * 170) + (mid * pricesNearShore.mid * 170) + (sr * pricesNearShore.sr * 170) + (tech * pricesNearShore.tech * 170) + (engMan * pricesNearShore.engMan * 170) + (qa *pricesNearShore.qa * 170) * month

    //Project Team Costs OffShore
    const PTCOff = (jr * pricesOffShore.jr * 170) + (mid * pricesOffShore.mid * 170) + (sr * pricesOffShore.sr * 170) + (tech * pricesOffShore.tech * 170) + (engMan * pricesOffShore.engMan * 170) + (engMan * /*Remplazar 125 por pricesOffShoreOnSite*/ 125 * 170) + (qa * pricesOffShore.qa * 170) * month

    //Project Overhead Cost
    //.10 y .20 Posibles a estar en BD
    const POCNear = PTCNear * .10
    const POCOff = PTCOff * .20

    //Cost of Vendor´s Attrition Nearshore
    //10 y 15 en BD = 25
    //8 valor fijo de la formula
    const CVANear = (.05 * jr * 25 * 8 * pricesNearShore.jr) + (.05 * mid * 25 * 8 * pricesNearShore.mid) + (.05 * sr * 25 * 8 * pricesNearShore.sr) + (.05 * tech * 25 * 8 * pricesNearShore.tech) + (.05 * engMan * 25 * 8 * pricesNearShore.engMan) + (.05 * qa * 25 * 8 * pricesNearShore.qa)

    //Cost of Vendor´s Attrition Nearshore
    //10 y 15 en BD = 25
    //8 valor fijo de la formula
    const CVAOff = (.4 * jr * 25 * 8 * pricesOffShore.jr) + (.4 * mid * 25 * 8 * pricesOffShore.mid) + (.4 * sr * 25 * 8 * pricesOffShore.sr) + (.4 * tech * 25 * 8 * pricesOffShore.tech) + (.4 * engMan * 25 * 8 * pricesOffShore.engMan) + (.4 * qa * 25 * 8 * pricesOffShore.qa) + (.4  * 25 * 8 * 125 /*remplazar 125*/)

    //On-site Resources Allocation Costs
    //1500 valor fijo por mes
    const RACon = month * 1500

    //Long Distance Costs Nearshore
    //.19 60 y 30 fijos
    const LDCNear = month * .19 * 60 *30

    //Long Distance Costs OffShore
    //.59 60 y 30 fijos
    const LDCOff = month * .59 * 60 *30

    //Knowledge Transfer Costs NearShore
    //.05 fijo
    const KTCNear = PTCNear * .05

    //Knowledge Transfer Costs OffShore
    //.1 fijo
    const KTCOff = PTCOff * .1

    //Project Trips Costs Near
    const PTCostNear = 12540

    //Project Trips Costs Off
    const PTCostOff = 34800

    //Productivity Losses Costs Near
    const PLCNear = PTCNear * .1

    //Productivity Losses Costs Off
    const aux = (jr * pricesOffShore.jr * 170) + (mid * pricesOffShore.mid * 170) + (sr * pricesOffShore.sr * 170) + (tech * pricesOffShore.tech * 170) + (engMan * pricesOffShore.engMan * 170) + (qa * pricesOffShore.qa * 170) * month
    const PLCOff = aux * .25

    //Risk Management Costs Near
    const RMCNear = Math.round((PTCNear + POCNear + CVANear + LDCNear + KTCNear + PTCostNear + PLCNear) * .03)

    //Risk Management Costs Off
    //////////////////////////////error
    const RMCOff = Math.round((PTCOff + POCOff + CVAOff + LDCOff + KTCOff + PTCostOff + PLCOff) * .05)
    
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Cost Component</th>
                    <th>In-house US</th>
                    <th>Nearshore</th>
                    <th>Offshore</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Project Team Costs</td>
                    <td>{PTCInHouse}</td>
                    <td>{PTCNear}</td>
                    <td>{PTCOff}</td>
                </tr>
                <tr>
                    <td>Project Overhead Costs</td>
                    <td>-</td>
                    <td>{POCNear}</td>
                    <td>{POCOff}</td>
                </tr>
                <tr>
                    <td>Cost of Vendor's Attrition</td>
                    <td>-</td>
                    <td>{CVANear}</td>
                    <td>{CVAOff}</td>
                </tr>
                <tr>
                    <td>On-site Resources Allocation Costs</td>
                    <td>-</td>
                    <td>-</td>
                    <td>{RACon}</td>
                </tr>
                <tr>
                    <td>Long Distance Costs</td>
                    <td>-</td>
                    <td>{LDCNear}</td>
                    <td>{LDCOff}</td>
                </tr>
                <tr>
                    <td>Knowledge Transfer Costs</td>
                    <td>-</td>
                    <td>{KTCNear}</td>
                    <td>{KTCOff}</td>
                </tr>
                <tr>
                    <td>Project Trips Costs</td>
                    <td>-</td>
                    <td>{PTCNear}</td>
                    <td>{PTCOff}</td>
                </tr>
                <tr>
                    <td>Productivity Losses Costs</td>
                    <td>-</td>
                    <td>{PLCNear}</td>
                    <td>{PLCOff}</td>
                </tr>
                <tr>
                    <td>Risk Management Costs</td>
                    <td>-</td>
                    <td>{RMCNear}</td>
                    <td>{RMCOff}</td>
                </tr>
                <tr>
                    <td>Total Cost of Engagement</td>
                    <td>{PTCInHouse}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    )
};

export default CostOfEngagementComparison
/*<td>/*{props.suma}*/