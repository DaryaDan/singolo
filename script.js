function func(){ //рандомное перемещение картинок
var k, j, n, d, m, a;
a=document.getElementById("pictures").getElementsByTagName("img");
j=k=a.length;
m=[];
  while(k--){m.push(a[k].src);}
k=j;
while(k--){
n=Math.floor(Math.random()*(k+1));
d=m[n];
m[n]=m[k];
m[k]=d;}
k=j;
while(k--){a[k].src=m[k];}
}



const PICT = document.getElementById('pictures'); //рамка вокруг иконок портфолио
PICT.addEventListener('click', (event) => {
PICT.querySelectorAll('img').forEach(el => el.classList.remove('img_pic_active'));
event.target.classList.add('img_pic_active');
});

// const MENU = document.getElementById('menu'); //активные пункты главная
// MENU.addEventListener('click', (event) => {
// MENU.querySelectorAll('li').forEach(el => el.classList.remove('nav_active'));
// event.target.classList.add('nav_active');
// });

const anchors = document.querySelectorAll('a[href*="#"]'); //якорь по странице
for (let anchor of anchors) {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const blockID = anchor.getAttribute('href').substr(1);
document.getElementById(blockID).scrollIntoView({
behavior: 'smooth',
block: 'start'
})})}


(function() {  //Переключение якоря
  'use strict';

  var section = document.querySelectorAll(".scrol");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.nav_active').setAttribute('class', 'nav__item');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'nav__item nav_active');
      }
    }
  };
})();

const TAGS = document.getElementById('tags'); //активные пункты портфолио
TAGS.addEventListener('click', (event) => {
TAGS.querySelectorAll('button').forEach(el => el.classList.remove('tags_active'));
event.target.classList.add('tags_active');
});

function validate_form(){ //валидация формы
  //Считаем значения из полей name и email в переменные x и y
  var x=document.forms["form"]["name"].value;
  var y=document.forms["form"]["email"].value;
  // var q=document.forms["form"]["subject"].value;
  // var w=document.forms["form"]["describe"].value;
  //Если поле name пустое выведем сообщение и предотвратим отправку формы
  if (x.length==0){
  return false;
  }
  //Если поле email пустое выведем сообщение и предотвратим отправку формы
  if (y.length==0){
  return false;
  }
  // if (q.length==0){
  // return false;
  // }
  // if (w.length==0){
  // return false;
  // }
  //Проверим содержит ли значение введенное в поле email символы @ и .
  at=y.indexOf("@");
  dot=y.indexOf(".");
  //Если поле не содержит эти символы знач email введен не верно
  if (at<1 || dot <1){
  return false;
  }
   else {
  const SUBMIT = document.getElementById('submit'); // отправка формы subject и describe
  SUBMIT.addEventListener('click', () => {
  const subject = document.getElementById('subject').value.toString();
  if (document.getElementById("subject").value == ''){
  document.getElementById('result').innerText="Без темы";}
  else {
  document.getElementById('result').innerText=subject;}

  const describe = document.getElementById('describe').value.toString();
  if (document.getElementById("describe").value == ''){
    document.getElementById('result_desc').innerText="Без описания";}
    else {
  document.getElementById('result_desc').innerText=describe;}
  document.getElementById('message_block').classList.remove('hidden');
    });}
  }

const CLOSE = document.getElementById('close_button'); //закрыть окошко
CLOSE.addEventListener('click', () => {
  document.getElementById('result').innerText="";
  document.getElementById('result_desc').innerText="";
  document.getElementById('message_block').classList.add('hidden');
});

// /* Индекс слайда по умолчанию */  //слайдер
// var slideIndex = 1;
// showSlides(slideIndex);
//
// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
//     showSlides(slideIndex += 1);
// }
//
// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//     showSlides(slideIndex -= 1);
// }
//
// /* Устанавливает текущий слайд */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
//
// /* Основная функция слайдера */
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("item");
//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }
//
var pressed=0;  //фон
function fon()
{
document.getElementById('but').value = ++pressed;
if (pressed%2!=0)  {
document.getElementById('slider').style.backgroundColor='#648bf0';}
if (pressed%2==0)  {
document.getElementById('slider').style.backgroundColor='#f06c64';}
}

var vert=0;
const PHOTO = document.getElementsByClassName("active1"); // накладывание черного экрана
for (var i = 0; i < PHOTO.length; i++) {
PHOTO[i].addEventListener('click', () => {
document.getElementsByClassName('tel1').value = ++vert;
if (vert%2!=0) {
document.getElementById('photo1').classList.remove('hidden');}
if (vert%2==0) {
document.getElementById('photo1').classList.add('hidden');}
})}

var horiz=0;
const PHOTOO = document.getElementsByClassName("active2"); // накладывание черного экрана
for (var i = 0; i < PHOTOO.length; i++) {
PHOTOO[i].addEventListener('click', () => {
document.getElementsByClassName('tel2').value = ++horiz;
if (horiz%2!=0) {
document.getElementById('photo1_').classList.remove('hidden');}
if (horiz%2==0) {
document.getElementById('photo1_').classList.add('hidden');}
})}

