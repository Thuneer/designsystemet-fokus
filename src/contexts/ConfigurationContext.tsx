import { createContext } from "react";

export type ConfigurationType = {
  theme: string;
  fokus: string;
  device: string;
  paneState: boolean;
};

const Configuration: ConfigurationType = {
  theme: "lightmode",
  fokus: "transparent",
  device: "desktop",
  paneState: true,
};

export const ConfigurationContext = createContext({
  configuration: Configuration,
  setConfiguration: (configuration: ConfigurationType) => {},
});
