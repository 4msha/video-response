import React ,{Component} from "react";
import "./home.css";

import {NavbarComponent} from "../../components/navbar";

// I've seen a few of these BB-8 animations about, so I thought I'd take a shot at building one using React as a bit of an exercise. My favorite thing to do is draw circles around him to make him do a little jig, but I'm easily amused.


export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            droidX: 0,
            mouseX: 0,
            toTheRight: true,
            speed: 2,
            accelMod: 1
        }
    }

    // Keep track of the mouse position.
    handleMouseMove(event) {
        this.setState({
            mouseX: event.pageX
        })
    }

    // Speed Mod Bar
    handleSpeedChange(e) {
        if(parseFloat(e.target.value)) {
            this.setState({
                speed: e.target.value
            })
        }
    }

    // Acceleration Mod Bar
    handleAccelChange(e) {
        if(parseFloat(e.target.value)) {
            this.setState({
                accelMod: e.target.value
            })
        }
    }

    // Get moving!
    movement() {
        let {droidX, mouseX, speed, accelMod} = this.state;

        // Need a pretty strict if statement to make sure React doesn't end up in a
        // render loop with all the state changes / re-rendering going on.
        if(Math.abs(Math.round(droidX)-mouseX) !== 1){

            let distance = mouseX - droidX;
            let acceleration = Math.abs(distance * accelMod) / 100;

            // Move to the right
            if (droidX < mouseX) {
                this.setState({
                    droidX: droidX+(speed*acceleration),
                    toTheRight: true
                });
            }

            // Move to the left
            else {
                this.setState({
                    droidX: droidX-(speed*acceleration),
                    toTheRight: false
                });
            }
        }
    }

    // Get some initial movement on first mount.
    componentWillMount() {
        this.setState({
            mouseX: 300
        });
    }

    // Set up the mouse event listener and fire up the movement function.
    componentDidMount() {
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        setInterval(this.movement.bind(this), 1);
    }

    // Clean up.
    componentWillUnmount() {
        document.removeEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    // Away we go.
    render() {
        let {speed, accelMod, droidX, mouseX, toTheRight} = this.state;

        return (
            <>
            <div className=" min-h-screen">
                {/*<NavbarComponent/>*/}
                {/*<div className="logo">*/}
                {/*    <img src="http://i68.tinypic.com/iod6yh.png" />*/}
                {/*</div>*/}

                {/*<div className="config">*/}
                {/*    <div className='control-wrap'>*/}
                {/*        <p>Speed: {speed}</p>*/}
                {/*        <input*/}
                {/*            type="range"*/}
                {/*            min="0"*/}
                {/*            max="11"*/}
                {/*            step="0.1"*/}
                {/*            value={speed}*/}
                {/*            onChange={this.handleSpeedChange.bind(this)} />*/}
                {/*    </div>*/}
                {/*    <div className='control-wrap'>*/}
                {/*        <p>Acceleration: {accelMod}</p>*/}
                {/*        <input*/}
                {/*            type="range"*/}
                {/*            min="0"*/}
                {/*            max="3"*/}
                {/*            step="0.1"*/}
                {/*            value={accelMod}*/}
                {/*            onChange={this.handleAccelChange.bind(this)} />*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="pt-10 mx-auto max-h-screen-xl max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
                    <div className="sm:text-center lg:text-left">
                        <p className="text-4xl tracking-tight leading-10 font-extrabold text-purple-900 sm:text-5xl sm:leading-none md:text-6xl">
                            Meet Personally on your
                            <br className="xl:hidden"/>
                            <span className="text-purple-500"> online business</span>
                        </p>
                        <p className="mt-3 text-base text-gray-600     sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Why to use Chatbot ? <br/>
                            When you can interact personally.<br/>
                            <span className="text-4xl text-orange-700 font-black ">Add Video Interaction to your Website </span>
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center flex  lg:justify-start">
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href="#"
                                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-700 hover:text-white hover:bg-orange-300 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                    Get Started
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href="#"
                                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-orange-700 bg-green-300 hover:text-white hover:bg-orange-300 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                    Live demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bb8" style={{WebkitTransform: `translateX(${droidX}px)`}}>
                    <div className={'antennas ' + (toTheRight ? 'right' : '')}
                         style={{WebkitTransform: `translateX(${(mouseX - droidX) / 25}px) rotateZ(${(mouseX - droidX) / 80 }deg)`}}>
                        <div className="antenna short"></div>
                        <div className="antenna long"></div>
                    </div>
                    <div className="head"
                         style={{WebkitTransform: `translateX(${(mouseX - droidX) / 15}px) rotateZ(${(mouseX - droidX) / 25}deg)`}}>
                        <div className="stripe one"></div>
                        <div className="stripe two"></div>
                        <div className={'eyes ' + (toTheRight ? 'right' : '')}>
                            <div className="eye one"></div>
                            <div className="eye two"></div>
                        </div>
                        <div className={'stripe detail ' + (toTheRight ? 'right' : '')}>
                            <div className="detail zero"></div>
                            <div className="detail zero"></div>
                            <div className="detail one"></div>
                            <div className="detail two"></div>
                            <div className="detail three"></div>
                            <div className="detail four"></div>
                            <div className="detail five"></div>
                            <div className="detail five"></div>
                        </div>
                        <div className="stripe three"></div>
                    </div>
                    <div className="ball" style={{WebkitTransform: `rotateZ(${droidX / 2}deg)`}}>
                        <div className="lines one"></div>
                        <div className="lines two"></div>
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                    </div>
                    <div className="shadow"></div>
                </div>


                <div className="instructions">
                    <p>move your mouse.</p>
                </div>

            </div>
                </>
        );
    }
}

// export default Home();