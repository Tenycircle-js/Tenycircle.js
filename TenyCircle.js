(_=>{
  window.$ = {}
  function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }
  $.id = function (text) {
    return document.getElementById((isArray(text)) ? text[0]: text)
  }
  $.log = function (text) {
    console.log((isArray(text)) ? text[0]: text)
  }
  $.firsttext = function (text) {
    return (((isArray(text)) ? text[0]: text).slice(0, 1))
  }
  $.lasttext = function (text) {
    return (((isArray(text)) ? text[0]: text).slice(0, -1))
  }
  $.html = function (target, changevalue) {
    return new $.html.prototype.init(target,changevalue)
  }
  $.tag = function (name) {
    return document.getElementsByTagName(isArray(name) ? name[0]: name)
  }
  $.name = function (name) {
    function isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    }
    return document.getElementsByName(isArray(name) ? name[0]: name)
  }
  $.text = function (target, changevalue) {
   if (changevalue) {
      (isArray(target) ? target[0]: target).textContent = changevalue
      return
    }
    return (isArray(target) ? target[0]: target).textContent
  }
  $.load = function (func) {
    window.addEventListener('load', func)
  }
  $.DOMload = function(func) {
    window.addEventListener('DOMcontentloaded', func)
  }
  $.max = function (num1) {
    return function (num2) {
      return Math.max((+(isArray(num1) ? num1[0]: num1)), (+(isArray(num2) ? num2[0]: num2)))
    }
  }
  $.min = function (num1) {
    return function (num2) {
      return Math.min((+(isArray(num1) ? num1[0]: num1)), (+(isArray(num2) ? num2[0]: num2)))
    }
  }
  $.factorial = function (num) {
    return (1 >= (+(num))) ? (num == 0) ? 1: +(num): +(num)*$.factorial((+(num)) - 1)
  }
  $.floor = function (num) {
    return ~~(+num)
  }
  $.round = function (num) {
    return (+num) + .5|0
  }
  $.exponentiation = function (num) {
    return function(num2) {
      return (+num) ** (+num2)
    }
  }
  $.cell = function (num) {
    return ((~~(+num))+(((Number.isInteger(+num))?(0): ((+num) >= 0)?(1): (-1))))
  }
  $.ismultiple = function (num1) {
    return function (num2) {
      return !((+num1)%(+num2))
    }
  }
  $.isodd = function (num) {
    return !!((+num)%2)
  }
  $.iseven = function (num) {
    return ismultiple(+num)`2`
  }
  $.isnull = function (target) {
    const test = target ?? true
    return test == target?false: test
  }
  $.divisor = function (num0) {
    const num = (+num0)
    var results = [];
    for (var i = 0; i++ < num;)(num%i) || results.push(i)
    return results
  }
  $.each = function (array, func, final) {
    for (var i = 0; i < array.length; i++) func(i, array[i])
    $.isnull(final) || final(array.length)
  }
  $.isprime = function (num) {
    return $.divisor(num).length == 2
  }
  $.repeat = function (func, num) {
    for (let i = 0; i++ < num;)func(i)
  }
  $.prompt = function (str) {
    return function (defaultstr) {
      prompt(isArray(str)?str[0]:str,isArray(defaultstr)?defaultstr[0]:defaultstr)
    }
  }
  $.alert = function (str) {
    alert(isArray(str)?str[0]:str)
  }
  $.confirm = function (str) {
    confirm(isArray(str)?str[0]:str)
  }
  $.version = 'v1.0.0'
  $.html.prototype = {
    init: function (target, changevalue) {
      this._elmtarget = (isArray(target) ? target[0]: target)
      if (changevalue) {
        (isArray(target) ? target[0]: target).innerHTML = changevalue
        return
      }
    },
    val: function (changevalue) {
      if ($.isnull(changevalue)) {
        return this._elmtarget.getAttribute('value') ?? undefined
      } else {
        this._elmtarget.setAttribute('value', changevalue)
        return this
      }
    },
    id: function (changevalue) {
      if ($.isnull(changevalue)) {
        return this._elmtarget.getAttribute('id') ?? undefined
      } else {
        this._elmtarget.setAttribute('id', changevalue)
        return this
      }
    },
    class: function (changevalue) {
      if ($.isnull(changevalue)) {
        return this._elmtarget.getAttribute('id') ?? undefined
      } else {
        this._elmtarget.setAttribute('id', changevalue)
        return this
      }
    },
    Attr: function (attr, changevalue) {
      if ($.isnull(changevalue)) {
        return this._elmtarget.getAttribute(attr) ?? undefined
      } else {
        this._elmtarget.setAttribute(attr, changevalue)
        return this
      }
    }
  }
  $.html.prototype.init.prototype = $.html.prototype
})``