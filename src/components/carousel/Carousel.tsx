import React from 'react';
import {BsChevronCompactRight} from 'react-icons/bs';
import {BsChevronCompactLeft} from 'react-icons/bs';
import './Carousel.css';
import {Swipeable, EventData } from 'react-swipeable';

interface CarouselProps{
    images: string[];
    imagesNum: number;
}

interface CarouselState{
    currentPic: number;
}

class Carousel extends React.Component<CarouselProps,CarouselState>{

    id: any;
    timeout: number;

    constructor(props: CarouselProps, state: CarouselState){
        super(props,state);
        this.state = {
            currentPic: 0
        }
        this.timeout = 5000;
        this.id = setInterval(this.nextPic, this.timeout);
    }

    nextPic =():void =>{
        clearInterval(this.id);
        this.id = setInterval(this.nextPic, this.timeout);
        this.setState({
            currentPic: (this.state.currentPic === this.props.imagesNum - 1) ? 0 : this.state.currentPic + 1
        })
    }

    prevPic =():void =>{ 
        clearInterval(this.id);
        this.id = setInterval(this.nextPic, this.timeout);
        this.setState({
            currentPic: (this.state.currentPic === 0) ? this.props.imagesNum-1 : this.state.currentPic - 1
        })
    }

    swipeRightEvent=(event: EventData):void =>{
        event.event.stopPropagation();
        this.prevPic();
    }

    swipeLeftEvent=():void =>{
        this.nextPic();
    }

    render(){
        return(
            <Swipeable onSwipedRight={this.swipeRightEvent} onSwipedLeft={this.swipeLeftEvent} >
                <div className='carousel'>
                    {this.props.imagesNum>1 ? <BsChevronCompactLeft size={32} color='darkgrey' onClick={this.prevPic} className='carouselButtons'/> : null}
                    <div className='carouselImage'>
                        <img src={this.props.images[this.state.currentPic]} width='100%'/>
                    </div>
                    {this.props.imagesNum>1 ? <BsChevronCompactRight size={32} color='darkgrey' onClick={this.nextPic} className='carouselButtons'/> : null}
                </div>
            </Swipeable>
        )
    }
}

export default Carousel;