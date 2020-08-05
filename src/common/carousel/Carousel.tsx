import React from 'react';
import {BsChevronCompactRight} from 'react-icons/bs';
import {BsChevronCompactLeft} from 'react-icons/bs';
import './Carousel.css';
import {Swipeable, EventData } from 'react-swipeable';

interface CarouselProps{
    name: string;
    images: string[];
    imagesNum: number;
}

interface CarouselState{
    currentPic: number;
}

class Carousel extends React.Component<CarouselProps,CarouselState>{

    id: any;

    constructor(props: CarouselProps, state: CarouselState){
        super(props,state);
        this.state = {
            currentPic: 0
        }
        this.id = setInterval(this.nextPic, 2500);
    }

    nextPic =():void =>{
        clearInterval(this.id);
        this.id = setInterval(this.nextPic, 2500);
        this.setState({
            currentPic: (this.state.currentPic == this.props.imagesNum - 1) ? 0 : this.state.currentPic + 1
        })
    }

    prevPic =():void =>{ 
        clearInterval(this.id);
        this.id = setInterval(this.nextPic, 2500);
        this.setState({
            currentPic: (this.state.currentPic == 0) ? this.props.imagesNum-1 : this.state.currentPic - 1
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
                    <BsChevronCompactLeft size={32} color='darkgrey' onClick={this.prevPic}/>
                    <div className='carouselImage'>
                        <img src={this.props.images[this.state.currentPic]} width='100%'/>
                    </div>
                    <BsChevronCompactRight size={32} color='darkgrey' onClick={this.nextPic}/>
                </div>
            </Swipeable>
        )
    }
}

export default Carousel;