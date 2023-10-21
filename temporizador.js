/*
 node-schedule é um pacote que permite agendar tarefas para serem disparadas de forma recorrente
 de tempos em tempos.

 O node-schedule oferece um forma muito mais rica para trabalhar com recorrência.
*/

// formato: segundo minuto hora diaDoMês mês diaDaSemana

const schedule = require("node-schedule")

// */5 -> significa que a tarefa será executada de cinco em cinco segundos.
// 5 -> significa que a tarefa será executada no segundo cinco

const tarefa1 = schedule.scheduleJob("*/5 * 19 * * 6", function(){
    console.log("Executando a Tarefa 1! "+ new Date().getSeconds())
})

/*
 setTimeout é um temporizador que recebe uma callback que é executada quando determinado período
 de tempo passa.
 */
setTimeout(() => {
    tarefa1.cancel() // cancelando a o temporizador criado a partir do scheduleJob
    console.log("Cancelando tarefa...")
},1000 * 20)


const regraDeRecorrencia = new schedule.RecurrenceRule()

// Definindo que a tarefa será executada de segunda a sexta
regraDeRecorrencia.dayOfWeek = [new schedule.Range(1, 6)]

// Definindo que a tarefa será executada as 12 horas
regraDeRecorrencia.hour = 19

// Definindo que a tarefa será executada a cada 10 segundos
regraDeRecorrencia.second = 10

const tarefa2 = schedule.scheduleJob(regraDeRecorrencia, function(){
    console.log("Executando a Tarefa 2! "+ new Date().getSeconds())
})