'use strict';
    var multiItemSlider = (function () {

      function _isElementVisible(element) {
        var rect = element.getBoundingClientRect(),
          vWidth = window.innerWidth || doc.documentElement.clientWidth,
          vHeight = window.innerHeight || doc.documentElement.clientHeight,
          elemFromPoint = function (x, y) { return document.elementFromPoint(x, y) };
        if (rect.right < 0 || rect.bottom < 0
          || rect.left > vWidth || rect.top > vHeight)
          return false;
        return (
          element.contains(elemFromPoint(rect.left, rect.top))
          || element.contains(elemFromPoint(rect.right, rect.top))
          || element.contains(elemFromPoint(rect.right, rect.bottom))
          || element.contains(elemFromPoint(rect.left, rect.bottom))
        );
      }

      return function (selector, config) {
        var
          _mainElement = document.querySelector(selector), // основный элемент блока
          _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
          _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
          _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
          _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
          _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
          _positionLeftItem = 0, // позиция левого активного элемента
          _transform = 0, // значение транфсофрмации .slider_wrapper
          _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
          _items = [], // массив элементов
          _interval = 0,
          _html = _mainElement.innerHTML,
          _states = [
            { active: false, minWidth: 0, count: 1 },
            { active: false, minWidth: 980, count: 2 }
          ],
          _config = {
            // isCycling: false, // автоматическая смена слайдов
            direction: 'right', // направление смены слайдов
            interval: 5000, // интервал между автоматической сменой слайдов
            pause: true // устанавливать ли паузу при поднесении курсора к слайдеру
          };

        for (var key in config) {
          if (key in _config) {
            _config[key] = config[key];
          }
        }

        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
          _items.push({ item: item, position: index, transform: 0 });
        });

        var _setActive = function () {
          var _index = 0;
          var width = parseFloat(document.body.clientWidth);
          _states.forEach(function (item, index, arr) {
            _states[index].active = false;
            if (width >= _states[index].minWidth)
              _index = index;
          });
          _states[_index].active = true;
        }

        var _getActive = function () {
          var _index;
          _states.forEach(function (item, index, arr) {
            if (_states[index].active) {
              _index = index;
            }
          });
          return _index;
        }

        var position = {
          getItemMin: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
              if (item.position < _items[indexItem].position) {
                indexItem = index;
              }
            });
            return indexItem;
          },
          getItemMax: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
              if (item.position > _items[indexItem].position) {
                indexItem = index;
              }
            });
            return indexItem;
          },
          getMin: function () {
            return _items[position.getItemMin()].position;
          },
          getMax: function () {
            return _items[position.getItemMax()].position;
          }
        }

        var _transformItem = function (direction) {
          var nextItem;
          if (!_isElementVisible(_mainElement)) {
            return;
          }
          if (direction === 'right') {
            _positionLeftItem++;
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
              nextItem = position.getItemMin();
              _items[nextItem].position = position.getMax() + 1;
              _items[nextItem].transform += _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform -= _step;
          }
          if (direction === 'left') {
            _positionLeftItem--;
            if (_positionLeftItem < position.getMin()) {
              nextItem = position.getItemMax();
              _items[nextItem].position = position.getMin() - 1;
              _items[nextItem].transform -= _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform += _step;
          }
          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        var _cycle = function (direction) {
          if (!_config.isCycling) {
            return;
          }
          _interval = setInterval(function () {
            _transformItem(direction);
          }, _config.interval);
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
          if (e.target.classList.contains('slider__control')) {
            e.preventDefault();
            // var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
            var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
            _transformItem(direction);
            clearInterval(_interval);
            _cycle(_config.direction);
          }
        };

        // обработка события изменения видимости страницы
        var _handleVisibilityChange = function () {
          if (document.visibilityState === "hidden") {
            clearInterval(_interval);
          } else {
            clearInterval(_interval);
            _cycle(_config.direction);
          }
        }

        var _refresh = function () {
          clearInterval(_interval);
          _mainElement.innerHTML = _html;
          _sliderWrapper = _mainElement.querySelector('.slider__wrapper');
          _sliderItems = _mainElement.querySelectorAll('.slider__item');
          _sliderControls = _mainElement.querySelectorAll('.slider__control');
          _sliderControlLeft = _mainElement.querySelector('.slider__control_left');
          _sliderControlRight = _mainElement.querySelector('.slider__control_right');
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);
          _positionLeftItem = 0;
          _transform = 0;
          _step = _itemWidth / _wrapperWidth * 100;
          _items = [];
          _sliderItems.forEach(function (item, index) {
            _items.push({ item: item, position: index, transform: 0 });
          });
        }

        var _setUpListeners = function () {
          _mainElement.addEventListener('click', _controlClick);
          if (_config.pause && _config.isCycling) {
            _mainElement.addEventListener('mouseenter', function () {
              clearInterval(_interval);
            });
            _mainElement.addEventListener('mouseleave', function () {
              clearInterval(_interval);
              _cycle(_config.direction);
            });
          }
          document.addEventListener('visibilitychange', _handleVisibilityChange, false);
          window.addEventListener('resize', function () {
            var
              _index = 0,
              width = parseFloat(document.body.clientWidth);
            _states.forEach(function (item, index, arr) {
              if (width >= _states[index].minWidth)
                _index = index;
            });
            if (_index !== _getActive()) {
              _setActive();
              _refresh();
            }
          });
        }

        // инициализация
        _setUpListeners();
        if (document.visibilityState === "visible") {
          _cycle(_config.direction);
        }
        _setActive();

        return {
          right: function () { // метод right
            _transformItem('right');
          },
          left: function () { // метод left
            _transformItem('left');
          },
          stop: function () { // метод stop
            _config.isCycling = false;
            clearInterval(_interval);
          },
          cycle: function () { // метод cycle
            _config.isCycling = true;
            clearInterval(_interval);
            _cycle();
          }
        }
      }
    }());

    var slider = multiItemSlider('.slider', {
      isCycling: true
    })
