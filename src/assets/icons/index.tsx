import React from 'react';
import { IconProps, IconPropsDefault } from './types';
import Svg, { Circle, G, Path } from 'react-native-svg';
import { View } from 'react-native';

const defaultValues: IconProps = {
  width: 24,
  height: 24,
  fill: "#000"
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

export const IconList = {
  Home,
  Person,
  Ticket,
  Search,
  IconNone
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