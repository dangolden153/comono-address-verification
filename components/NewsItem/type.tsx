import { GestureResponderEvent } from "react-native";

export interface NewsItemProps {
  id?: string;
  title: string;
  author: string;
  body: string;
  createdAt: string;
  imageUrl: string;
  data?: Array<any>; 
  onPress: ((event: GestureResponderEvent) => void) | undefined
}
