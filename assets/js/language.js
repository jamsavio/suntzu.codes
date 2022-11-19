var userLang = navigator.language || navigator.userLanguage;

if(userLang.indexOf("pt-")==-1 && userLang.indexOf("es-")==-1){
	//navbar
	document.getElementById("sobre-nav-item").textContent="ABOUT";
	document.getElementById("depoimentos-nav-item").textContent="FEEDBACKS";
	document.getElementById("portfólio-nav-item").textContent="PORTFOLIO";
	document.getElementById("contato-nav-item").textContent="CONTACT";
	document.getElementById("contato-nav-item").setAttribute('onclick','alterar_url("Hi, I would like to quote a job.")');
	
	//title main
	document.getElementById("titulo").textContent="Request your quote now!";
	document.getElementById("subtitulo").textContent="We develop Expert Advisors and Indicators for MetaTrader and other platforms, with quality and excellence! Request your free quote.";
	document.getElementById("botao-contato-main").textContent="CONTACT US";
	document.getElementById("botao-contato-main").setAttribute('onclick','alterar_url("Hi, I would like to quote a job.")');
	///////////////////////////////////////
	//about
	document.getElementById("titulo-sobre").textContent="Put your project in the hands of professionals";
	document.getElementById("subtitulo-sobre").textContent="With more than 500 projects done, we know how to develop exactly what the customer asks for. We offer support and follow-up during and after development. In addition, we have the fairest price on the market.";
	
	//about checklist
	document.getElementById("01-checklist-sobre").textContent="✔️ Best practices";
	document.getElementById("02-checklist-sobre").textContent="✔️ Error maintenance";
	document.getElementById("03-checklist-sobre").textContent="✔️ Full support";
	document.getElementById("04-checklist-sobre").textContent="✔️ Satisfaction guaranteed";
	///////////////////////////////////////
	
	document.getElementById("exp-sobre").textContent="Years of experience";
	document.getElementById("botao-contato-sobre").textContent="CONTACT US";
	document.getElementById("button-contato-sobre").setAttribute('onclick','alterar_url("Hi, I would like to quote a job.")');
	
	///////////////////////////////////////
	//circle about
	document.getElementById("clientes-sobre").textContent="Customers";
	document.getElementById("avaliacoes-sobre").textContent="Positive Reviews";
	document.getElementById("projetos-sobre").textContent="Finished Projects";
	
	///////////////////////////////////////
	//feedbacks
	document.getElementById("titulo-depoimentos").textContent="See the opinion of our customers!";
	
	///////////////////////////////////////
	//portfolio
	document.getElementById("titulo-portfolio").textContent="Portfolio";
	
	document.getElementById("SuntzuIA-portfolio").textContent="Smart Binary Options Indicator that reads the strongest donforex zones and picks the best value chart levels. +80% assertiveness with G1.";
	document.getElementById("botao1-portfolio").textContent="See more";
	document.getElementById("botao1-portfolio").setAttribute('onclick','alterar_url("Hello, I would like to know more about the Suntzu I.A indicator.")');
	
	document.getElementById("JamBot-portfolio").textContent="Smart Binary Options Indicator, based on bollinger bands, which chooses the best strategy and best parameters. +80% assertiveness with G1.";
	document.getElementById("botao2-portfolio").textContent="Unavailable";
	
	document.getElementById("DiamanteIA-portfolio").textContent="Smart Binary Options indicator, based on flow and reversal, which chooses the best strategy and best parameters. +80% assertiveness with G1.";
	document.getElementById("botao3-portfolio").textContent="Unavailable";
	
	document.getElementById("SuntzuQuant-portfolio").textContent="Robust Binary Options Indicator, which was developed based on Quantitative Trading concepts. +60% assertiveness without martingale.";
	document.getElementById("botao4-portfolio").textContent="See more";
	document.getElementById("botao4-portfolio").setAttribute('onclick','alterar_url("Hello, I would like to know more about the Suntzu Quant indicator")');
	
	document.getElementById("combinerfx-portfolio").textContent="EA that merges and automates external indicators for Forex, sends signals to Telegram, shows the backtest, etc. Contains several types of management, exit rules and filters.";
	document.getElementById("botao5-portfolio").textContent="See more";
	document.getElementById("botao5-portfolio").setAttribute('onclick','alterar_url("Hello, I would like to know more about the Forex Combiner")');
	
	document.getElementById("combinerob-portfolio").textContent="Indicator that merges and automates external indicators for Binary Options, sends signals to Telegram, shows backtest, etc. Contains several types of filters.";
	document.getElementById("botao6-portfolio").textContent="See more";
	document.getElementById("botao6-portfolio").setAttribute('onclick','alterar_url("Hello, I would like to know more about the O.B Combiner")');

	///////////////////////////////////////
	//faq
	document.getElementById("titulo-faq").textContent="How can we help you?";
	
	document.getElementById("plataformas-faq").textContent="Platforms";
	document.getElementById("indicadores-faq").textContent="Indicators";
	document.getElementById("robos-faq").textContent="Expert Advisors";
	document.getElementById("utilitarios-faq").textContent="Scripts";
	
	document.getElementById("button-faq01").textContent="After the script is done, do you do maintenance?";
	document.getElementById("answer-faq01").textContent="Yes! Any errors that the system presents, within 15 days of delivery confirmation, will be corrected. We will deliver a 100% functional product and, if it is not working as requested, we will make changes and corrections at no additional cost.";
	
	document.getElementById("button-faq02").textContent="How much costs to develop a EA / Indicator?";
	document.getElementById("answer-faq02").textContent="Cost varies based on complexity. The more functions, indicators or parameters, the value of the service increases.";
	document.getElementById("fazer-orcamento-faq").textContent="Request your quote for free now!";
		
	document.getElementById("button-faq03").textContent="Will I be able to customize the parameters?";
	document.getElementById("answer-faq03").textContent="Yes! We always put as many parameters as possible so that the customer can customize and find the best configuration to use.";
		
	document.getElementById("button-faq04").textContent="Will I get the source code?";
	document.getElementById("answer-faq04").textContent="Yes! You can make any changes you want from the source code, and you can resell or distribute at your discretion.";
	///////////////////////////////////////
	
	document.getElementById("redes-sociais").textContent="Follow us on our social networks:";
	
	///////////////////////////////////////
	//Div Contato flutuante
	document.getElementById("flutuante-contato").textContent="Contact us";
	document.getElementById("texto01-contato").textContent="Hello. I'm Savio, CEO and founder of";
	document.getElementById("texto01-02-contato").textContent=", and I'm ";
	document.getElementById("texto01-03-contato").textContent="to help you.";
	document.getElementById("texto02-contato").textContent="Choose one of the options below:";
}
