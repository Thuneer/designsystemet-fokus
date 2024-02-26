import { createContext } from "react";

export type ConfigurationType = {
  theme: string;
  colorTheme: string;
  focus: string;
  device: string;
  paneState: boolean;
};

const Configuration: ConfigurationType = {
  theme: "lightmode",
  colorTheme: "digdir",
  focus: "transparent",
  device: "desktop",
  paneState: true,
};

export const ConfigurationContext = createContext({
  configuration: Configuration,
  setConfiguration: (configuration: ConfigurationType) => {},
});
