export default class BookStoreService {
    data = [
        {
            id: 1,
            title: "Вы не знаете JS. Типы и грамматические конструкции",
            author: "Симпсон Кайл",
            price: 906,
            coverImage: "https://www.bookvoed.ru/files/1836/68/45/13/5.jpeg"
        },
        {
            id: 2,
            title: "Вы не знаете JS. Асинхронная обработка и оптимизация",
            author: "Симпсон Кайл",
            price: 906,
            coverImage: "https://www.bookvoed.ru/files/1836/68/45/13/7.jpeg"
        },
        {
            id: 3,
            title: "Вы не знаете JS. Замыкания и объекты",
            author: "Симпсон Кайл",
            price: 906,
            coverImage: "https://www.bookvoed.ru/files/1836/68/45/13/6.jpeg"
        },
        {
            id: 4,
            title: "Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих",
            author: "Бхаргава, Адитья",
            price: 706,
            coverImage: "https://www.bookvoed.ru/files/1836/38/79/63/6.jpeg"
        },
        {
            id: 5,
            title: "Чистый код: создание, анализ и рефакторинг",
            author: "Мартин Роберт",
            price: 522,
            coverImage: "https://www.bookvoed.ru/files/1836/52/18/79/6.jpeg"
        },
        {
            id: 6,
            title: "Чистая архитектура. Искусство разработки программного обеспечения",
            author: "Мартин Роберт К.",
            price: 686,
            coverImage: "https://www.bookvoed.ru/files/1836/48/89/32/0.jpeg"
        },
        {
            id: 7,
            title: "Мастер-класс. Совершенный код.",
            author: "Макконнелл С.",
            price: 1233,
            coverImage: "https://www.bookvoed.ru/files/1836/63/53/27/0.jpeg"
        },
        {
            id: 8,
            title: "HTML и CSS. Разработка и дизайн веб-сайтов",
            author: "Дакетт, Джон",
            price: 1195,
            coverImage: "https://www.bookvoed.ru/files/1836/33/80/46/6.jpeg"
        },
        {
            id: 9,
            title: "Программируем на Python",
            author: "Доусон, Майкл",
            price: 846,
            coverImage: "https://www.bookvoed.ru/files/1836/32/88/53/3.jpeg"
        },
        {
            id: 10,
            title: "JavaScript и jQuery. Интерактивная веб-разработка",
            author: "Дакетт Джон",
            price: 1425,
            coverImage: "https://www.bookvoed.ru/files/1836/39/47/02/4.jpeg"
        },
        {
            id: 11,
            title: "Идеальный программист. Как стать профессионалом разработки ПО",
            author: "Мартин Роберт К.",
            price: 504,
            coverImage: "https://www.bookvoed.ru/files/1836/55/91/99/4.jpeg"
        },
        {
            id: 12,
            title: "PHP 7",
            author: "Симдянов, Игорь Вячеславович, Котеров, Дмитрий Владимирович",
            price: 1181,
            coverImage: "https://www.bookvoed.ru/files/1836/34/76/87/1.jpeg"
        },
        {
            id: 13,
            title: "Swift. Основы разработки приложений под iOS, iPadOS и macOS. 5-е изд., доп. и перераб.",
            author: "Усов Василий",
            price: 824,
            coverImage: "https://www.bookvoed.ru/files/1836/73/65/82/1.jpeg"
        },
        {
            id: 14,
            title: "Изучаем программирование на JavaScript",
            author: "Фримен Э.",
            price: 1598,
            coverImage: "https://www.bookvoed.ru/files/1377/25/67/48/4.jpeg"
        },
        {
            id: 15,
            title: "Алгоритмы для начинающих. Теория и практика для разработчика",
            author: "Луридас Панос",
            price: 782,
            coverImage: "https://www.bookvoed.ru/files/1836/45/62/36/6.jpeg"
        }
    ];


    getBooks() {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
                reject(new Error("Something went wrong"))
            }, 700)
        })
    }
}