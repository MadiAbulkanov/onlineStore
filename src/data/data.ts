import productImage from '../assets/product-img.jpg';
import newProductImage from '../assets/newProd.png';
import accessory1Image from '../assets/accessory1.jpg';
import accessory2Image from '../assets/accessory2.png';
import actionCamerasImage from '../assets/action-cameras.jpg';
import camerasImage from '../assets/cameras.jpg';

export const reviews = [
    { 
        id: 1, 
        reviewText: "Это отзыв. Кликните здесь, чтобы отредактировать и написать хороший отзыв о вашей компании и услугах. Пусть клиенты порекомендуют вас посетителям сайта.", 
        reviewAuthor: "Роман Белов"
    },
    { 
        id: 2, 
        reviewText: "Это отзыв. Кликните здесь, чтобы отредактировать и написать хороший отзыв о вашей компании и услугах. Пусть клиенты порекомендуют вас посетителям сайта.", 
        reviewAuthor: "Андрей Кузнецов"
    },
    { 
        id: 3, 
        reviewText: "Это отзыв. Кликните здесь, чтобы отредактировать и написать хороший отзыв о вашей компании и услугах. Пусть клиенты порекомендуют вас посетителям сайта.", 
        reviewAuthor: "Илья Владимиров"
    }
];

export const filterByType = {
    title: "Тип товара",
    types: ["Лидеры продаж", "Новинки", "Распродажа"]
};

export const filterByTypes = {
    title: "Тип товара",
    types: ["Все", "Дроны", "Камеры", "Аксесуары", "Лидеры продаж", "Новинки", "Распродажа"]
};

export const filterByBrand = {
    title: "Бренды",
    types: ["X-PRO", "D-Fly", "Brendax", "SKL", "Panny", "V-vision", "Flair", "Horizon", "Santa"]
};

export const FAQ = [
    { 
        question: "О чем раздел FAQ «Вопросы и ответы»?", 
        answer: "Раздел FAQ содержит ответы на частые вопросы о вашем бизнесе, например, «В какие регионы вы доставляете?», «Какие у вас часы работы?» или «Как записаться на услугу?»." 
    },
    { 
        question: "Почему раздел с вопросами и ответами важен?", 
        answer: "Раздел с вопросами и ответами — отличный способ для пользователей быстро найти интересующую их информацию и взаимодействовать с вашим бизнесом и сайтом более эффективно и удобно." 
    },
    { 
        question: "Где можно добавить раздел FAQ?", 
        answer: "Раздел можно добавить на любую страницу сайта или приложения Wix, для удобства пользователей." 
    },
];

export const footerInfo = [
    { 
        title: 'Магазин',
        links: [
            { link: "drones", text: "Дроны" },
            { link: "cameras", text: "Камеры" },
            { link: "accessories", text: "Аксессуары" },
        ]
    },
    { 
        title: 'Информация',
        links: [
            { link: "about-us", text: "О магазине" },
            { link: "contact", text: "Связь" },
        ]
    },
    { 
        title: 'Поддержка',
        links: [
            { link: "faq", text: "FAQ" },
            { link: "delivery", text: "Доставка и возврат" },
            { link: "store-polyce", text: "Политика магазина" },
        ]
    },
];

