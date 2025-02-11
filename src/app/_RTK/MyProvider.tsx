"use client";
import store from "./Slice";
import { Provider } from "react-redux";

const MyProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default MyProvider;
