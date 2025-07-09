var userLang = navigator.language || navigator.userLanguage;

if(userLang.indexOf("pt-")==-1 && userLang.indexOf("es-")==-1){
	//navbar
	document.getElementById("sobre-nav-item").textContent="ABOUT";
	document.getElementById("depoimentos-nav-item").textContent="TESTIMONIALS";
	document.getElementById("portfólio-nav-item").textContent="PORTFOLIO";
	document.getElementById("contato-nav-item").textContent="CONTACT";
	document.getElementById("contato-nav-item").setAttribute('onclick','alterar_url("Hello, I would like to request a quote.")');
	
	//title main
	document.getElementById("titulo").textContent="Request Your Quote Now!";
	document.getElementById("subtitulo").textContent="We develop Expert Advisors and Indicators for MetaTrader and other platforms with quality and excellence. Request your free quote.";
	document.getElementById("botao-contato-main").textContent="CONTACT US";
	document.getElementById("botao-contato-main").setAttribute('onclick','alterar_url("Hello, I would like to request a quote.")');
	///////////////////////////////////////
	//about
	document.getElementById("titulo-sobre").textContent="Put Your Project in the Hands of Professionals";
	document.getElementById("subtitulo-sobre").textContent="With more than 500 projects completed, we know how to develop exactly what our clients ask for. We offer support and follow-up during and after development. Additionally, we offer the most competitive prices in the market.";
	
	//about checklist
	document.getElementById("01-checklist-sobre").textContent="✔️ Best Practices";
	document.getElementById("02-checklist-sobre").textContent="✔️ Bug Fixes";
	document.getElementById("03-checklist-sobre").textContent="✔️ Full Support";
	document.getElementById("04-checklist-sobre").textContent="✔️ Satisfaction Guaranteed";
	///////////////////////////////////////
	
	document.getElementById("exp-sobre").textContent="Years of Experience";
	document.getElementById("botao-contato-sobre").textContent="CONTACT US";
	document.getElementById("button-contato-sobre").setAttribute('onclick','alterar_url("Hello, I would like to request a quote.")');
	
	///////////////////////////////////////
	//circle about
	document.getElementById("clientes-sobre").textContent="Clients";
	document.getElementById("avaliacoes-sobre").textContent="Positive Reviews";
	document.getElementById("projetos-sobre").textContent="Completed Projects";
	
	///////////////////////////////////////
	//testimonials
	document.getElementById("titulo-depoimentos").textContent="See What Our Clients Have to Say!";
	
	///////////////////////////////////////
	//portfolio
	document.getElementById("titulo-portfolio").textContent="Portfolio";
	
	document.getElementById("SuntzuIA-portfolio").textContent="Smart Binary Options Indicator that reads the strongest support/resistance zones and picks the best value chart levels. 80%+ accuracy with G1.";
	document.getElementById("botao1-portfolio").textContent="See More";
	document.getElementById("botao1-portfolio").setAttribute('onclick','alterar_url("Hello, I would like to learn more about the Suntzu I.A Indicator.")');
	
	document.getElementById("JamBot-portfolio").textContent="Smart Binary Options Indicator based on Bollinger Bands, which chooses the best strategy and parameters. 80%+ accuracy with G1.";
	document.getElementById("botao2-portfolio").textContent="Unavailable";
	
	document.getElementById("DiamanteIA-portfolio").textContent="Smart Binary Options Indicator based on flow and reversal, which chooses the best strategy and parameters. 80%+ accuracy with G1.";
	document.getElementById("botao3-portfolio").textContent="Unavailable";
	
	document.getElementById("SuntzuQuant-portfolio").textContent="Robust Binary Options Indicator developed based on Quantitative Trading concepts. 60%+ accuracy without Martingale.";
	document.getElementById("botao4-portfolio").textContent="See More";
	document.getElementById("botao4-portfolio").setAttribute('onclick','alterar_url("Hello, I would like to learn more about the Suntzu Quant Indicator.")');
	
	document.getElementById("combinerfx-portfolio").textContent="EA that combines and automates external indicators for Forex, sends signals to Telegram, shows backtest results, etc. Includes various types of risk management, exit rules, and filters.";
	document.getElementById("botao5-portfolio").textContent="See More";
	document.getElementById("botao5-portfolio").setAttribute('onclick','alterar_url("Hello, I would like to learn more about the Forex Combiner.")');
	
	document.getElementById("combinerob-portfolio").textContent="Indicator that combines and automates external indicators for Binary Options, sends signals to Telegram, shows backtest results, etc. Includes several types of filters.";
	document.getElementById("botao6-portfolio").textContent="See More";
	document.getElementById("botao6-portfolio").setAttribute('onclick','alterar_url("Hello, I would like to learn more about the O.B. Combiner.")');

	///////////////////////////////////////
	//FAQ
	document.getElementById("titulo-faq").textContent="How Can We Help You?";
	
	document.getElementById("plataformas-faq").textContent="Platforms";
	document.getElementById("indicadores-faq").textContent="Indicators";
	document.getElementById("robos-faq").textContent="Expert Advisors";
	document.getElementById("utilitarios-faq").textContent="Scripts";
	
	document.getElementById("button-faq01").textContent="Do you offer maintenance after the script is completed?";
	document.getElementById("answer-faq01").textContent="Yes! Any errors that the system presents, within 15 days of delivery confirmation, will be corrected. We will deliver a 100% functional product, and if it is not working as requested, we will make changes and corrections at no additional cost.";
	
	document.getElementById("button-faq02").textContent="How much does it cost to develop an EA / Indicator?";
	document.getElementById("answer-faq02").textContent="The cost varies based on complexity. The more functions, indicators, or parameters, the higher the price of the service.";
	document.getElementById("fazer-orcamento-faq").textContent="Request your free quote now!";
		
	document.getElementById("button-faq03").textContent="Will I be able to customize the parameters?";
	document.getElementById("answer-faq03").textContent="Yes! We always include as many parameters as possible, allowing you to customize and find the best configuration for your needs.";
		
	document.getElementById("button-faq04").textContent="Will I receive the source code?";
	document.getElementById("answer-faq04").textContent="Yes! You can modify the source code as you wish, and you are free to resell or distribute it at your discretion.";
	///////////////////////////////////////
	
	document.getElementById("redes-sociais").textContent="Follow us on our social media:";
	
	///////////////////////////////////////
	//Floating Contact Section
	document.getElementById("flutuante-contato").textContent="Contact Us";
	document.getElementById("texto01-contato").textContent="Hello, I'm Savio, CEO and founder of";
	document.getElementById("texto01-02-contato").textContent=", and I'm";
	document.getElementById("texto01-03-contato").textContent="here to assist you.";
	document.getElementById("texto02-contato").textContent="Please choose one of the options below:";
}
