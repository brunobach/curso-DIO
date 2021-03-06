import React from 'react'
import Slider from 'rc-slider'

import {Container, Current, Volume, Progress, Controls, Time, ProgressSlider} from './styles'

import VolumeIcon from '../../assets/images/volume.svg'
import ShuffleIcon from '../../assets/images/shuffle.svg'
import BackwardIcon from '../../assets/images/backward.svg'
import PlayIcon from '../../assets/images/play.svg'
import PauseIcon from '../../assets/images/pause.svg'
import ForwardIcon from '../../assets/images/forward.svg'
import RepeatIcon from '../../assets/images/repeat.svg'

const Player = () => (

<Container>
    <Current>
        <img src="https://albumcoverhalloffame.files.wordpress.com/2014/03/rk-longnightmoon-coverglow.jpg" alt="cover" />

        <div>
            <span>Times New Romans</span>
            <small>Rafa moreira mano</small>
        </div>
    
    </Current>
    
    <Progress>
        <Controls>
            <button><img src={ShuffleIcon} alt="Shuffle"/></button>
            <button><img src={BackwardIcon} alt="Shuffle"/></button>
            <button><img src={PlayIcon} alt="Shuffle"/></button>
            <button><img src={ForwardIcon} alt="Shuffle"/></button>
            <button><img src={RepeatIcon} alt="Shuffle"/></button>
        </Controls>
        <Time>
            <span>1:39</span>
            <ProgressSlider>
                <Slider
                    railStyle={{background:'#404040', borderRadius: 10}}
                    trackStyle={{background: '#1ED760'}}
                    handleStyle={{border: 0}}
                />
            </ProgressSlider>
            <span>4:20</span>
        </Time>
    </Progress>

    <Volume>
        <img src={VolumeIcon} alt="Volume"/>
        <Slider 
            railStyle={{background: '#404040', borderRadius: 10}}
            trackStyle={{background: '#fff'}}
            handleStyle={{display:'none'}}
           // value={100}
        />    
    </Volume>
</Container>
)

export default Player