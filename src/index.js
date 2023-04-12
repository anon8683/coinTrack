import header from "./header";
import main from "./main";
import createLayout from "./layout";
import "./style.css";

createLayout(); //creates grid that containers header,main,footer
header(); // adds header
main();

// when user clicks + button,
// get the amount of holdings and SYMOBL
// fetch data from api of that SYMBOL
// calculte holding value, calc total portfolio value
