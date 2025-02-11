"use client";
import { fetchData } from "@/app/_RTK/DataSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/_RTK/Slice";
import Card from "../cards/Card";
import Loader from "../Loader";

const MainSection = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.weather);
  const city = useSelector((state: RootState) => state.city);
  useEffect(() => {
    dispatch(fetchData(city));
  }, [dispatch, city]);
  return (
    <div className="w-full z-10 mt-10 flex h-full  items-center justify-center  ">
      <div>
        {data.loading ? <Loader /> : <Card {...data?.data} />}
      </div>
    </div>
  );
};

export default MainSection;
