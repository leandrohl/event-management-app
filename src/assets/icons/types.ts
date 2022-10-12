import { IconList } from "."

export interface IconProps {
  fill?: string
  width?: number
  height?: number
}

export interface IconPropsDefault extends IconProps{
  name: IconName
}

export type IconName = keyof typeof IconList;
