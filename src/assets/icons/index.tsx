import React from 'react';
import { IconProps, IconPropsDefault } from './types';
import Svg, { Circle, G, Path, Rect } from 'react-native-svg';
import { View } from 'react-native';

const defaultValues: IconProps = {
  width: 24,
  height: 24,
  fill: "#878686"
}

const adjIconProps = (props: IconProps): IconProps => {
  return {
    fill: props.fill || defaultValues.fill,
    width: props.width || defaultValues.width,
    height: props.height || defaultValues.height
  }
}

const Home = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" {...adjIconProps(props)}>
    <Path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
  </Svg>
)

const Person = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" {...adjIconProps(props)}>
    <Path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </Svg>
)

const Ticket = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" {...adjIconProps(props)}>
    <Path d="M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"/>
  </Svg>
)

const Search = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" {...adjIconProps(props)}>
    <Path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </Svg>
)

const IconNone = (props: IconProps) => (
  <Svg viewBox="0 0 192 192" {...adjIconProps(props)}>
    <Circle cx="96" cy="96" r="96" fill="#757575" />
    <Path fill="#bdbdbd" d="M29 29h134v134H29z" />
    <Path fill="#fff" d="M163 29L96 163 29 29h134z" />
  </Svg>
);

const ArrowBack = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" {...adjIconProps(props)}>
    <Path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
  </Svg>
);

const Calendar = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" {...adjIconProps(props)}>
    <Path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/>
  </Svg>
);

const Location = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" {...adjIconProps(props)}>
    <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
    <Circle cx="12" cy="9" r="2.5"/>  
  </Svg>
);

const Groups = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" {...adjIconProps(props)}>
    <Rect fill="none" height="24" width="24"/>
    <Path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"/>
  </Svg>
);

const Payments = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" {...adjIconProps(props)}>
    <Path d="M19,14V6c0-1.1-0.9-2-2-2H3C1.9,4,1,4.9,1,6v8c0,1.1,0.9,2,2,2h14C18.1,16,19,15.1,19,14z M17,14H3V6h14V14z M10,7 c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S11.66,7,10,7z M23,7v11c0,1.1-0.9,2-2,2H4c0-1,0-0.9,0-2h17V7C22.1,7,22,7,23,7z"/>
  </Svg>
);

const Close = (props: IconProps) => (
  <Svg viewBox="0 0 24 24" {...adjIconProps(props)}>
    <Path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
  </Svg>
);


export const IconList = {
  Home,
  Person,
  Ticket,
  Search,
  ArrowBack,
  IconNone,
  Calendar,
  Location,
  Groups,
  Payments,
  Close
}

const Icon = (props: IconPropsDefault) => {
  const { name, fill, height, width } = props
  let SelectedIcon = IconList[name]
  if (!SelectedIcon) SelectedIcon = IconList.IconNone

  return (
    <View>
      <SelectedIcon fill={fill} width={width} height={height}/>
    </View>
  )
}

export default Icon