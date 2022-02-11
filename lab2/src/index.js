import "babel-polyfill";
import { search } from "./search";
import debounce from "lodash.debounce";

document.querySelector("#animal-search").addEventListener("keyup", debounce(search, 300));
