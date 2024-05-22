import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const {track,seekBar, seekBg, playStatus, play, pause,time} = useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-cyan-900 flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img src={track.image} alt="song" className='w-12'/>
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,30)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 mx-auto'>
            <div className='flex gap-4'>
                <img src={assets.shuffle_icon} alt="shuffleIcon" className='w-4 cursor-pointer'/>
                <img src={assets.prev_icon} alt="prevIcon" className='w-4 cursor-pointer'/>
                {playStatus
                ?<img onClick={pause} src={assets.pause_icon} alt="playIcon" className='w-4 cursor-pointer'/>
                :<img onClick={play} src={assets.play_icon} alt="playIcon" className='w-4 cursor-pointer'/>}
                <img src={assets.next_icon} alt="nextIcon" className='w-4 cursor-pointer'/>
                <img src={assets.loop_icon} alt="loopIcon" className='w-4 cursor-pointer'/>
            </div>

            <div className='flex items-center gap-5'>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 border-none w-0 bg-red-700 rounded-full'/>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>  
        </div>  
        <div className='hidden lg:flex items-center gap-2 opacity-75 '>
                <img src={assets.plays_icon} alt="playingIcon" className='w-4'/>
                <img src={assets.mic_icon} alt="micIcon" className='w-4'/>
                <img src={assets.queue_icon} alt="queueIcon" className='w-4'/>
                <img src={assets.speaker_icon} alt="speakerIcon" className='w-4'/>
                <img src={assets.volume_icon} alt="volumeIcon" className='w-4'/>
                <div className='w-20 bg-slate-50 h-1 rounded'>

                </div>
                <img src={assets.mini_player_icon} alt="miniIcon" className='w-4'/>
                <img src={assets.zoom_icon} alt="zoomIcon" className='w-4'/>
            </div>
    </div>
  )
}

export default Player