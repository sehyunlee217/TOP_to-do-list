import "./styles/skeleton.css";
import toggleMenu from "./pages/toggleMenu";
import addTask from "./pages/addTasks";
import displayLocalstorage, { sortLocalstorage } from "./pages/localStorage";

sortLocalstorage();
toggleMenu();
addTask();
