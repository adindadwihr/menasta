import {Node} from 'react';

import ImageBackground from '../../Image/ImageBackground';
import StyleSheet from '../../StyleSheet/StyleSheet';
import Text from '../../Text/Text';
import useColorScheme from '../../Utilities/useColorScheme';
import Colors from './Colors';
import React from 'react';

const Header = (): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ImageBackground
      accessibilityRole="image"
      testID="new-app-screen-header"
      source={require('./city.jpg')}
      style={[
        styles.background,
        {
          backgroundColor: Colors.white,
        },
      ]}
      imageStyle={styles.logo}>
      <Text
        style={[
          styles.text,
          {
            color: Colors.pastel,
          },
        ]}>
        MENASTA
        {'\n'}
        <Text style={{ fontSize: 22, color: Colors.pastel1 }}>Manajemen Inventaris Aset Kota</Text>
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 75,
    paddingHorizontal: 32,
  },
  logo: {
    opacity: 1,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: 145,
    marginBottom: 0,
  },
  text: {
    fontSize: 33,
    fontWeight: '700',
    textAlign: 'left',
  },
});

export default Header;