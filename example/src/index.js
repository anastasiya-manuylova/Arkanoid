import "./style.css";
import Two from "./two";
import Window from './model/Window';
import Platform from './model/Platform';

const elementWindow = document.getElementById("window");
const elementPlatform = document.getElementById("platform");
const windowMalyar = new Window(600, 600); 
const platform = new Platform(50, 10, "blue", 300, 580, elementPlatform);
console.log(windowMalyar)
//windowMalyar.draw();
platform.draw(windowMalyar.getParams());