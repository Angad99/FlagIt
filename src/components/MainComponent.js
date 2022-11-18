import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardTitle} from 'reactstrap';
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
            showBlack: false,
            showOrange: false,
            showYellow: false,
            showPurple: false,
            showExact: false,
            searchTerm: ""
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

    toggleShowOrange = () => {
        this.setState({ showOrange: !this.state.showOrange })
    }

    toggleShowYellow = () => {
        this.setState({ showYellow: !this.state.showYellow })
    }

    toggleShowPurple = () => {
        this.setState({ showPurple: !this.state.showPurple })
    }

    toggleShowExact = () => {
        this.setState({ showExact: !this.state.showExact })
    }

    updateSearchTerm = (event) => {
        this.setState({ searchTerm: event.target.value })
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

        filteredFlags = this.state.showOrange
        ? filteredFlags.filter((flag)=>flag.descriptors.includes('orange'))
        : filteredFlags

        filteredFlags = this.state.showYellow
        ? filteredFlags.filter((flag)=>flag.descriptors.includes('yellow'))
        : filteredFlags

        filteredFlags = this.state.showPurple
        ? filteredFlags.filter((flag)=>flag.descriptors.includes('purple'))
        : filteredFlags

        return filteredFlags
    }

    searchFilter(flags) {
        var filteredFlags = this.state.searchTerm != "" 
        ? flags.filter((flag) => flag.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())) 
        : flags
        return filteredFlags
    }

    exactFilter(flags) {
        const numColorsChecked = this.state.showGreen + this.state.showBlue + this.state.showRed + this.state.showWhite + this.state.showBlack + this.state.showOrange + 
                                    this.state.showYellow + this.state.showPurple
        var filteredFlags = this.state.showExact
        ? flags.filter((flag) => flag.descriptors.length == numColorsChecked) 
        : flags
        return filteredFlags
    }


    clearColors = () => {
        this.setState({
            showGreen: false,
            showBlue: false,
            showRed: false,
            showWhite: false,
            showBlack: false,
            showOrange: false,
            showYellow: false,
            showPurple: false
        });
    }


    render(){
        const filteredFlags = this.checkboxFilterFlags(this.state.flags)
        const filteredFlagSearch = this.searchFilter(filteredFlags)
        const filteredFlagExact = this.exactFilter(filteredFlagSearch)

        return(
            <div class='container'>
                <div className='row text-center mt-2 mb-4'>
                    <h1>FlagIt!</h1>
                </div>
                
                <div className='row d-flex justify-content-center'>

                    <div className='col-3 col-md-1'>
                        <div className='p-2' style={{background: "green"}}>
                            <div className='d-flex justify-content-center p-2'>
                                <input type='checkbox' id="greenCheck" checked={this.state.showGreen} onChange={this.toggleShowGreen}/>
                            </div>
                        </div>
                        <label className='m-0 d-flex justify-content-center bold' for="greenCheck">Green</label>
                    </div>

                    <div className='col-3 col-md-1'>
                        <div className='p-2' style={{background: "blue"}}>
                            <div className='d-flex justify-content-center p-2'>
                                <input type='checkbox' id="blueCheck" checked={this.state.showBlue} onChange={this.toggleShowBlue}/>
                            </div>
                        </div>                            
                        <label className='m-0 d-flex justify-content-center bold' for="blueCheck">Blue</label>
                    </div>

                    <div className='col-3 col-md-1'>
                        <div className='p-2' style={{background: "black"}}>
                            <div className='d-flex justify-content-center p-2'>
                                <input type='checkbox' id="blackCheck" checked={this.state.showBlack} onChange={this.toggleShowBlack}/>
                            </div>
                        </div>                            
                        <label className='m-0 d-flex justify-content-center bold' for="blackCheck">Black</label>
                    </div>

                    <div className='col-3 col-md-1'>
                        <div className='p-2' style={{background: "red"}}>
                            <div className='d-flex justify-content-center p-2'>
                                <input type='checkbox' id="redCheck" checked={this.state.showRed} onChange={this.toggleShowRed}/>
                            </div>
                        </div>                            
                        <label className='m-0 d-flex justify-content-center bold' for="redCheck">Red</label>
                    </div>

                    <div className='col-3 col-md-1'>
                        <div className='p-2' style={{background: "white"}}>
                            <div className='d-flex justify-content-center p-2'>
                                <input type='checkbox' id="whiteCheck" checked={this.state.showWhite} onChange={this.toggleShowWhite}/>
                            </div>
                        </div>                            
                        <label className='m-0 d-flex justify-content-center bold' for="whiteCheck">White</label>
                    </div>

                    <div className='col-3 col-md-1'>
                        <div className='p-2' style={{background: "orange"}}>
                            <div className='d-flex justify-content-center p-2'>
                                <input type='checkbox' id="orangeCheck" checked={this.state.showOrange} onChange={this.toggleShowOrange}/>
                            </div>
                        </div>                            
                        <label className='m-0 d-flex justify-content-center bold' for="orangeCheck">Orange</label>
                    </div>

                    <div className='col-3 col-md-1'>
                        <div className='p-2' style={{background: "yellow"}}>
                            <div className='d-flex justify-content-center p-2'>
                                <input type='checkbox' id="yellowCheck" checked={this.state.showYellow} onChange={this.toggleShowYellow}/>
                            </div>
                        </div>                            
                        <label className='m-0 d-flex justify-content-center bold' for="yellowCheck">Yellow</label>
                    </div>

                    <div className='col-3 col-md-1'>
                        <div className='p-2' style={{background: "purple"}}>
                            <div className='d-flex justify-content-center p-2'>
                                <input type='checkbox' id="purpleCheck" checked={this.state.showPurple} onChange={this.toggleShowPurple}/>
                            </div>
                        </div>                            
                        <label className='m-0 d-flex justify-content-center bold' for="purpleCheck">Purple</label>
                    </div>

                    <div class='row d-flex justify-content-center'>
                        <div className='d-flex justify-content-center mt-4 mb-4 col-2'>   
                            <button className='btn btn-outline-dark' onClick={this.clearColors}>Clear All Colors</button>
                        </div>

                        <div class="form-check form-switch col-2 d-flex justify-content-center align-items-center">
                            <input class="form-check-input align-middle" type="checkbox" id="exactColors" checked={this.state.showExact} onChange={this.toggleShowExact}/>
                            <label class="form-check-label align-middle px-3" for="exactColors">Exact Colors</label>
                        </div>
                    </div>
                    

                    <div className='d-flex justify-content-center mt-2 mb-4'> Search for country: 
                        <div className='px-2'>
                            <input type="text" onChange={this.updateSearchTerm} placeholder="Search.." ></input>
                        </div>
                    </div>
                    

                </div>
                 
                <FlagList flags={filteredFlagExact}></FlagList>
            </div>
        );
    }
}

function FlagList({flags}){
    const flaglist = flags.map((flag) => {
        return (
            <div key={flag.id} className="col-6 col-md-3 mt-2">
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
            <Card className='border-dark'>
                <CardImg src={flag.image} alt={flag.name} style = {{border: "1px solid black"}}></CardImg>
                    <CardBody>
                        <CardTitle className='text-center bold'><p>{flag.name}</p></CardTitle>
                    </CardBody>
            </Card>
        </div>
    );
}

export default Main;