const slackLink = document.querySelector(".link");
const portugueseButton = document.querySelector(".language__btn_pt");
const englishButton = document.querySelector(".language__btn_en");
const title = document.querySelector(".title");
const description = document.querySelector(".description");

function sendSlackGAEvent(event) {
  ga("send", "event", {
    eventCategory: "Slack Link",
    eventAction: "click",
    eventLabel: event.target.href
  });
}

const changeToEnglish = () => {
  title.innerHTML = "Welcome!";
  description.innerHTML = `   
    Devas in tech is a community for women off all ages and colors that want to get into
    tech. If you just started learning HTML or got your first tech job or are a professional
    but just started learning another programming language, Devas is for you! Our goal is 
    to provide a safe space where we can ask questions, share struggles, receive support 
    and motivation or just vent, we are here for you and you can be here for other people
    like you too!
  `;
  slackLink.innerHTML = "Ready to join us?";
}

const changeToPortuguese = () => {
  title.innerHTML = "Bem-vinda!";
  description.innerHTML = `   
    Devas in tech é uma comunidade para mulheres de toda idade e cor que
    queira entrar no mundo de tech. Se você está aprendendo HTML, ou acabou de
    conseguir seu primeiro emprego em tech, Ou se você já é uma profissional,
    mas começou a estudar uma nova linguagem ou gostaria de ajudar novatas,
    Devas é para você! Nosso objetivo é prover um espaço seguro aonde você
    pode fazer pesguntas, compartilhar problemas, receber apoio e motivação ou
    apenas reclamar um pouco. Nós estamos aqui para você e você pode estar
    presente para outras mulheres vomo você!
  `;  
  slackLink.innerHTML = "Junte-se a nós!";
}

slackLink.addEventListener("click", sendSlackGAEvent);
portugueseButton.addEventListener("click", changeToPortuguese);
englishButton.addEventListener("click", changeToEnglish);
