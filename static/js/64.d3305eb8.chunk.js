(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[64],{50:function(t,e,a){"use strict";a.r(e),a.d(e,"M",(function(){return l})),a.d(e,"T",(function(){return n})),a.d(e,"W",(function(){return u})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return S})),a.d(e,"d",(function(){return c})),a.d(e,"e",(function(){return d})),a.d(e,"f",(function(){return p})),a.d(e,"g",(function(){return y})),a.d(e,"h",(function(){return h})),a.d(e,"i",(function(){return m}));var n=new Date,r=+(new Date).getFullYear(),o=+(new Date).getMonth(),u={Sunday:"Domingo",Monday:"Segunda",Tuesday:"Ter\xe7a",Wednesday:"Quarta",Thursday:"Quinta",Friday:"Sexta",Saturday:"S\xe1bado"},l=[{value:0,label:"Janeiro"},{value:1,label:"Fevereiro"},{value:2,label:"Mar\xe7o"},{value:3,label:"Abril"},{value:4,label:"Maio"},{value:5,label:"Junho"},{value:6,label:"Julho"},{value:7,label:"Agosto"},{value:8,label:"Setembro"},{value:9,label:"Outubro"},{value:10,label:"Novembro"},{value:11,label:"Dezembro"}],c="".concat(n.getDate().toString().padStart(2,"0"),"/").concat((n.getMonth()+1).toString().padStart(2,"0"),"/").concat(n.getFullYear()),i="".concat(n.getDate().toString().padStart(2,"0"),"/").concat((n.getMonth()+1).toString().padStart(2,"0"),"/").concat(n.getFullYear()+100),d=function(t,e,a){for(var n=[],r=e<t-4?t-4:e,o=a>t+6?t+6:a;r<=o;){var u={value:r,label:r.toString()};n.push(u),r++}return n},h=function(t,e,a){return t==e.year&&t==a.year?l.slice(e.month,a.month+1):t==e.year?l.slice(e.month):t==a.year?l.slice(0,a.month+1):l},g=function(t,e){void 0===t&&(t=r),void 0===e&&(e=o);for(var a=new Date(t,e,1),n=[];a.getMonth()===e;){var u=new Date(a),l={date:u.getDate(),month:u.getMonth(),year:u.getFullYear(),day:u.getDay()};n.push(l),a.setDate(a.getDate()+1)}return n},y=function(t,e){void 0===t&&(t=r),void 0===e&&(e=o);var a={year:e-1<0?t-1:t,month:e-1<0?11:e-1},n={year:e+1>11?t+1:t,month:e+1>11?0:e+1},u={year:n.month+1>11?t+1:t,month:n.month+1>11?0:n.month+1},l={year:a.year,month:a.month,days:g(a.year,a.month)},c={year:t,month:e,days:g(t,e)},i={year:n.year,month:n.month,days:g(n.year,n.month)},d={year:u.year,month:u.month,days:g(u.year,u.month)},h=[];return h.push(l),h.push(c),h.push(i),h.push(d),h},p=function(t){return"".concat(t.year).concat(t.month.toString().padStart(2,"0")).concat(t.date.toString().padStart(2,"0"))},m=function(t){return"".concat(t.getFullYear()).concat(t.getMonth().toString().padStart(2,"0")).concat(t.getDate().toString().padStart(2,"0"))},s=function(t){var e=t.split("/"),a=new Date(parseFloat(e[2]),parseFloat(e[1])-1,parseFloat(e[0]));return{date:a.getDate(),month:a.getMonth(),year:a.getFullYear(),day:a.getDay()}},S=function(t){return"".concat(t.getDate().toString().padStart(2,"0"),"/").concat((t.getMonth()+1).toString().padStart(2,"0"),"/").concat(t.getFullYear())}}}]);