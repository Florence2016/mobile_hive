library asset_mobile_hive_web_assets_bower_components_ckeditor_plugins_easyimage_styles_easyimage.css.dart;


final List<dynamic> styles = ['/*\r\nCopyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.\r\nFor licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license\r\n*/\r\n\r\n.easyimage, .cke_widget_wrapper_easyimage {\r\n	background: transparent;\r\n	border: none;\r\n	outline: 0px;\r\n	display: block;\r\n	padding: 0;\r\n	clear: both;\r\n}\r\n\r\n/*\r\nThe outline is not a part of the element\'s dimensions. A border needs to be used as an outline to align the linked image with a caption.\r\n*/\r\n.easyimage a > img {\r\n	outline: none;\r\n	border: 1px solid #0782C1;\r\n	box-sizing: border-box;\r\n	padding: 1px;\r\n}\r\n\r\n.cke_widget_wrapper_easyimage figure {\r\n	margin: 0;\r\n}\r\n\r\n.easyimage img, .cke_widget_uploadeasyimage img {\r\n	display: block;\r\n	height: auto;\r\n	margin: 0 auto;\r\n	max-width: 100%;\r\n}\r\n\r\n.cke_widget_wrapper_easyimage-side, :not(.cke_widget_wrapper_easyimage):not(.cke_widget_wrapper_easyimage-side) > .easyimage-side,\r\n.cke_widget_wrapper_easyimage-align-right, :not(.cke_widget_wrapper_easyimage):not(.cke_widget_wrapper_easyimage-align-right) > .easyimage-align-right {\r\n	/*\r\n	The :not() selector will be used for Easy Image content ouside of the editor, for example: when the editor was destroyed.\r\n	See https://github.com/ckeditor/ckeditor-dev/pull/1150#discussion_r150415261 for more details.\r\n	*/\r\n	float: right;\r\n	max-width: 50%;\r\n	/*\r\n	In case of placement inside the parent container like a table cell, \'min-width\' is needed to prevent the widget from having\r\n	tiny sizes. The `em` unit is used so it works well and has proper proportions to the textual content around (#1553).\r\n	*/\r\n	min-width: 10em;\r\n	margin-left: 1.5em;\r\n}\r\n\r\n/*\r\nOverwrite \'max-width: 50%\' with \'max-width: 50vw\' to prevent the native Chrome bug:\r\nhttps://bugs.chromium.org/p/chromium/issues/detail?id=803045 (#1550).\r\n*/\r\nbody.cke_editable > .cke_widget_wrapper_easyimage-side {\r\n	max-width: 50vw;\r\n}\r\n\r\n.cke_widget_wrapper_easyimage-align-left, :not(.cke_widget_wrapper_easyimage):not(.cke_widget_wrapper_easyimage-align-left) > .easyimage-align-left {\r\n	float: left;\r\n	max-width: 50%;\r\n	min-width: 10em;\r\n	margin-right: 1.5em;\r\n}\r\n\r\n.cke_widget_wrapper_easyimage-align-center, :not(.cke_widget_wrapper_easyimage):not(.cke_widget_wrapper_easyimage-align-center) > .easyimage-align-center {\r\n	margin: 0 auto;\r\n	max-width: 90%;\r\n}\r\n\r\n.easyimage .cke_widget_editable {\r\n	background-color: #f7f7f7;\r\n	/* Add border so when caption is focused, blue border does not cause flickering. */\r\n	border: 1px solid #f7f7f7;\r\n	color: #333;\r\n    padding: .8em;\r\n}\r\n\r\n.cke_widget_wrapper:hover .easyimage .cke_widget_editable {\r\n	outline: 3px solid transparent;\r\n}\r\n\r\n.cke_widget_wrapper .easyimage .cke_widget_editable.cke_widget_editable_focused {\r\n	background-color: #fff;\r\n	border-color: #48a3f5;\r\n	outline: none;\r\n}\r\n\r\n/* Loaders */\r\n\r\n.cke_widget_element.easyimage {\r\n	position: relative;\r\n}\r\n\r\n.cke_loader {\r\n	position: absolute;\r\n	top: 0px;\r\n	left: 0px;\r\n	right: 0px;\r\n}\r\n\r\n.cke_loader .cke_bar {\r\n	height: 10px;\r\n	background: #6a9ed1;\r\n	width: 0;\r\n}\r\n\r\n/* Fancy opacity effect discussed in #1533. Transition is assigned in this awkward way so that it **does not** happen for\r\nthe initial render, otherwise it would start transitioning from opacity 1 to 0.x upon the first render. */\r\n\r\n.cke_widget_wrapper_easyimage:not(.cke_widget_wrapper_uploading) figure img {\r\n	transition: opacity 0.3s ease-in-out;\r\n}\r\n\r\n.cke_widget_wrapper_easyimage.cke_widget_wrapper_uploading figure img {\r\n	opacity: 0.75;\r\n}\r\n'];