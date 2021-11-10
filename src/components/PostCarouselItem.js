import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import colors from '../styles/colors';

function Post(props) {
  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  const post = props.post;
  const width = useWindowDimensions().width;

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.bedrooms}>
            {post.bedroom} bedroom and {post.bed} bed
          </Text>
          <Text numberOfLines={2} style={styles.description}>
            {post.type}. {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newPrice}>₦{post.newPrice} </Text>
            /night
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bedrooms: {
    color: colors.lightGrey,
    marginVertical: 10,
  },
  container: {
    elevation: 10,
    height: 120,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  detailsContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  description: {
    fontSize: 15,
  },
  image: {
    aspectRatio: 1 / 1,
    borderRadius: 5,
    height: '100%',
    resizeMode: 'cover',
  },
  innerContainer: {
    backgroundColor: colors.black,
    borderRadius: 10,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  newPrice: {
    color: colors.black,
    fontWeight: 'bold',
  },
  oldPrice: {
    color: colors.lightGrey,
    textDecorationLine: 'line-through',
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },
  totalPrice: {
    color: colors.lightGrey,
    textDecorationLine: 'underline',
  },
});

export default Post;
