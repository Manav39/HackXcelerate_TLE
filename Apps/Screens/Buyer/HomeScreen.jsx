import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../Components/HomeScreen/Header";
import Slider from "../../Components/HomeScreen/Slider";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import Category from "../../Components/HomeScreen/Category";
export default function HomeScreen() {
  const [sliderList, setSliderList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getSliders();
    getCategory();
  }, []);
  const getSliders = async () => {
    setSliderList("");
    const snap = await getDocs(collection(db, "Sliders"));
    snap.forEach((doc) => {
      setSliderList((sliderList) => [...sliderList, doc.data()]);
    });
  };

  const getCategory = async () => {
    setCategoryList("");
    const snap = await getDocs(collection(db, "Category"));
    snap.forEach((doc) => {
      setCategoryList((categoryList) => [...categoryList, doc.data()]);
    });
  };

  return (
    <View className=" px-6 bg-white flex-1">
      <View style={{ marginTop: 15 }}>
        <Header />
      </View>
      <Slider sliderList={sliderList} />
      <Category categoryList={categoryList} />
    </View>
  );
}
