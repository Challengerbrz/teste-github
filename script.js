var cdb = document.querySelector('#cdb')
var lci= document.querySelector('#lci')
var pre = document.querySelector('#pre')
var pos = document.querySelector('#pos')
var capital = document.querySelector('#investimento_inicial')
var aporte = document.querySelector('#investimento_mensal')
var periodo = document.querySelector('#periodo')
var taxa_de_juros = document.querySelector('#taxa_de_juros')
var calcular_btn = document.querySelector('#calcular')
var saida = document.querySelector('#saida')
var selic = document.querySelector('#selic')

var selic_hoje;

fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/1?formato=json')
.then(response => response.json())
.then(json => selic_hoje = json)

calcular_btn.addEventListener('click', ()=>{
    
    valor_bruto = (capital.value * ((1 + (taxa_de_juros.value/100))**periodo.value)) + (aporte.value * 
    (((((1 + (taxa_de_juros.value/100)))**periodo.value) -1)/(taxa_de_juros.value/100)))

    selic_hoje = parseFloat(selic_hoje[0].valor)
    saida.innerText = ("Valor bruto: " + +(valor_bruto.toFixed(2)))
    selic.innerText = (" Valor da selic hoje: " + (selic_hoje * 100) + "%")
})