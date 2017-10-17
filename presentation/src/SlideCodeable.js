import { Slide } from "spectacle";

class SlideCodeable extends Slide {
    constructor(props) {
        super(props);

        if (props.audio) {
            /**
             * @type {Audio}
             */
            this.audio = props.audio();
            this.audio.loop = true;
        }
    }

    componentDidMount() {
        if (this.audio) {
            this.audio.play();
        }
    }

    componentWillUnmount() {
        if (this.audio) {
            this.audio.muted = true;
        }
    }


}

export { SlideCodeable };