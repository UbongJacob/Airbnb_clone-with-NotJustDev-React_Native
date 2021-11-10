import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import colors from '../styles/colors';
import DetailedPost from '../components/DetailedPost';
import places from '../../assets/data/feed';

function PostScreen() {
  const route = useRoute();
  const post = places.find(place => place.id === route.params.postId);

  return (
    <View style={styles.container}>
      <DetailedPost post={post} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
});

export default PostScreen;
