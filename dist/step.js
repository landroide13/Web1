"use strict";!function(){function i(){if(n());else{var i=$(o).find(".input:invalid").first().parent();t(i)}}function n(){document.querySelector(o).checkValidity()}function t(i){$(".step.active").removeClass("active"),i.addClass("active"),i.find(".input").focus()}$(".step:nth-child(1)").addClass("active");var o="#contac-form";$(o).find(".input").on("change",function(n){var o=$(n.target),s=o.parent().next();s.length>0?t(s):i()})}();