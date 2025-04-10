import { createContext, useContext } from "react";

const SelectedYearContext = createContext();

export const useContextYear = () => useContext(SelectedYearContext);

export default SelectedYearContext;
