import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FunctionComponent } from "react";
import { NewsItemProps } from "./type";
import RegularText from "../Text/RegularText";
import SmallText from "../Text/SmallText";
import { color } from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../Redux/hooks";
import { getNewsComments, getNewsImages } from "../../Redux/Features/news/newsAction";

const NewsItem: FunctionComponent<NewsItemProps> = (props) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  // console.log('props', props)
  const imgUrl =
    "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";

  // navigation.navigate("Details",props)
  const handleSubmit = (id: any) => {
    // console.log("id", id);
    navigation.navigate("Details",props)
    const datas = {id}
    dispatch(getNewsImages(datas))
    dispatch(getNewsComments(id))
  };
  return (
    <TouchableOpacity
      style={styles.newsItemContainer}
      onPress={() => handleSubmit(props.id)}
    >
      <View style={styles.image_author}>
        <Image source={{ uri: imgUrl }} style={styles.image} />
        <View>
          <RegularText textStyles={{ fontWeight: "500" }}>
            {props?.author}
          </RegularText>

          <View style={styles.tile_date}>
            <SmallText textStyles={{ color: color.gray, fontWeight: "500" }}>
              {props?.title}
            </SmallText>
            <View style={styles.space} />
            <SmallText textStyles={{ color: color.gray }}>
              {props.createdAt}
            </SmallText>
          </View>
        </View>
      </View>

      <RegularText textStyles={{ color: color.gray, marginTop: 25 }}>
        {props?.body}
      </RegularText>
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  newsItemContainer: {
    // backgroundColor: "plum",
    padding: 15,
    margin: 15,
    borderWidth: 1,
    borderColor: color.gray,
    overflow: "hidden",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 10,
  },
  tile_date: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },
  space: {
    height: 5,
    width: 5,
    marginHorizontal: 10,
    borderRadius: 100,
    backgroundColor: color.black,
  },
  image_author: {
    flexDirection: "row",
    alignItems: "center",
  },
});
