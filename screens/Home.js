import React, { useEffect, useState } from "react";
import { SliderBox } from 'react-native-image-slider-box';
import List from '../components/List';
import Error from '../components/Error';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTv,
  getFamilyMovies,
  getDocumentaryMovies,
} from "../services/service";

const dimensions = Dimensions.get('screen');

const Home = ({ navigation }) => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaryMovies, setDocumentaryMovies] = useState();

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getPopularMovies(),
      getUpcomingMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentaryMovies(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(([
        upcomingMoviesData,
        popularMoviesData,
        popularTvData,
        familyMoviesData,
        documentaryMoviesData,
      ]) => {
        const moviesImagesArray = [];
        upcomingMoviesData.forEach(movie => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });

        setMoviesImages(moviesImagesArray);
        setPopularMovies(popularMoviesData);
        setPopularTv(popularTvData);
        setFamilyMovies(familyMoviesData);
        setDocumentaryMovies(documentaryMoviesData);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <React.Fragment>
      {/* Upcoming Movies */}
      {loaded && !error && (
        <ScrollView style={styles.container} >
          {moviesImages && (
            <View style={styles.sliderContainer}>
              <SliderBox
                images={moviesImages}
                dotStyle={styles.sliderStyle}
                sliderBoxHeight={dimensions.height / 1.5}
                autoplay={true}
                circleLoop={true}
              />
            </View>
          )}
          {popularMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Películas que mas gustan'} style={styles.title}
                content={popularMovies}
              />
            </View>
          )}

          {popularTv && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'lo mas popular en la televison'}
                content={popularTv}
              />
            </View>
          )}
         
          {familyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'lo mejor para un rato en familia'}
                content={familyMovies}
              />
            </View>
          )}
  
          {documentaryMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title={'Documentales'}
                content={documentaryMovies}
              />
            </View>
          )}
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" />}
      {error && <Error />}
    </React.Fragment>
  );
};
  



const styles = StyleSheet.create({
    sliderContainer: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    
    },
   sliderStyle: {
       height: 0,
   
  },
   carousel: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
   
  },
  container:{
    backgroundColor:"blue"
  },
});


   export default Home 