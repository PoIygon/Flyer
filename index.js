input.addEventListener("keydown", (event) => {
    if (event.key === "enter") {
        var input = document.getElementById("searchbox").value;
        if (input === ".com" || ".org" || ".net" || ".io" || ".co" || ".me" || ".edu" || ".int" || ".gov" || "mil" || ".biz" || ".info" || ".name" || ".mobi" || ".tv" || ".pro" || ".aero" || ".asia" || ".cat" || ".coop" || ".jobs" || ".museum" || ".tel" || ".travel" || ".ac" || ".ad" || ".ae" || ".af" || ".ag" || ".ai" || ".al" || ".am" || ".an" || ".ao" || ".aq" || ".ar" || ".as" || ".at" || ".au" || ".aw" || ".ax" || ".az" || ".ba" || ".bb" || ".bd" || ".be" || ".bf" || ".bg" || ".bh" || ".bi" || ".bj" || ".bm" || ".bn" || ".bo" || ".br" || ".bs" || ".bt" || ".bv" || ".bw" || ".by" || ".bz" || ".ca" || ".cc" || ".cd" || ".cf" || ".cg" || ".ch" || ".ci" || ".ck" || ".cl" || ".cm" || ".cn" || ".co" || ".cr" || ".cu" || ".cv" || ".cx" || ".cy" || ".cz" || ".de" || ".dj" || ".dk" || ".dm" || ".do" || ".dz" || ".ec" || ".ee" || ".eg" || ".er" || ".es" || ".et" || ".eu" || ".fi" || ".fj" || ".fk" || ".fm" || ".fo" || ".fr" || ".ga" || ".gb" || ".gd" || ".ge" || ".gf" || ".gg" || ".gh" || ".gi" || ".gl" || ".gm" || ".gn" || ".gp" || ".gq" || ".gr" || ".gs" || ".gt" || ".gu" || ".gw" || ".gy" || ".hk" || ".hm" || ".hn" || ".hr" || ".ht" || ".hu" || ".id" || ".ie" || ".il" || ".im" || ".in" || ".io" || ".iq" || ".ir") {
            window.location.href = "https://" + input;
        } else {
            window.location.href = 'https://www.google.com/search?q=' + input;
        }
    }
});