import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import {FLAGS} from '../shared/flags.js';

class Main extends Component {

    constructor(props){
        super(props)

        this.state = {
            flags: FLAGS,
            showGreen: false,
            showBlue: false,
            showRed: false,
            showWhite: false,
            showBlack: false
        };
    }

    toggleShowGreen = () => {
        this.setState({ showGreen: !this.state.showGreen })
    }

    toggleShowBlue = () => {
        this.setState({ showBlue: !this.state.showBlue })
    }

    toggleShowBlack = () => {
        this.setState({ showBlack: !this.state.showBlack })
    }

    toggleShowRed = () => {
        this.setState({ showRed: !this.state.showRed })
    }

    toggleShowWhite = () => {
        this.setState({ showWhite: !this.state.showWhite })
    }


    checkboxFilterFlags(flags){
        var filteredFlags = this.state.showGreen
        ? flags.filter((flag)=>flag.descriptors.includes('green'))
        : flags

        filteredFlags = this.state.showBlue
        ? filteredFlags.filter((flag)=>flag.descriptors.includes('blue'))
        : filteredFlags

        filteredFlags = this.state.showRed
        ? filteredFlags.filter((flag)=>flag.descriptors.includes('red'))
        : filteredFlags

        filteredFlags = this.state.showBlack
        ? filteredFlags.filter((flag)=>flag.descriptors.includes('black'))
        : filteredFlags

        filteredFlags = this.state.showWhite
        ? filteredFlags.filter((flag)=>flag.descriptors.includes('white'))
        : filteredFlags

        return filteredFlags
    }


    render(){
        const filteredFlags = this.checkboxFilterFlags(this.state.flags)

        return(
            <div class='container'>
                <h1>FlagIt!</h1>
                <div>
                    <input type='checkbox' checked={this.state.showGreen} onChange={this.toggleShowGreen}/>
                    <label> green </label>
                    <input type='checkbox' checked={this.state.showBlue} onChange={this.toggleShowBlue}/>
                    <label> blue </label>
                    <input type='checkbox' checked={this.state.showBlack} onChange={this.toggleShowBlack}/>
                    <label> black </label>
                    <input type='checkbox' checked={this.state.showRed} onChange={this.toggleShowRed}/>
                    <label> red </label>
                    <input type='checkbox' checked={this.state.showWhite} onChange={this.toggleShowWhite}/>
                    <label> white </label>
                </div>
                <FlagList flags={filteredFlags}></FlagList>
            </div>
        );
    }
}

function FlagList({flags}){
    // const greenflags = flags.filter((flag)=>flag.descriptors.includes('green'))
    const flaglist = flags.map((flag) => {
        return (
            <div key={flag.id} className="col-6 col-md-3">
                <RenderFlag flag={flag} />
            </div>
        ); 
    });

    return(
        <div className='row'>{flaglist}</div>
    )
}

function RenderFlag({flag}){

    return(
        <div>
            <Card>
                <CardImg src={flag.image} alt={flag.name}></CardImg>
                    <CardBody>
                        <CardTitle>{flag.name}</CardTitle>
                    </CardBody>
            </Card>
        </div>
    );
}

export default Main;