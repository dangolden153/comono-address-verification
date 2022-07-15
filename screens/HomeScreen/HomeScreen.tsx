import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import NewsItem from "../../components/NewsItem/NewsItem";
import { selectNewsComment, selectNewsData, selectNewsImages } from "../../Redux/Features/news/newsSlices";
import { useSelector } from "react-redux";
import { getNewsData } from "../../Redux/Features/news/newsAction";
import { useAppDispatch } from "../../Redux/hooks";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const newData = useSelector(selectNewsData);

//   console.log('comments', comments)
  useEffect(() => {
    dispatch(getNewsData(dispatch));
  }, []);

  //   console.log('data', data)
  return (
    <View style={styles.container}>
      <FlatList
        data={newData}
        keyExtractor={({ id, index }: any) => (index + id).toString()}
        renderItem={({ item }: any) => <NewsItem {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
