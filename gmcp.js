nb.gmcp = function(m, r) {
	if (m === "Char.Vitals") {
		nb.systems.forEach(function(sys){
			nb.sys.health[sys] = parseFloat(r[sys]);
			nb.sys.efficacy[sys] = parseFloat(r[sys+"_efficacy"]);
		});
		nb.bal = r.bal == "1" ? true : false;
		nb.wwBal = r.ww == "1" ? true : false;
		nb.hpperc = parseInt(r.hp)/parseInt(r.maxhp);
		nb.class = r.class;
		nb.cooldowns = JSON.parse("{"+r.cooldowns+"}");
		switch (nb.class) {
			case "Scoundrel":
				nb.bullets = parseInt(r.bl);
				break;
			case "Fury":
				nb.stance = r.st;
				break;
			default:
				break;
		}
	}
	return false;	
}