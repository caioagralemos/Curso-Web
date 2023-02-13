let jason = {"ticker":{"base":"BTC","target":"USD","price":"21744.25877290","volume":"8070.99990441","change":"19.51760974"},"timestamp":1676321285,"success":true,"error":""}

jason["ticker"]["base"] // "BTC" 
jason["ticker"]["price"] // "21744.25877290"

JSON.stringify(jason) // retorna uma string de JSON

let jasondoge = '{"ticker":{"base":"DOGE","target":"BRL","price":"0.42400000","volume":"3487611.00000000","change":"0.00070000"},"timestamp":1676321944,"success":true,"error":""}'

JSON.parse(jasondoge) // retorna jasondoge como um JSON funcional