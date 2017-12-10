
var tree   =

{
"pages":[

/*
*  В каждом блоке {} задается то, что будет на странице
*/
  {
    "now": "file:///C:/cloud/Cloud.html",    //урл страницы

    "tittle": "Cloud VTB",          //заголовок страницы



    "urlDefenition": [              // ссылки на странице

        {

            "url": "Cloud2.html",        //реальный урл ссылки (страница существует)

            "name": "Cloud Portal",       //выводимый текст ссылки

            "defenition": "Портал управления подписками. HP Cloud Service Avtomation, авторизация доменная."

            // описание

        },

       {

            "url": "?fake2",   // ссылка на несуществующую страницу. Осуществляется гет заппрос для вывода содержимого

            "name": "fake_lvl2",

            "defenition": "Портал получения информации о подписках (ip-addres, hostname, etc). HP uCMDB Browser, авторизация доменная."


        }

    ],

  },   // конец описания страницы


   {    // новая страница
    "now": "file:///C:/cloud/Cloud2.html",

    "tittle": "Cloud Portal",



    "urlDefenition": [

        {

            "url": "https://cldportal0lb.region.vtb.ru:8089",

            "name": "Cloud Portal2",

            "defenition": "Портал управления подписками. HP Cloud Service Avtomation, авторизация доменная."

        },

       {

            "url": "https://clducmdbapp101lv.region.vtb.ru:8443/ucmdb-browser/",

            "name": "Subscription info",

            "defenition": "Портал получения информации о подписках (ip-addres, hostname, etc). HP uCMDB Browser, авторизация доменная."

        }

    ],

  },




   {

    "now": "fake2",

    "tittle": "fake_lvl2",



    "urlDefenition": [

        {

            "url": "https://cldportal0lb.region.vtb.ru:8089",

            "name": "Cloud Portal2",

            "defenition": "Портал управления подписками. HP Cloud Service Avtomation, авторизация доменная."

        },

       {

            "url": "https://clducmdbapp101lv.region.vtb.ru:8443/ucmdb-browser/",

            "name": "Subscription info",

            "defenition": "Портал получения информации о подписках (ip-addres, hostname, etc). HP uCMDB Browser, авторизация доменная."

        }

    ],

  },







],

}