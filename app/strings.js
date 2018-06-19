export function getStrings(lang, type){
  switch (lang){
    case "es":
      switch (type){
        case "clockData":
          return {
            "bpm"       : "bpm",
            "steps"     : "pasos", 
            "kcal"      : "kcal",
            
            "NO SENSOR"     : "NO SENSOR",
            "NO HEART RATE" : "NO HEART RATE",
            "Fetching at "   : "Fetching at ",
          }
        case "stats":
          return {
            "Steps"     : "Pasos",
            "Distance"  : "Distancia",
            "Floors"    : "Pisos",
            "Active"    : "Activo",
            "Calories"  : "Calorías",
          }
        case "date":
          return {
            
            "Sun"       : "Dom",
            "Mon"       : "Lu",
            "Tues"      : "Ma",
            "Wed"       : "Mx",
            "Thurs"     : "Ju",
            "Fri"       : "Vi",
            "Sat"       : "Sab",
   
            "Jan."      : "Enero",
            "Feb."      : "Feb.",
            "Mar."      : "Marzo.",
            "Apr."      : "Abr.",
            "May."      : "Mayo",
            "Jun."      : "Jun.",
            "Jul."      : "Jul.",
            "Aug."      : "Agosto",
            "Sept."     : "Set.",
            "Oct."      : "Oct.",
            "Nov."      : "Nov.",
            "Dec."      : "Dic.",
            
            "January"   : "Enero",
            "February"  : "Febrero",
            "March"     : "Marzo",
            "April"     : "Abril",
            "May"       : "Mayo",
            "June"      : "Junio",
            "July"      : "Julio",
            "August"    : "Agosto",
            "September" : "Septiembre",
            "October"   : "Octubre",
            "November"  : "Noviembre",
            "December"  : "Diciembre",
          }
        case "weather":
          return {
            "Today"     : "Hoy", 
            "Sunday"    : "Domingo",
            "Monday"    : "Lunes",
            "Tuesday"   : "Martes",
            "Wednesday" : "Miércoles",
            "Thursday"  : "Jueves",
            "Friday"    : "Viernes",
            "Saturday"  : "Sábado",
            
            "High"      : "Alta",
            "Low"       : "Baja",
            
            "Updating..."   : "Updating...",
            
            "Tornado"                 : "Tornado",
            "Tropical Storm"          : "Tempestad Tropical",
            "Hurricane"               : "Huracán",
            "Severe Thunderstorms"    : "Truena Severas",
            "Thunderstorms"           : "Truena",
            "Mixed Rain And Snow"     : "Lluvia y Nieve",
            "Mixed Rain And Sleet"    : "Lluvia y Aguanieve",
            "Mixed Snow And Sleet"    : "Nieve y Aguanieve",
            "Freezing Drizzle"        : "Llovizna Helada",
            "Drizzle"                 : "Llovizna",
            "Freezing Rain"           : "Lluvia Helada",
            "Showers"                 : "Chubascos",
            "Snow Flurries"           : "Ráfagas de Nieve",
            "Light Snow Showers"      : "Ráfagas de Nieve",
            "Blowing Snow"            : "Ventisca",
            "Snow"                    : "Nieve",
            "Hail"                    : "Granizo",
            "Sleet"                   : "Granizo",
            "Dust"                    : "Polvo",
            "Foggy"                   : "Niebla",
            "Haze"                    : "Neblina",
            "Smoky"                   : "Humo",     
            "Blustery"                : "Borrascoso",
            "Windy"                   : "Ventoso",
            "Cold"                    : "Frío",
            "Cloudy"                  : "Nublado",
            "Mostly Cloudy"           : "Nublado",  
            "Partly Cloudy"           : "Nublado",
            "Clear"                   : "Despejado",
            "Sunny"                   : "Soleado",
            "Fair"                    : "Claro",
            "Mixed Rain And Hail"     : "Lluvia y Granizo",
            "Hot"                     : "Caluroso",
            "Isolated Thunderstorms"  : "Tormentas",
            "Scattered Thunderstorms" : "Tormentas",
            "Scattered Showers"       : "Chubascos",
            "Heavy Snow"              : "Nevadas Abundantes",
            "Scattered Snow Showers"  : "Nieves Dispersas",
            "Thundershowers"          : "Tormentas Temporales",
            "Snow Showers"            : "Nevadas Temporales",
            "Isolated Thundershowers" : "Tormentas Aisladas",
            "Rain"                    : "Lluvia",
            "Mostly Sunny"            : "Mayormente Soleado"
          }
        case "directions":
          return {
            "North"           : "North",
            "N."              : "N.",
            "East"            : "East",
            "E."              : "E.",
            "South"           : "South",
            "S."              : "S.",
            "West"            : "West",
            "W."              : "W.",
          }
      }
    case "zh":
      switch (type){
        case "clockData":
          return {
            "bpm"       : "bpm",
            "steps"     : "步數", 
            "kcal"      : "大卡",
            
            "NO SENSOR"     : "無感應",
            "NO HEART RATE" : "無心率",
            "Fetching at "  : "取得在 ",
          }
        case "stats":
          return {
            "Steps"     : "步數",
            "Distance"  : "距離",
            "Floors"    : "樓層數",
            "Active"    : "活動量",
            "Calories"  : "卡路里",
          }
        case "date":
          return {
            
            "Sun"       : "週日",
            "Mon"       : "週一",
            "Tues"      : "週二",
            "Wed"       : "週三",
            "Thurs"     : "週四",
            "Fri"       : "週五",
            "Sat"       : "週六",
   
            "Jan."      : "1月",
            "Feb."      : "2月",
            "Mar."      : "3月",
            "Apr."      : "4月",
            "May."      : "5月",
            "Jun."      : "6月",
            "Jul."      : "7月",
            "Aug."      : "8月",
            "Sept."     : "9月",
            "Oct."      : "10月",
            "Nov."      : "11月",
            "Dec."      : "12月",
            
            "January"   : "一月",
            "February"  : "二月",
            "March"     : "三月",
            "April"     : "四月",
            "May"       : "五月",
            "June"      : "六月",
            "July"      : "七月",
            "August"    : "八月",
            "September" : "九月",
            "October"   : "十月",
            "November"  : "十一月",
            "December"  : "十二月",
          }
        case "weather":
          return {
            "Today"     : "今天", 
            "Sunday"    : "週日",
            "Monday"    : "週一",
            "Tuesday"   : "週二",
            "Wednesday" : "週三",
            "Thursday"  : "週四",
            "Friday"    : "週五",
            "Saturday"  : "週六",
            
            "High"      : "最高",
            "Low"       : "最低",
            
            "Updating..."   : "更新中",
            
            "Tornado"                 : "龍捲風",
            "Tropical Storm"          : "熱帶暴風雨",
            "Hurricane"               : "颶風",
            "Severe Thunderstorms"    : "劇烈雷雨",
            "Thunderstorms"           : "雷雨",
            "Mixed Rain And Snow"     : "雨夾雪",
            "Mixed Rain And Sleet"    : "雨夾冰粒",
            "Mixed Snow And Sleet"    : "雪夾冰粒",
            "Freezing Drizzle"        : "凍細雨",
            "Drizzle"                 : "細雨",
            "Freezing Rain"           : "凍雨",
            "Showers"                 : "陣雨",
            "Snow Flurries"           : "雪花",
            "Light Snow Showers"      : "小陣雪",
            "Blowing Snow"            : "高吹雪",
            "Snow"                    : "下雪",
            "Hail"                    : "冰雹",
            "Sleet"                   : "冰粒",
            "Dust"                    : "灰塵",
            "Foggy"                   : "霧氣",
            "Haze"                    : "陰霾",
            "Smoky"                   : "多煙",     
            "Blustery"                : "大風",
            "Windy"                   : "刮風",
            "Cold"                    : "冷",
            "Cloudy"                  : "多雲",
            "Mostly Cloudy"           : "多雲時陰",  
            "Partly Cloudy"           : "局部多雲",
            "Clear"                   : "晴朗",
            "Sunny"                   : "晴天",
            "Fair"                    : "好天氣",
            "Mixed Rain And Hail"     : "雨夾冰雹",
            "Hot"                     : "炎熱",
            "Isolated Thunderstorms"  : "局部雷雨",
            "Scattered Thunderstorms" : "零星雷雨",
            "Scattered Showers"       : "零星陣雨",
            "Heavy Snow"              : "暴雪",
            "Scattered Snow Showers"  : "零星陣雪",
            "Thundershowers"          : "雷陣雨",
            "Snow Showers"            : "陣雪",
            "Isolated Thundershowers" : "局部雷陣雨",
            "Rain"                    : "下雨",  
            "Mostly Sunny"            : "晴時多雲", //fix me
            
            "Taichung City"           : "台中市",
            "Taipei City"             : "台北市",
            "Kaohsiung City"          : "高雄市",
            "Tainan City"             : "台南市",
            "Hsinchu City"            : "新竹市",
            "Keelung City"            : "基隆市",
            "Hsinchu County"          : "新竹縣",
            "Miaoli County"           : "苗栗縣",
            "Changhua County"         : "彰化縣",
            "Nantou County"           : "南投縣",
            "Yunlin County"           : "雲林縣",
            "Chiayi County"           : "嘉義縣",
            "Chiayi City"             : "嘉義市",
            "Pingtung County"         : "屏東縣",
            "Taitung County"          : "台東縣",
            "Hualien County"          : "花蓮縣",
            "Yilan County"            : "宜蘭縣",
            "Penghu County"           : "澎湖縣",
            "Kinmen County"           : "金門縣",
            "Lienchiang County"       : "連江縣",
            "New Taipei City"         : "新北市",
            
          }
        case "directions":
          return {
            "North"           : "北方",
            "N."              : "北",
            "East"            : "東方",
            "E."              : "東",
            "South"           : "南方",
            "S."              : "南",
            "West"            : "西方",
            "W."              : "西",
          }
      }
    default:
      switch (type){
        case "clockData":
          return {
            "bpm"       : "bpm",
            "steps"     : "steps", 
            "kcal"      : "kcal",
            
            "NO SENSOR"     : "NO SENSOR",
            "NO HEART RATE" : "NO HEART RATE",
            "Fetching at "   : "Fetching at ",
          }
        case "stats":
          return {
            "Steps"     : "Steps",
            "Distance"  : "Distance",
            "Floors"    : "Floors",
            "Active"    : "Active",
            "Calories"  : "Calories",
          }
        case "date":
          return {
            
            "Sun"       : "Sun",
            "Mon"       : "Mon",
            "Tues"      : "Tues",
            "Wed"       : "Wed",
            "Thurs"     : "Thurs",
            "Fri"       : "Fri",
            "Sat"       : "Sat",
   
            "Jan."      : "Jan.",
            "Feb."      : "Feb.",
            "Mar."      : "Mar.",
            "Apr."      : "Apr.",
            "May."      : "May",
            "Jun."      : "June",
            "Jul."      : "July",
            "Aug."      : "Aug.",
            "Sept."     : "Sept.",
            "Oct."      : "Oct.",
            "Nov."      : "Nov.",
            "Dec."      : "Dec.",
            
            "January"   : "January",
            "February"  : "February",
            "March"     : "March",
            "April"     : "April",
            "May"      : "May",
            "June"      : "June",
            "July"      : "July",
            "August"    : "August",
            "September" : "September",
            "October"   : "October",
            "November"  : "November",
            "December"  : "December",
          }
        case "weather":
          return {
            "Today"     : "Today", 
            "Sunday"    : "Sunday",
            "Monday"    : "Monday",
            "Tuesday"   : "Tuesday",
            "Wednesday" : "Wednesday",
            "Thursday"  : "Thursday",
            "Friday"    : "Friday",
            "Saturday"  : "Saturday",
            
            "High"      : "High",
            "Low"       : "Low",
            
            "Updating..."   : "Updating...",
            
            "Tornado"                 : "Tornado",
            "Tropical Storm"          : "Tropical Storm",
            "Hurricane"               : "Hurricane",
            "Severe Thunderstorms"    : "Bad T-Storms",
            "Thunderstorms"           : "Thunderstorms",
            "Mixed Rain And Snow"     : "Rain & Snow",
            "Mixed Rain And Sleet"    : "Rain & Sleet",
            "Mixed Snow And Sleet"    : "Snow & Sleet",
            "Freezing Drizzle"        : "Freezing Rain",
            "Drizzle"                 : "Drizzle",
            "Freezing Rain"           : "Freezing Rain",
            "Showers"                 : "Showers",
            "Snow Flurries"           : "Flurries",
            "Light Snow Showers"      : "Light Snow",
            "Blowing Snow"            : "Blowing Snow",
            "Snow"                    : "Snow",
            "Hail"                    : "Hail",
            "Sleet"                   : "Sleet",
            "Dust"                    : "Dust",
            "Foggy"                   : "Foggy",
            "Haze"                    : "Haze",
            "Smoky"                   : "Smoky",     
            "Blustery"                : "Blustery",
            "Windy"                   : "Windy",
            "Cold"                    : "Cold",
            "Cloudy"                  : "Cloudy",
            "Mostly Cloudy"           : "Mostly Cloudy",  
            "Partly Cloudy"           : "Partly Cloudy",
            "Clear"                   : "Clear",
            "Sunny"                   : "Sunny",
            "Fair"                    : "Fair",
            "Mixed Rain And Hail"     : "Rain & Hail",
            "Hot"                     : "Hot",
            "Isolated Thunderstorms"  : "Some T-Storms",
            "Scattered Thunderstorms" : "Some T-Storms",
            "Scattered Showers"       : "Some Rain",
            "Heavy Snow"              : "Heavy Snow",
            "Scattered Snow Showers"  : "Some Snow",
            "Thundershowers"          : "Thundershowers",
            "Snow Showers"            : "Snow",
            "Isolated Thundershowers" : "Some T-Storms",
            "Rain"                    : "Rain",
            "Mostly Sunny"            : "Sunny"
            
          }
        case "directions":
          return {
            "North"           : "North",
            "N."              : "N.",
            "East"            : "East",
            "E."              : "E.",
            "South"           : "South",
            "S."              : "S.",
            "West"            : "West",
            "W."              : "W.",
          }
      }
  }
}