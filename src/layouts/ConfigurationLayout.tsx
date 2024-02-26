import classes from "./ConfigurationLayout.module.css";
import cn from "classnames";
import { Configurator } from "@/components/Configurator/Configurator";
import { ConfigurationContext } from "@/contexts/ConfigurationContext";
import { useContext } from "react";

type ConfigurationLayoutProps = {
  children: React.ReactNode;
};

export const ConfigurationLayout = ({ children }: ConfigurationLayoutProps) => {
  const { configuration } = useContext(ConfigurationContext);

  return (
    <div className={classes.page}>
      <div
        className={cn(classes.sidebar, {
          [classes.paneOpen]: configuration.paneState,
        })}
      >
        <Configurator />
      </div>
      <div
        className={cn(
          classes.content,
          {
            [classes.contentPadding]: configuration.paneState,
          },
          {
            [classes.contentSmall]:
              configuration.device === "mobile" ||
              configuration.device === "tablet",
          }
        )}
      >
        <div className={(classes.test, classes[configuration.device])}>
          {children}
        </div>
      </div>
    </div>
  );
};