export const topSellersProducts = [
    { id: 1, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 2, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 3, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 4, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 5, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
];

export const newProducts = [
    { id: 1, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 2, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 3, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 4, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 5, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
];

export const products = [
    { id: 1, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 2, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 3, name: 'Видеокамера GoPro HERO', image: camerasImage, price: 35000 },
    { id: 4, name: 'Экшн-камера Xiaomi YI', image: actionCamerasImage, price: 7000 },
    { id: 5, name: 'Рюкзак для дрона Pad Pro', image: accessory1Image, price: 20000 },
    { id: 6, name: 'Пульт дистанционного управления', image: accessory2Image, price: 60000 },
    { id: 7, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 8, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 9, name: 'Видеокамера GoPro HERO', image: camerasImage, price: 35000 },
    { id: 10, name: 'Экшн-камера Xiaomi YI', image: actionCamerasImage, price: 7000 },
    { id: 11, name: 'Рюкзак для дрона Pad Pro', image: accessory1Image, price: 20000 },
    { id: 12, name: 'Пульт дистанционного управления', image: accessory2Image, price: 60000 },
    { id: 13, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 14, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 15, name: 'Видеокамера GoPro HERO', image: camerasImage, price: 35000 },
    { id: 16, name: 'Экшн-камера Xiaomi YI', image: actionCamerasImage, price: 7000 },
    { id: 17, name: 'Рюкзак для дрона Pad Pro', image: accessory1Image, price: 20000 },
    { id: 18, name: 'Пульт дистанционного управления', image: accessory2Image, price: 60000 },
    { id: 19, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 20, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 21, name: 'Видеокамера GoPro HERO', image: camerasImage, price: 35000 },
];

export const drones = [
    { id: 1, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 2, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 3, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 4, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 5, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 6, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 7, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 8, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 9, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 10, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 11, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 12, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 13, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 14, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 15, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 16, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
    { id: 17, name: 'Квадрокоптер DEXP H-1', image: newProductImage, price: 35000 },
    { id: 18, name: 'Квадрокоптер DJI Mavic Pro', image: productImage, price: 390000 },
];

export const cameras = [
    { id: 1, name: 'Видеокамера GoPro HERO', image: camerasImage, price: 35000 },
    { id: 2, name: 'Экшн-камера Xiaomi YI', image: actionCamerasImage, price: 7000 },
    { id: 3, name: 'Видеокамера GoPro HERO', image: camerasImage, price: 35000 },
    { id: 4, name: 'Экшн-камера Xiaomi YI', image: actionCamerasImage, price: 7000 },
    { id: 5, name: 'Видеокамера GoPro HERO', image: camerasImage, price: 35000 },
    { id: 6, name: 'Экшн-камера Xiaomi YI', image: actionCamerasImage, price: 7000 },
    { id: 7, name: 'Видеокамера GoPro HERO', image: camerasImage, price: 35000 },
    { id: 8, name: 'Экшн-камера Xiaomi YI', image: actionCamerasImage, price: 7000 },
    { id: 9, name: 'Видеокамера GoPro HERO', image: camerasImage, price: 35000 },
    { id: 10, name: 'Экшн-камера Xiaomi YI', image: actionCamerasImage, price: 7000 },
    { id: 11, name: 'Видеокамера GoPro HERO', image: camerasImage, price: 35000 },
    { id: 12, name: 'Экшн-камера Xiaomi YI', image: actionCamerasImage, price: 7000 },
    { id: 13, name: 'Видеокамера GoPro HERO', image: camerasImage, price: 35000 },
    { id: 14, name: 'Экшн-камера Xiaomi YI', image: actionCamerasImage, price: 7000 },
    { id: 15, name: 'Видеокамера GoPro HERO', image: camerasImage, price: 35000 },
    { id: 16, name: 'Экшн-камера Xiaomi YI', image: actionCamerasImage, price: 7000 },
    { id: 17, name: 'Видеокамера GoPro HERO', image: camerasImage, price: 35000 },
    { id: 18, name: 'Экшн-камера Xiaomi YI', image: actionCamerasImage, price: 7000 },
];

export const accessories = [
    { id: 1, name: 'Рюкзак для дрона Pad Pro', image: accessory1Image, price: 20000 },
    { id: 2, name: 'Пульт дистанционного управления', image: accessory2Image, price: 60000 },
    { id: 3, name: 'Рюкзак для дрона Pad Pro', image: accessory1Image, price: 20000 },
    { id: 4, name: 'Пульт дистанционного управления', image: accessory2Image, price: 60000 },
    { id: 5, name: 'Рюкзак для дрона Pad Pro', image: accessory1Image, price: 20000 },
    { id: 6, name: 'Пульт дистанционного управления', image: accessory2Image, price: 60000 },
    { id: 7, name: 'Рюкзак для дрона Pad Pro', image: accessory1Image, price: 20000 },
    { id: 8, name: 'Пульт дистанционного управления', image: accessory2Image, price: 60000 },
    { id: 9, name: 'Рюкзак для дрона Pad Pro', image: accessory1Image, price: 20000 },
    { id: 10, name: 'Пульт дистанционного управления', image: accessory2Image, price: 60000 },
    { id: 11, name: 'Рюкзак для дрона Pad Pro', image: accessory1Image, price: 20000 },
    { id: 12, name: 'Пульт дистанционного управления', image: accessory2Image, price: 60000 },
    { id: 13, name: 'Рюкзак для дрона Pad Pro', image: accessory1Image, price: 20000 },
    { id: 14, name: 'Пульт дистанционного управления', image: accessory2Image, price: 60000 },
    { id: 15, name: 'Рюкзак для дрона Pad Pro', image: accessory1Image, price: 20000 },
    { id: 16, name: 'Пульт дистанционного управления', image: accessory2Image, price: 60000 },
    { id: 17, name: 'Рюкзак для дрона Pad Pro', image: accessory1Image, price: 20000 },
    { id: 18, name: 'Пульт дистанционного управления', image: accessory2Image, price: 60000 },
];