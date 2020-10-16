
var calculadora ={
  display = document.getElementById("display");
  on = document.getElementById("on");
  signo = document.getElementById("sign");
  raiz = document.getElementById("raiz");
  division = document.getElementById("dividido");
  siete = document.getElementById("7");
  ocho = document.getElementById("8");
  nueve = document.getElementById("9");
  multiplicar = document.getElementById("por");
  cuatro = document.getElementById("4");
  cinco = document.getElementById("5");
  seis = document.getElementById("6");
  resta = document.getElementById("menos");
  uno = document.getElementById("1");
  dos = document.getElementById("2");
  tres = document.getElementById("3");
  cero = document.getElementById("0");
  punto = document.getElementById("punto");
  igual = document.getElementById("igual");
  suma = document.getElementById("mas");

  init: function(){
    this.uno.addEventListener("click", function(){
      calculadora.display.innerHTML += 1;
    })
    this.dos.addEventListener("click", function(){
      calculadora.display.innerHTML += 2;
    })
    this.tres.addEventListener("click", function(){
      calculadora.display.innerHTML += 3;
    })
    this.cuatro.addEventListener("click", function(){
      calculadora.display.innerHTML += 4;
    })
    this.cinco.addEventListener("click", function(){
      calculadora.display.innerHTML += 5;
    })
    this.seis.addEventListener("click", function(){
      calculadora.display.innerHTML += 6;
    })
    this.siete.addEventListener("click", function(){
      calculadora.display.innerHTML += 7;
    })
    this.ocho.addEventListener("click", function(){
      calculadora.display.innerHTML += 8;
    })
    this.nueve.addEventListener("click", function(){
      calculadora.display.innerHTML += 9;
    })
    this.cero.addEventListener("click", function(){
      calculadora.display.innerHTML += 0;
    })
    this.on.addEventListener("click", function(){
      calculadora.display.innerHTML += on;
    })
    this.signo.addEventListener("click", function(){
      calculadora.display.innerHTML += sign;
    })
    this.raiz.addEventListener("click", function(){
      calculadora.display.innerHTML += raiz;
    })
    this.division.addEventListener("click", function(){
      calculadora.display.innerHTML += /;
    })
    this.multiplicar.addEventListener("click", function(){
      calculadora.display.innerHTML += *;
    })
    this.resta.addEventListener("click", function(){
      calculadora.display.innerHTML += -;
    })
    this.suma.addEventListener("click", function(){
      calculadora.display.innerHTML += +;
    })
    this.punto.addEventListener("click", function(){
      calculadora.display.innerHTML += .;
    })
    this.igual.addEventListener("click", function(){
      calculadora.display.innerHTML += =;
    })
  }

  operacion: function(){
    sumar: function sumarNumero(n1, n2){
      return(parseInt(n1) + parseInt(n2));
    }
    restar: function restarNumero(n1, n2){
      return(parseInt(n1) - parseInt(n2));
    }
    multiplicar: function multiplicarNumero(n1, n2){
      return(parseInt(n1) * parseInt(n2));
    }
    dividir: function dividirNumero(n1, n2){
      return(parseInt(n1) / parseInt(n2));
    }
  };

  resolver: function()
    var igual = 0;
    switch(operacion){
      case "sumar":
      igual = parseFloat(n1) + parseFloat(n2);
      break;
      case "restar":
      igual = parseFloat(n1) - parseFloat(n2);
      break;
      case "multiplicar":
      igual = parseFloat(n1) * parseFloat(n2);
      break;
      case "dividir":
      igual = parseFloat(n1) / parseFloat(n2);
      break;
    }
  resetear();
  display.textContext = igual;
  }
  }
}
calculadora.init();
