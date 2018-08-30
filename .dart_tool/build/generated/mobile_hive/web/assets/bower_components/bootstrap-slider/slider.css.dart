library asset_mobile_hive_web_assets_bower_components_bootstrap_slider_slider.css.dart;


final List<dynamic> styles = ['/*!\n * Slider for Bootstrap\n *\n * Copyright 2012 Stefan Petre\n * Licensed under the Apache License v2.0\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n */\n.slider {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  margin-bottom: 10px\n}\n\n.slider[class*="span"] {\n  float: none;\n  margin-left: 0;\n}\n\n.slider-horizontal {\n  width: 210px;\n  height: 20px;\n}\n\n.slider-horizontal .slider-handle-container,\n.slider-horizontal .slider-track {\n  height: 10px;\n  margin-top: -5px;\n  top: 50%;\n}\n\n.slider-horizontal .slider-track {\n  left: 0;\n  right: 0;\n}\n\n.slider-horizontal .slider-handle-container {\n  left: 10px;\n  right: 10px;\n}\n\n.slider-horizontal .slider-selection {\n  height: 100%;\n  top: 0;\n  bottom: 0;\n}\n\n.slider-horizontal .slider-handle {\n  margin-left: -10px;\n  margin-top: -5px;\n}\n\n.slider-vertical {\n  height: 210px;\n  width: 20px;\n}\n\n.slider-vertical .slider-handle-container,\n.slider-vertical .slider-track {\n  width: 10px;\n  margin-left: -5px;\n  left: 50%;\n}\n\n.slider-vertical .slider-track {\n  top: 0;\n  bottom: 0;\n}\n\n.slider-vertical .slider-handle-container {\n  top: 10px;\n  bottom: 10px;\n}\n.slider-vertical .slider-selection {\n  width: 100%;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.slider-vertical .slider-handle {\n  margin-left: -5px;\n  margin-top: -10px;\n}\n\n.slider input,\n.slider input[class*="span"] {\n  display: none;\n}\n\n.slider .tooltip-inner {\n  white-space: nowrap;\n}\n\n.slider-handle-container {\n  position: absolute;\n}\n\n.slider-track {\n  position: absolute;\n  cursor: pointer;\n  background-color: #f7f7f7;\n  background-image: -moz-linear-gradient(top, #f5f5f5, #f9f9f9);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f5f5f5), to(#f9f9f9));\n  background-image: -webkit-linear-gradient(top, #f5f5f5, #f9f9f9);\n  background-image: -o-linear-gradient(top, #f5f5f5, #f9f9f9);\n  background-image: linear-gradient(to bottom, #f5f5f5, #f9f9f9);\n  background-repeat: repeat-x;\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n          border-radius: 4px;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#fff5f5f5\', endColorstr=\'#fff9f9f9\', GradientType=0);\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n     -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.slider-selection {\n  position: absolute;\n  background-color: #e6e6e6;\n  background-image: -moz-linear-gradient(top, #f0f0f0, #e0e0e0);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f0f0f0), to(#e0e0e0));\n  background-image: -webkit-linear-gradient(top, #f0f0f0, #e0e0e0);\n  background-image: -o-linear-gradient(top, #f0f0f0, #e0e0e0);\n  background-image: linear-gradient(to bottom, #f0f0f0, #e0e0e0);\n  background-repeat: repeat-x;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n     -moz-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-border-radius: 20px;\n     -moz-border-radius: 20px;\n          border-radius: 20px;\n}\n\n.slider-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n}\n\n.slider-knob {\n  width: 20px;\n  height: 20px;\n  background-color: #f5f5f5;\n  background-image: -moz-linear-gradient(top, #e6e6e6, #ffffff);\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#e6e6e6), to(#ffffff));\n  background-image: -webkit-linear-gradient(top, #e6e6e6, #ffffff);\n  background-image: -o-linear-gradient(top, #e6e6e6, #ffffff);\n  background-image: linear-gradient(to bottom, #e6e6e6, #ffffff);\n  background-repeat: repeat-x;\n  border: 1px solid #bbbbbb;\n  border-color: #e6e6e6 #e6e6e6 #bfbfbf;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  border-bottom-color: #a2a2a2;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ffffffff\', endColorstr=\'#ffe6e6e6\', GradientType=0);\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n     -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\n  -webkit-border-radius: 20px;\n     -moz-border-radius: 20px;\n          border-radius: 20px;\n}\n\n.slider-handle:active .slider-knob,\n.slider-handle:hover .slider-knob {\n  background-color: #e6e6e6;\n  background-position: 0 5px;\n  -webkit-transition: background-position 0.1s linear;\n     -moz-transition: background-position 0.1s linear;\n       -o-transition: background-position 0.1s linear;\n          transition: background-position 0.1s linear;\n}'];