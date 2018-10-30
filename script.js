const output=document.querySelector(".modal__value"),rangeSLider=document.querySelector(".adjust-bar.adjust-bar_theme_temp");rangeSLider.oninput=function(){output.innerHTML=this.value>0?"+"+this.value:this.value};const arrowLeftDevs=document.querySelector(".devices__paginator .paginator__arrow_left"),arrowRightDevs=document.querySelector(".devices__paginator .paginator__arrow_right"),panelCountDevs=document.querySelectorAll(".devices__panel").length,devices=document.querySelector(".devices"),pagiantorDevs=document.querySelector(".devices__paginator");let curValue,curRotate,currentPageDevs=1;pagiantorDevs.classList.toggle("paginator_hide",panelCountDevs<7),arrowRightDevs.addEventListener("click",function(){currentPageDevs+=1,arrowLeftDevs.classList.toggle("paginator__arrow_disabled",1===currentPageDevs),devices.scroll({top:0,left:1366,behavior:"smooth"})}),arrowLeftDevs.addEventListener("click",function(){currentPageDevs>1&&(currentPageDevs-=1,arrowLeftDevs.classList.toggle("paginator__arrow_disabled",1===currentPageDevs),devices.scroll({top:0,left:-1366,behavior:"smooth"}))});let maxRotate=.42,minRotate=-.42;const MIN_VALUE=26,MAX_VALUE=35,INDICATOR_OFFSET=265,rotateToValue=function(e){return Math.floor(Math.abs(360*e*1.73+INDICATOR_OFFSET)/53+26)};function setRotate(e){e>maxRotate?e=maxRotate:e<minRotate&&(e=minRotate),curRotate=e,curValue=rotateToValue(e),document.querySelector(".modal_knob .modal__value").innerHTML="+"+curValue,document.querySelector(".knob__value").innerHTML="+"+curValue,document.querySelector(".knob__indicator").style.strokeDasharray=360*curRotate*1.73+INDICATOR_OFFSET+" 629",document.querySelector(".knob__arrow").style.transform="rotate("+360*curRotate+"deg)"}function getPosition(e){const t=e.getBoundingClientRect();return[t.left+(t.right-t.left)/2,t.top+(t.bottom-t.top)/2]}function getMouseAngle(e,t){const o=getPosition(t);let r,n=[e.clientX,e.clientY];return e.targetTouches&&e.targetTouches[0]&&(n=[e.targetTouches[0].clientX,e.targetTouches[0].clientY]),r=Math.atan2(n[1]-o[1],n[0]-o[0]),r+=Math.PI/2}let knobDragged,prevAngleRad=null,prevRotate=null;function startDragging(e){e.preventDefault(),e.stopPropagation();const t=getMouseAngle(e,document.querySelector(".knob_center"));knobDragged=!0,prevAngleRad=t,prevRotate=curRotate}function stopDragging(e){knobDragged=!1}function dragRotate(e){if(!knobDragged)return;const t=prevAngleRad;let o=getMouseAngle(e,document.querySelector(".knob_center")),r=o-t;prevAngleRad=o,r<0&&(r+=2*Math.PI),r>Math.PI&&(r-=2*Math.PI);const n=r/Math.PI/2,a=prevRotate+n;prevRotate=a,setRotate(a)}function setEvtListeners(){const e=document.querySelector(".knob-container");e.addEventListener("mousedown",startDragging),document.addEventListener("mouseup",stopDragging),document.addEventListener("mousemove",dragRotate),e.addEventListener("touchstart",startDragging),document.addEventListener("touchend",stopDragging),document.addEventListener("touchmove",dragRotate)}setEvtListeners(),setRotate(0),document.querySelectorAll(".modal_close").forEach(e=>{e.onclick=function(){document.querySelectorAll(".modal").forEach(e=>{e.classList.toggle("modal_open",!1),document.querySelector("body").style.overflow="auto"})}});const TEMPS={manual:-10,cold:0,warm:23,hot:30};document.querySelectorAll(".modal__filter-item_temp").forEach(e=>{e.onclick=function(){document.querySelector(".adjust-bar_theme_temp").value=TEMPS[this.id],document.querySelector(".modal_temp .modal__value").innerHTML=TEMPS[this.id]>0?"+"+TEMPS[this.id]:TEMPS[this.id]}});const showModal=function(e){document.querySelector(e).classList.toggle("modal_open",!0),document.querySelector("body").style.overflow="hidden"};document.querySelectorAll(".panel_temp").forEach(e=>{e.onclick=function(){showModal(".modal_temp")}}),document.querySelectorAll(".panel_lamp").forEach(e=>{e.onclick=function(){showModal(".modal_light")}}),document.querySelectorAll(".panel_floor").forEach(e=>{e.onclick=function(){showModal(".modal_knob")}});const arrowLeftScens=document.querySelector(".scenarios__paginator .paginator__arrow_left"),arrowRightScens=document.querySelector(".scenarios__paginator .paginator__arrow_right"),panelCountScens=document.querySelectorAll(".scenarios__panel").length,pageCountScens=document.querySelectorAll(".scenarios__page").length,scenarios=document.querySelector(".scenarios"),pagiantorScens=document.querySelector(".scenarios__paginator");let currentPage=1;pagiantorScens.classList.toggle("paginator_hide",panelCountScens<=9),arrowRightScens.addEventListener("click",function(){currentPage<pageCountScens&&(currentPage+=1,arrowRightScens.classList.toggle("paginator__arrow_disabled",currentPage===pageCountScens),arrowLeftScens.classList.toggle("paginator__arrow_disabled",1===currentPage),scenarios.scroll({top:0,left:645,behavior:"smooth"}))}),arrowLeftScens.addEventListener("click",function(){currentPage>1&&(currentPage-=1,arrowRightScens.classList.toggle("paginator__arrow_disabled",currentPage===pageCountScens),arrowLeftScens.classList.toggle("paginator__arrow_disabled",1===currentPage),scenarios.scroll({top:0,left:-645,behavior:"smooth"}))});const selectButton=document.querySelector(".filter__select-button"),selectButtonText=document.querySelector(".filter__select-button .button__text"),selectOptions=document.querySelectorAll(".filter__select-item"),popup=document.querySelector(".filter__select-popup");selectButton.addEventListener("click",function(){popup.classList.toggle("filter__select-popup_open")});let widths="";window.addEventListener("scroll",function(){widths+=document.querySelectorAll("body")[0].offsetWidth,document.querySelector(".stats").innerHTML=widths}),selectOptions.forEach(e=>{e.addEventListener("click",function(e){document.querySelector("#"+e.target.dataset.group).checked=!0,selectOptions.forEach(e=>e.classList.toggle("filter__select-item_checked",!1)),e.target.classList.toggle("filter__select-item_checked",!0),popup.classList.toggle("filter__select-popup_open",!1),selectButtonText.innerText=e.target.innerText})}),document.querySelector(".menu__icon").addEventListener("click",function(){document.querySelector(".menu").classList.toggle("menu_open")}),window.onload=function(){document.querySelector(".panel_banner").innerHTML='<a target="_blank" href="http://ya.ru"><img src="assets/banner.jpg" border="0"></a>'};