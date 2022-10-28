import {
  isMultiColorActive,
  defaultColor,
  isDarkSwitchActive,
} from "./constants/defaultValues";
import { getCurrentColor, setCurrentColor } from "./helpers/Utils";

const color =
  isMultiColorActive || isDarkSwitchActive ? getCurrentColor() : defaultColor;
setCurrentColor(color);

const render = () => {
  import(`./assets/css/sass/themes/gogo.${color}.scss`).then(() => {
    require("./AppRenderer");
  });
};
render();
