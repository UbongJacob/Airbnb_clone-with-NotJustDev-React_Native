import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import colors from '../styles/colors';

function Post(props) {
  const post = props.post;
  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
      <Text style={styles.bedrooms}>
        {' '}
        {post.bedroom} bedroom and {post.bed} bed
      </Text>
      <Text numberOfLines={2} style={styles.description}>
        {post.type}. {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>₦{post.oldPrice}</Text>
        <Text style={styles.newPrice}> ₦{post.newPrice} </Text>
        /night
      </Text>
      <Text style={styles.totalPrice}>₦{post.totalPrice}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bedrooms: {
    color: colors.lightGrey,
    marginVertical: 10,
  },
  container: {
    margin: 20,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  image: {
    aspectRatio: 3 / 2,
    borderRadius: 10,
    resizeMode: 'cover',
    width: '100%',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  oldPrice: {
    color: colors.lightGrey,
    textDecorationLine: 'line-through',
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  totalPrice: {
    color: colors.lightGrey,
    textDecorationLine: 'underline',
  },
});

export default Post;
