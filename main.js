const name = 'Krzysztof Żurowicz';
console.log(`${name} wita cię na stronie kursu WTF.`);

const about = document.querySelector('.about__header--js');
console.log(about.innerHTML);

about.innerHTML = 'Taka sytuacja !!!';

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log(paragraphs[0]);
