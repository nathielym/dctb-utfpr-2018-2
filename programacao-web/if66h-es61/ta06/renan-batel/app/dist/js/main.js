"use strict";var hours=document.getElementById("hours"),minutes=document.getElementById("minutes"),seconds=document.getElementById("seconds"),day=document.getElementById("day"),month=document.getElementById("month"),year=document.getElementById("year"),months=["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"];function format(e){return 1<(e=e.toString()).length?e:"0"+e}function updateClock(){var e=new Date(Date.now());hours.innerHTML=format(e.getHours()),minutes.innerHTML=format(e.getMinutes()),seconds.innerHTML=format(e.getSeconds()),day.innerHTML=format(e.getDay()),month.innerHTML=months[e.getMonth()],year.innerHTML=e.getFullYear()}function init(){updateClock(),setInterval(updateClock,1e3)}window.addEventListener("DOMContentLoaded",init);
//# sourceMappingURL=main.js.map