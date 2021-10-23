const speakers = [
  {
    name: 'Yochai benkler',
    title:
      'Berkman professor of Entrepeneurial legal studies at Harvard law school',
    function:
      'Benkler studies commors-based peer production, and published his seminal book The wealth of networks in 2006.',
    image: 'speaker1.png',
  },
  {
    name: 'Killnam Chon',
    title:
    'Berkman professor of Entrepeneurial legal studies at Harvard law school',
    function:
    'Benkler studies commors-based peer production, and published his seminal book The wealth of networks in 2006.',
    image: 'speaker2.png',
  },
  {
    name: 'sohYeong noh',
    title: 'Director of art center Nairobi nd a board member of CC Korea',
    function:
    'Benkler studies commors-based peer production, and published his seminal book The wealth of networks in 2006.',
    image: 'speaker3.png',
  },
  {
    name: 'Julia Leda',
    title: 'President of young pirates of Europe',
    function:
    'Benkler studies commors-based peer production, and published his seminal book The wealth of networks in 2006.',
    image: 'speaker4.png',
  },
  {
    name: 'Lila Tretikov',
    title: 'Executive director of the Wikimedia foundation',
    function:
    'Benkler studies commors-based peer production, and published his seminal book The wealth of networks in 2006.',
    image: 'speaker5.png',
  },
  {
    name: 'Ryan Merkley',
    title: 'CEO of creative common,ex COO of the Mozzilla foundation',
    function:
    'Benkler studies commors-based peer production, and published his seminal book The wealth of networks in 2006.',
    image: 'speaker6.png',
  },
];
const speakersoutput = document.querySelector('.speakers');
for (let x = 0; x < speakers.length; x += 1) {
  const speaker = speakers[x];
  speakersoutput.innerHTML += `<div class='speaker'><div class='speakerleft'><img src='img/${speaker.image}'></div><div class='speakerright'><p class='speakername'>${speaker.name}</p><p class='speakertitle'>${speaker.title}</p><hr class='speakerhr'><p class='speakerfunction'>${speaker.function}</p></div></div>`;
}
