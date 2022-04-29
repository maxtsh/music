import Image from "next/image";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { FaStepBackward, FaStepForward, FaMusic } from "react-icons/fa";
import { FiRepeat } from "react-icons/fi";
import { BsShuffle } from "react-icons/bs";
import { Input } from "./Audio.styles";
import AudioManager from "./AudioManager";

const Audio: React.FC = () => {
  const {
    time,
    duration,
    audioPlayerRef,
    progressRef,
    isPlaying,
    handleChangeSlider,
    handlePlayPause,
    handleForward,
    handleBackward,
  } = AudioManager();

  return (
    <div className="player-body">
      <audio
        className="player-body-audio"
        src="/musics/track-01.mp3"
        controls
        preload="metadata"
        ref={audioPlayerRef}
      >
        Your browser does not support audio
      </audio>
      <div className="player-body-timeline">
        <Input
          defaultValue={0}
          className="player-body-timeline-slider"
          type="range"
          name=""
          id=""
          onChange={handleChangeSlider}
          ref={progressRef}
          w={`${
            (Number(progressRef?.current?.value) /
              Number(audioPlayerRef?.current?.duration)) *
            100
          }%`}
        />
        <div className="player-body-timeline-current">{time}</div>
        <div className="player-body-timeline-duration">{duration}</div>
      </div>
      <div className="player-body-tools">
        <button className="player-body-tools-shuffle">
          <BsShuffle className="player-body-tools-shuffle-icon" />
        </button>
        <button onClick={handleBackward} className="player-body-tools-next30">
          <FaStepBackward className="player-body-tools-prev30-icon" />
        </button>
        <button onClick={handlePlayPause} className="player-body-tools-pp">
          {isPlaying ? (
            <BsPauseFill className="player-body-tools-pp-icon" />
          ) : (
            <BsPlayFill className="player-body-tools-pp-icon" />
          )}
        </button>
        <button onClick={handleForward} className="player-body-tools-prev30">
          <FaStepForward className="player-body-tools-next30-icon" />
        </button>
        <button className="player-body-tools-repeat">
          <FiRepeat className="player-body-tools-repeat-icon" />
        </button>
      </div>
    </div>
  );
};

export default Audio;
