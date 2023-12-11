const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const gallery = document.querySelector(".gallery")

console.log(images.length);

const markup = images
  .map((image) => `<li class = "gallery-item"> <img class = "gallery-img" src = "${image.url}" alt = "${image.alt}" width = '360px' heigth = '360px' /> </li>`)
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.style.cssText =`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    flex-basis: calc((100% - (24px * 2)) / 3);

    justify-content: center;
    align-items: flex-start;

    row-gap: 64px;
    column-gap: 24px ;
    text-align: center;

    margin-top: 156px;
    margin-bottom: 156px
  `;


const galleryItem = document.querySelector(".gallery-item")
galleryItem.style.cssText = `
  display: block;
  flex-shrink: 0;
  object-fit: cover;
`;

const galleryImage = document.querySelector(".gallery-img");
galleryImage.style.cssText = `
  
  object-fit: cover;
`;
