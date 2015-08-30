# Range Grouping for jQuery

## Overview
Simple plugin to group input ranges. The ranges will be limited by a shared max sum.

<img src="https://raw.githubusercontent.com/jhovgaard/jquery.rangegroup/master/jquery.rangegroup.gif" />

Live example: http://jsfiddle.net/pfcjjkb7/

## Usage

First include jQuery and the rangegroup file:

    <script src="jquery.js" type="text/javascript"></script>
    <script src="jquery.rangegroup.js" type="text/javascript"></script>

Second, add the `range-group` and `range-group-max-sum` attributes to your range element like this:


    <input type="range" range-group="myGroup1" name="range1" range-group-max-sum="200" min="0" max="100">
    <input type="range" range-group="myGroup1" name="range2" range-group-max-sum="200" min="0" max="100">
    <input type="range" range-group="myGroup1" name="range3" range-group-max-sum="200" min="0" max="100">

Please notice if the max-sum values is different, the plugin will use the value set in the first input.
