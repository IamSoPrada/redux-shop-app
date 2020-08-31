export default class BookStoreService {
    data = [
        {
            id: 1,
            title: "Вы не знаете JS. Типы и грамматические конструкции",
            author: "Симпсон Кайл",
            price: "906 руб.",
            coverImage: "https://www.bookvoed.ru/files/1836/68/45/13/5.jpeg"
        },
        {
            id: 2,
            title: "Вы не знаете JS. Асинхронная обработка и оптимизация",
            author: "Симпсон Кайл",
            price: "906 руб.",
            coverImage: "https://www.bookvoed.ru/files/1836/68/45/13/7.jpeg"
        },
        {
            id: 3,
            title: "Вы не знаете JS. Замыкания и объекты",
            author: "Симпсон Кайл",
            price: "906 руб.",
            coverImage: "https://www.bookvoed.ru/files/1836/68/45/13/6.jpeg"
        },
        {
            id: 4,
            title: "Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих",
            author: "Бхаргава, Адитья",
            price: "706 руб.",
            coverImage: "https://www.bookvoed.ru/files/1836/38/79/63/6.jpeg"
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