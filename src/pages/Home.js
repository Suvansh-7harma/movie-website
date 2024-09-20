import React from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScollCard from "../components/HorizontalScrollCard";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.movieoData.bannerData);
  const { data: nowPlayingData, loading: loadingNowPlaying } =
    useFetch("/movie/now_playing");
  const { data: topRatedData, loading: loadingTopRated } =
    useFetch("/movie/top_rated");
  const { data: popularTvShowData, loading: loadingPopularTv } =
    useFetch("/tv/popular");
  const { data: onTheAirShowData, loading: loadingOnTheAir } =
    useFetch("/tv/on_the_air");

  if (
    loadingNowPlaying ||
    loadingTopRated ||
    loadingPopularTv ||
    loadingOnTheAir
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BannerHome />
      <HorizontalScollCard
        data={trendingData}
        heading={"Trending"}
        trending={true}
      />
      <HorizontalScollCard
        data={nowPlayingData}
        heading={"Now Playing"}
        media_type={"movie"}
      />
      <HorizontalScollCard
        data={topRatedData}
        heading={"Top Rated Movies"}
        media_type={"movie"}
      />
      <HorizontalScollCard
        data={popularTvShowData}
        heading={"Popular TV Shows"}
        media_type={"tv"}
      />
      <HorizontalScollCard
        data={onTheAirShowData}
        heading={"On The Air"}
        media_type={"tv"}
      />
    </div>
  );
};

export default Home;
