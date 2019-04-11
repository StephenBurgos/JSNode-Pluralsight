"use strict";
// IMPORTS //////////////////
import * as FUNCS from "./functions.js";
import * as VARS from "./variables.js";
import * as OBJS from "./classObjects.js";

VARS.firstButton.addEventListener("click",function(){
    FUNCS.clearPar();
    FUNCS.hideButton();
});

VARS.secondButton.addEventListener("click",function(){
    FUNCS.clearPar();
    FUNCS.hideButton();
});

VARS.thirdButton.addEventListener("click",function(){
    FUNCS.clearPar();
    FUNCS.hideButton();
});

VARS.fourthButton.addEventListener("click",function(){
    FUNCS.clearPar();
    FUNCS.hideButton();
});

console.log("Hello");