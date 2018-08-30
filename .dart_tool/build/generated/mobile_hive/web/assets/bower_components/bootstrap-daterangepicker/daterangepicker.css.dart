library asset_mobile_hive_web_assets_bower_components_bootstrap_daterangepicker_daterangepicker.css.dart;


final List<dynamic> styles = ['.daterangepicker {\n  position: absolute;\n  color: inherit;\n  background-color: #fff;\n  border-radius: 4px;\n  width: 278px;\n  padding: 4px;\n  margin-top: 1px;\n  top: 100px;\n  left: 20px;\n  /* Calendars */ }\n  .daterangepicker:before, .daterangepicker:after {\n    position: absolute;\n    display: inline-block;\n    border-bottom-color: rgba(0, 0, 0, 0.2);\n    content: \'\'; }\n  .daterangepicker:before {\n    top: -7px;\n    border-right: 7px solid transparent;\n    border-left: 7px solid transparent;\n    border-bottom: 7px solid #ccc; }\n  .daterangepicker:after {\n    top: -6px;\n    border-right: 6px solid transparent;\n    border-bottom: 6px solid #fff;\n    border-left: 6px solid transparent; }\n  .daterangepicker.opensleft:before {\n    right: 9px; }\n  .daterangepicker.opensleft:after {\n    right: 10px; }\n  .daterangepicker.openscenter:before {\n    left: 0;\n    right: 0;\n    width: 0;\n    margin-left: auto;\n    margin-right: auto; }\n  .daterangepicker.openscenter:after {\n    left: 0;\n    right: 0;\n    width: 0;\n    margin-left: auto;\n    margin-right: auto; }\n  .daterangepicker.opensright:before {\n    left: 9px; }\n  .daterangepicker.opensright:after {\n    left: 10px; }\n  .daterangepicker.dropup {\n    margin-top: -5px; }\n    .daterangepicker.dropup:before {\n      top: initial;\n      bottom: -7px;\n      border-bottom: initial;\n      border-top: 7px solid #ccc; }\n    .daterangepicker.dropup:after {\n      top: initial;\n      bottom: -6px;\n      border-bottom: initial;\n      border-top: 6px solid #fff; }\n  .daterangepicker.dropdown-menu {\n    max-width: none;\n    z-index: 3001; }\n  .daterangepicker.single .ranges, .daterangepicker.single .calendar {\n    float: none; }\n  .daterangepicker.show-calendar .calendar {\n    display: block; }\n  .daterangepicker .calendar {\n    display: none;\n    max-width: 270px;\n    margin: 4px; }\n    .daterangepicker .calendar.single .calendar-table {\n      border: none; }\n    .daterangepicker .calendar th, .daterangepicker .calendar td {\n      white-space: nowrap;\n      text-align: center;\n      min-width: 32px; }\n  .daterangepicker .calendar-table {\n    border: 1px solid #fff;\n    padding: 4px;\n    border-radius: 4px;\n    background-color: #fff; }\n  .daterangepicker table {\n    width: 100%;\n    margin: 0; }\n  .daterangepicker td, .daterangepicker th {\n    text-align: center;\n    width: 20px;\n    height: 20px;\n    border-radius: 4px;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    cursor: pointer; }\n    .daterangepicker td.available:hover, .daterangepicker th.available:hover {\n      background-color: #eee;\n      border-color: transparent;\n      color: inherit; }\n    .daterangepicker td.week, .daterangepicker th.week {\n      font-size: 80%;\n      color: #ccc; }\n  .daterangepicker td.off, .daterangepicker td.off.in-range, .daterangepicker td.off.start-date, .daterangepicker td.off.end-date {\n    background-color: #fff;\n    border-color: transparent;\n    color: #999; }\n  .daterangepicker td.in-range {\n    background-color: #ebf4f8;\n    border-color: transparent;\n    color: #000;\n    border-radius: 0; }\n  .daterangepicker td.start-date {\n    border-radius: 4px 0 0 4px; }\n  .daterangepicker td.end-date {\n    border-radius: 0 4px 4px 0; }\n  .daterangepicker td.start-date.end-date {\n    border-radius: 4px; }\n  .daterangepicker td.active, .daterangepicker td.active:hover {\n    background-color: #357ebd;\n    border-color: transparent;\n    color: #fff; }\n  .daterangepicker th.month {\n    width: auto; }\n  .daterangepicker td.disabled, .daterangepicker option.disabled {\n    color: #999;\n    cursor: not-allowed;\n    text-decoration: line-through; }\n  .daterangepicker select.monthselect, .daterangepicker select.yearselect {\n    font-size: 12px;\n    padding: 1px;\n    height: auto;\n    margin: 0;\n    cursor: default; }\n  .daterangepicker select.monthselect {\n    margin-right: 2%;\n    width: 56%; }\n  .daterangepicker select.yearselect {\n    width: 40%; }\n  .daterangepicker select.hourselect, .daterangepicker select.minuteselect, .daterangepicker select.secondselect, .daterangepicker select.ampmselect {\n    width: 50px;\n    margin-bottom: 0; }\n  .daterangepicker .input-mini {\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    color: #555;\n    height: 30px;\n    line-height: 30px;\n    display: block;\n    vertical-align: middle;\n    margin: 0 0 5px 0;\n    padding: 0 6px 0 28px;\n    width: 100%; }\n    .daterangepicker .input-mini.active {\n      border: 1px solid #08c;\n      border-radius: 4px; }\n  .daterangepicker .daterangepicker_input {\n    position: relative; }\n    .daterangepicker .daterangepicker_input i {\n      position: absolute;\n      left: 8px;\n      top: 8px; }\n  .daterangepicker.rtl .input-mini {\n    padding-right: 28px;\n    padding-left: 6px; }\n  .daterangepicker.rtl .daterangepicker_input i {\n    left: auto;\n    right: 8px; }\n  .daterangepicker .calendar-time {\n    text-align: center;\n    margin: 5px auto;\n    line-height: 30px;\n    position: relative;\n    padding-left: 28px; }\n    .daterangepicker .calendar-time select.disabled {\n      color: #ccc;\n      cursor: not-allowed; }\n\n.ranges {\n  font-size: 11px;\n  float: none;\n  margin: 4px;\n  text-align: left; }\n  .ranges ul {\n    list-style: none;\n    margin: 0 auto;\n    padding: 0;\n    width: 100%; }\n  .ranges li {\n    font-size: 13px;\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    border-radius: 4px;\n    color: #08c;\n    padding: 3px 12px;\n    margin-bottom: 8px;\n    cursor: pointer; }\n    .ranges li:hover {\n      background-color: #08c;\n      border: 1px solid #08c;\n      color: #fff; }\n    .ranges li.active {\n      background-color: #08c;\n      border: 1px solid #08c;\n      color: #fff; }\n\n/*  Larger Screen Styling */\n@media (min-width: 564px) {\n  .daterangepicker {\n    width: auto; }\n    .daterangepicker .ranges ul {\n      width: 160px; }\n    .daterangepicker.single .ranges ul {\n      width: 100%; }\n    .daterangepicker.single .calendar.left {\n      clear: none; }\n    .daterangepicker.single.ltr .ranges, .daterangepicker.single.ltr .calendar {\n      float: left; }\n    .daterangepicker.single.rtl .ranges, .daterangepicker.single.rtl .calendar {\n      float: right; }\n    .daterangepicker.ltr {\n      direction: ltr;\n      text-align: left; }\n      .daterangepicker.ltr .calendar.left {\n        clear: left;\n        margin-right: 0; }\n        .daterangepicker.ltr .calendar.left .calendar-table {\n          border-right: none;\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n      .daterangepicker.ltr .calendar.right {\n        margin-left: 0; }\n        .daterangepicker.ltr .calendar.right .calendar-table {\n          border-left: none;\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0; }\n      .daterangepicker.ltr .left .daterangepicker_input {\n        padding-right: 12px; }\n      .daterangepicker.ltr .calendar.left .calendar-table {\n        padding-right: 12px; }\n      .daterangepicker.ltr .ranges, .daterangepicker.ltr .calendar {\n        float: left; }\n    .daterangepicker.rtl {\n      direction: rtl;\n      text-align: right; }\n      .daterangepicker.rtl .calendar.left {\n        clear: right;\n        margin-left: 0; }\n        .daterangepicker.rtl .calendar.left .calendar-table {\n          border-left: none;\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0; }\n      .daterangepicker.rtl .calendar.right {\n        margin-right: 0; }\n        .daterangepicker.rtl .calendar.right .calendar-table {\n          border-right: none;\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n      .daterangepicker.rtl .left .daterangepicker_input {\n        padding-left: 12px; }\n      .daterangepicker.rtl .calendar.left .calendar-table {\n        padding-left: 12px; }\n      .daterangepicker.rtl .ranges, .daterangepicker.rtl .calendar {\n        text-align: right;\n        float: right; } }\n@media (min-width: 730px) {\n  .daterangepicker .ranges {\n    width: auto; }\n  .daterangepicker.ltr .ranges {\n    float: left; }\n  .daterangepicker.rtl .ranges {\n    float: right; }\n  .daterangepicker .calendar.left {\n    clear: none !important; } }\n'];
