

        document.body.innerHTML =  "<header>" +
           "     <h1><div id=header></div></h1> "+
       " </header> "+

       " <div class=container>  "+
        "  <div class=back>  " +
          "  <section class=color-9>   " +
           "     <nav class=cl-effect-9> " +

            "     <div id=urlDefenition></div>  " +
         "     </nav>  "     +
         "   </section>   "   +
        "  </div>  "       +
       " </div>  "       ;



        for (var k in tree.pages) {

        if   (tree.pages[k].now===window.location.toString() ||  tree.pages[k].now==window.location.search.toString().substr(1)) {
                document.getElementById("header").innerHTML = tree.pages[k].tittle;

                for (var key in tree.pages[k].urlDefenition) {
                    document.getElementById("urlDefenition").innerHTML +=" <ul>	<a href="+tree.pages[k].urlDefenition[key].url+"><span>"+tree.pages[k].urlDefenition[key].name+"</span><span>"+tree.pages[k].urlDefenition[key].defenition+"</span></a>     </ul>";
                }
                break;
          }
        }