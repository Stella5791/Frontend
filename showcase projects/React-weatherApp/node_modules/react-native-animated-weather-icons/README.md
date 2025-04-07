# react-native-animated-weather-icons
Animated SVG Weather Icons for React Native

### Forked from [react-native-animated-weather-icons](https://github.com/stan-sack/react-native-animated-weather-icons) by stan-sack

## Requirements
* [react-native-svg](https://github.com/react-native-svg/react-native-svg)

## Installation
````
yarn add react-native-weather-icons
````

## Usage
````
import AnimatedWeatherIcon from 'react-native-animated-weather-icons';
````

# Props
|    Property  | Type          | Default         | Description |
| -------------| ------------- | --------------- | ------------- |
| weatherName  | string        | 'weather-sunny' | Specifies icon to show|

# Example
````javascript
const App: () => Node = () => {
  return (
    <View>
      <AnimatedWeatherIcon 
        weatherName="weather-sunny"
      />
    </View>
  )
}
````
