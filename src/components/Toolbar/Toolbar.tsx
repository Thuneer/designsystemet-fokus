/* eslint-disable @next/next/no-img-element */
import classes from "./Toolbar.module.css";
import { IconButton } from "../IconButton/IconButton";
import {
  EnvelopeClosedIcon,
  BellIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@navikt/aksel-icons";
import { Button, DropdownMenu, Search } from "@digdir/design-system-react";

export const Toolbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Search
          label="Label"
          placeholder="Søk her..."
          size="small"
          variant="simple"
          className={classes.searchField}
          htmlSize={20}
        />
        <Button size="small" variant="tertiary" color="second">
          Hurtighandlinger
          <ChevronDownIcon title="a11y-title" fontSize="1.5rem" />
        </Button>
      </div>
      <div className={classes.right}>
        <button className={classes.iconBtn}>
          <EnvelopeClosedIcon title="a11y-title" fontSize="1.5rem" />
        </button>

        <div className="profile">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <button className={classes.iconBtn}>
                <BellIcon title="a11y-title" fontSize="1.5rem" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Group>
                <DropdownMenu.Item>Item</DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
        <div className="profile">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <button className={classes.profileBtn}>
                <span className={classes.avatar}>
                  <img src="img/avatar.webp" alt="Avatar" />
                </span>
                <span className={classes.name}>Ola Normann</span>
                <span className={classes.chevron}>
                  <ChevronDownIcon title="a11y-title" fontSize="1.4rem" />
                </span>
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Group>
                <DropdownMenu.Item>Item</DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
