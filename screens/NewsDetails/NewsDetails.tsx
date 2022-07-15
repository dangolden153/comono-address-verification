import {
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import { color } from "../../constants/Colors";
import { selectNewsImages } from "../../Redux/Features/news/newsSlices";
import { useAppSelector } from "../../Redux/hooks";
import NewsMessage from "../../components/NewsMessage/NewsMessage";
import Comment from "../../components/Comment/Comment";

const NewsDetails = ({ route }: any) => {
  const { width } = useWindowDimensions();
  const {title, body,id } = route?.params;
  // console.log("route?.params", route?.params);
  const images = useAppSelector(selectNewsImages);

  const imgs = [
    "https://images.unsplash.com/photo-1657657909919-7236580215b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1657555456661-e2855cc4a2f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1657576052888-2a30cee0f3e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  ];

  return (
    <View style={styles.container}>
      <View >
        <FlatList
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          legacyImplementation={false}
          data={images?.length > 1 ? images : imgs}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ height: 250, width: width }}
            />
          )}
          horizontal={true}
          style={{ width: width + 5, height: 250 }}
        />
      </View>

      <View style={{ padding: 20, flex: 1 }}>
        {/********** news message  ***********/}
        <NewsMessage body={body} title={title} id={id} style />

        {/********** comment ***********/}
        <Comment />
      </View>
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
});
