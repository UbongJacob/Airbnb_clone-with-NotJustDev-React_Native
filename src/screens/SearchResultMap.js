import React, {useEffect, useRef, useState} from 'react';
import {FlatList, StyleSheet, useWindowDimensions, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import CustomMarker from '../components/CustomMarker';
import places from '../../assets/data/feed';
import PostCarouselItem from '../components/PostCarouselItem';

function SearchResultMap() {
  const [selectedPlaceID, setSelectedPlaceID] = useState(null);
  const flatList = useRef();
  const map = useRef();
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) setSelectedPlaceID(viewableItems[0].item.id);
  });
  const viewConfig = useRef({itemVisiblePercentThreshold: 80});
  const width = useWindowDimensions().width;

  useEffect(() => {
    if (!selectedPlaceID || !flatList) return;
    const index = places.findIndex(places => places.id === selectedPlaceID);
    flatList.current.scrollToIndex({index});

    const region = {
      latitude: places[index].coordinate.latitude,
      longitude: places[index].coordinate.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.05,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceID]);

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={map}
        style={styles.map}
        initialRegion={{
          latitude: 4.9989031,
          longitude: 8.3239373,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            isSelected={place.id === selectedPlaceID}
            onPress={() => setSelectedPlaceID(place.id)}
            price={place.newPrice}
          />
        ))}
      </MapView>
      <View style={styles.postCarouselContainer}>
        <FlatList
          data={places}
          decelerationRate="fast"
          horizontal
          onViewableItemsChanged={onViewChanged.current}
          ref={flatList}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          snapToInterval={width - width / 5}
          viewabilityConfig={viewConfig.current}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
  postCarouselContainer: {
    bottom: 29,
    position: 'absolute',
  },
});

export default SearchResultMap;
