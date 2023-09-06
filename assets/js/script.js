const HelloCode = document.querySelector('.header-logo');
const navigation = document.querySelector('.header-navigation');
const header = document.querySelector('.header');
HelloCode.addEventListener('click', () => {
    header.classList.toggle('header-active');
    navigation.classList.toggle('active');
    const headerHeight = header.clientHeight;
    console.log('Tinggi header (termasuk padding): ' + headerHeight + 'px');
})

const aside = document.querySelector('.aside');
console.log(aside);
const asideHeight = aside.clientHeight;
console.log(`Tinggi aside ${asideHeight}`);

const stock = 0;
const milkNeeded = 25;

if (stock > milkNeeded) {
  stock = stock - milkNeeded;
  console.log('Processing your order...');
} else {
  console.log('Out of Stock!');
}

const nav = document.querySelector('.header-navigation');
const navHeight = nav.clientHeight;
console.log(`Tinggi nav ${navHeight}`);