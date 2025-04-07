import React from 'react';
import { 
    RainIconAnimated, 
    SnowIconAnimated, 
    SunCloudIconAnimated,
    SunIconAnimated,
    ThunderIconAnimated,
    WindCloudIconAnimated
} from './AnimatedIcons/index';


export interface Props {
    weatherName: string;
}
interface State {
    weatherName: string;
}

export default class AnimatedWeatherIcon extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            weatherName: props.weatherName || 'weather-sunny',
        };
    }

    render() {

        var weatherIcon;
        switch(this.props.weatherName) {
            case 'weather-rainy':
                weatherIcon = <RainIconAnimated />
                break;
            case 'weather-sunny':
                weatherIcon = <SunIconAnimated />
                break;
            case 'weather-lightning':
                weatherIcon = <ThunderIconAnimated />
                break;
            case 'weather-cloudy':
                weatherIcon = <SunCloudIconAnimated />
                break;
            case 'weather-snowy':
                weatherIcon = <SnowIconAnimated />
                break;
            case 'weather-hail':
                weatherIcon = <RainIconAnimated />
                break;
            case 'weather-fog':
                weatherIcon = <SunCloudIconAnimated />
                break;
            case 'weather-windy':
                weatherIcon = <WindCloudIconAnimated />
            default:
                weatherIcon = <SnowIconAnimated />
        }

        return weatherIcon;
    }
}