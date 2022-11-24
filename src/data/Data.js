const data = [
    {
        id:1,
        serviceName: "Прием (осмотр, консультация) врача-стоматолога первичный",
        price: "500",
        serviceCategory: "Общая стоматология"
    },
    {
        id:2,
        serviceName: "Инфильтрационная анестезия",
        price: "500",
        serviceCategory: "Общая стоматология"
    },
    {
        id:3,
        serviceName: "Проводниковая анестезия",
        price: "500",
        serviceCategory: "Общая стоматология"
    },
    {
        id:4,
        serviceName: "Радиовизиография челюстно-лицевой области",
        price: "500",
        serviceCategory: "Общая стоматология"
    },
    {
        id:5,
        serviceName: "Наложение коффердама",
        price: "300",
        serviceCategory: "Общая стоматология"
    },
    {
        id:6,
        serviceName: "Запечатывание фиссуры зуба герметиком",
        price: "1000",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:7,
        serviceName: "Восстановление зуба пломбой",
        price: "4000",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:8,
        serviceName: "Восстановление зуба пломбой с использованием материалов из фотополимеров",
        price: "5000",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:9,
        serviceName: "Сложное эстетико-функциональное восстановление зуба с помощью композита",
        price: "7000",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:10,
        serviceName: "Восстановление зуба пломбой  с использованием стеклоиномерных цементов",
        price: "3000",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:11,
        serviceName: "Инструментальная и медикаментозная обработка корневого канала",
        price: "1000",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:12,
        serviceName: "Инструментальная и медикаментозная обработка хорошо проходимого корневого канала",
        price: "1500",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:13,
        serviceName: "Инструментальная и медикаментозная обработка плохо проходимого корневого канала",
        price: "2500",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:14,
        serviceName: "Временное пломбирование лекарственным препаратом корневого канала",
        price: "500",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:15,
        serviceName: "Наложение временной пломбы",
        price: "500",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:16,
        serviceName: "Пломбирование корневого канала зуба",
        price: "500",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:17,
        serviceName: "Пломбирование корневого канала зуба гуттаперчивыми штифтами",
        price: "1500",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:18,
        serviceName: "Распломбировка корневого канала ранее леченного",
        price: "1000",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:19,
        serviceName: "Закрытие перфорации стенки корневого канала зуба",
        price: "2000",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:20,
        serviceName: "Временное восстановление разрушенного зуба композитом",
        price: "3000",
        serviceCategory: "Лечение кариеса"
    },
    {
        id:21,
        serviceName: "Удаление внутриканального штифта/ вкладки",
        price: "2500",
        serviceCategory: "Лечение кариеса"
    },
     /*{
        id:22,
        service: "Профессиональная гигиена полости рта и зубов",
        price: "3000",
        serviceCategory: "Профилактика и косметическая стоматология"
    },
    {
        id:23,
        service: "Ультразвуковое удаление наддесневых и поддесневых зубных отложений в области зуба",
        price: "2000",
        serviceCategory: "Профилактика и косметическая стоматология"
    },
    {
        id:24,
        service: "Лечение повышенной чувствительности (1 зуб)",
        price: "300",
        category: "Профилактика и косметическая стоматология"
    },
    {
        id:25,
        service: "Профессиональное отбеливание зубов ZOOM",
        price: "25000",
        category: "Профилактика и косметическая стоматология"
    },
    {
        id:26,
        service: "Night White",
        price: "10000",
        category: "Профилактика и косметическая стоматология"
    },
    {
        id:27,
        service: "Обучение гигиене полости рта и зубов индивидуальное, подбор средств и предметов гигиены полости рта",
        price: "1000",
        category: "Профилактика и косметическая стоматология"
    },
    {
        id:28,
        service: "Снятие оттиска с одной челюсти",
        price: "500",
        category: "Протезирование"
    },
    {
        id:29,
        service: "Моделирование воском одного зуба (WAX-UP)",
        price: "500",
        category: "Протезирование"
    },
    {
        id:30,
        service: "Снятие несъемной ортопедической конструкции",
        price: "600",
        category: "Протезирование"
    },
    {
        id:31,
        service: "Восстановление зуба вкладками, полукоронкой цельнокерамической",
        price: "18000",
        category: "Протезирование"
    },
    {
        id:32,
        service: "Восстановление зуба  виниром",
        price: "20000",
        category: "Протезирование"
    },
    {
        id:33,
        service: "Восстановление зуба временной коронкой на имплантате",
        price: "7000",
        category: "Протезирование"
    },
    {
        id:34,
        service: "Восстановление зуба временной коронкой (Prettau)",
        price: "3000",
        category: "Протезирование"
    },
    {
        id:35,
        service: "Восстановление зуба цельнолитой коронкой",
        price: "6000",
        category: "Протезирование"
    },
    {
        id:36,
        service: "Восстановление зуба металлокерамической  коронкой",
        price: "10000",
        category: "Протезирование"
    },
    {
        id:37,
        service: "Восстановление зуба временной коронкой",
        price: "1000",
        category: "Протезирование"
    },
    {
        id:38,
        service: "Восстановление зуба коронкой на основе диоксида циркония",
        price: "16000",
        category: "Протезирование"
    },
    {
        id:39,
        service: "Восстановление зуба цельнокерамической коронкой (послойное нанесение керамических масс)",
        price: "22000",
        category: "Протезирование"
    },
    {
        id:40,
        service: "Фиксация на постоянный цемент несъемных ортопедических конструкций",
        price: "500",
        category: "Протезирование"
    },
    {
        id:41,
        service: "Восстановление зуба  с использованием цельнолитой культевой вкладки",
        price: "4000",
        category: "Протезирование"
    },
    {
        id:42,
        service: "Восстановление зуба пломбировочными материалами с использованием анкерных штифтов",
        price: "4000",
        category: "Протезирование"
    },
    {
        id:43,
        service: "Протезирование зуба с использованием имплантата (металлокерамическая коронка, титановый абатмент)",
        price: "20000",
        category: "Протезирование"
    },
    {
        id:44,
        service: "Протезирование зуба с использованием имплантата (цельнокерамическая коронка, индивидуальный абатмент)",
        price: "28000",
        category: "Протезирование"
    },
    {
        id:45,
        service: "Изготовление  защитной каппы",
        price: "4000",
        category: "Протезирование"
    },
    {
        id:46,
        service: "Фиксация внутриканального штифта",
        price: "1000",
        category: "Протезирование"
    },
    {
        id:47,
        service: "Определение прикуса",
        price: "5000",
        category: "Протезирование"
    },
    {
        id:48,
        service: "Протезирование частичными съемными пластиночными протезами",
        price: "17000",
        category: "Протезирование"
    },
    {
        id:49,
        service: "Протезирование зубов полными съемными пластиночными протезами",
        price: "17000",
        category: "Протезирование"
    },
    {
        id:50,
        service: "Протезирование съемными бюгельными протезами с кламерной фиксацией",
        price: "45000",
        category: "Протезирование"
    },
    {
        id:51,
        service: "Протезирование съемными бюгельными протезами с замковой фиксацией",
        price: "60000",
        category: "Протезирование"
    },
    {
        id:52,
        service: "Изготовление съемного протеза  на балке (4 имплантата)",
        price: "180000",
        category: "Протезирование"
    },
    {
        id:53,
        service: "Изготовление частичного съемного протеза",
        price: "5000",
        category: "Протезирование"
    },
    {
        id:54,
        service: "Починка съемного протеза",
        price: "4000",
        category: "Протезирование"
    },
    {
        id:55,
        service: "Перебазировка съемного протеза",
        price: "4000",
        category: "Протезирование"
    },
    {
        id:56,
        service: "Изготовление  индивидуальной ложки",
        price: "1000",
        category: "Протезирование"
    },
    {
        id:57,
        service: "Эластичная прокладка для съемного протеза",
        price: "2000",
        category: "Протезирование"
    },
    {
        id:58,
        service: "Простое удаление",
        price: "1500",
        category: "Хирургические услуги"
    },
    {
        id:59,
        service: "Удаление постоянного зуба",
        price: "3500",
        category: "Хирургические услуги"
    },
    {
        id:60,
        service: "Удаление зуба сложное с разъединением корней",
        price: "5000",
        category: "Хирургические услуги"
    },
    {
        id:61,
        service: "Операция удаления ретинированного, дистопированного или сверхкомплектного зуба",
        price: "7000",
        category: "Хирургические услуги"
    },
    {
        id:62,
        service: "Вскрытие и дренирование абсцесса полости рта",
        price: "2000",
        category: "Хирургические услуги"
    },
    {
        id:63,
        service: "Лечение альвеолита",
        price: "2000",
        category: "Хирургические услуги"
    },
    {
        id:64,
        service: "Перевязка после хирургического вмешательства",
        price: "500",
        category: "Хирургические услуги"
    },
    {
        id:65,
        service: "Пластика десны аутотрансплантатом в области одного сегмента",
        price: "10000",
        category: "Хирургические услуги"
    },
    {
        id:66,
        service: "Удлинение клинической коронки зуба",
        price: "5000",
        category: "Хирургические услуги"
    },
    {
        id:67,
        service: "Открытый синус-лифтинг (костная пластика, остеопластика)",
        price: "50000",
        category: "Хирургические услуги"
    },
    {
        id:68,
        service: "Закрытый синус-лифтинг (костная пластика, остеопластика)",
        price: "7000",
        category: "Хирургические услуги"
    },
    {
        id:69,
        service: "Аугментация кости (пластика альвеолярного отростка) в области одного сегмента",
        price: "10000",
        category: "Хирургические услуги"
    },
    {
        id:70,
        service: "Вестибулопластика",
        price: "10000",
        category: "Хирургические услуги"
    },
    {
        id:71,
        service: "Пластика перфорации верхнечелюстной пазухи",
        price: "5000",
        category: "Хирургические услуги"
    },
    {
        id:72,
        service: "Цистотомия или цистэктомия",
        price: "5000",
        category: "Хирургические услуги"
    },
    {
        id:73,
        service: "Инъекция",
        price: "300",
        category: "Хирургические услуги"
    },
    {
        id:74,
        service: "Удаление швов",
        price: "300",
        category: "Хирургические услуги"
    },
    {
        id:75,
        service: "Забор крови из вены",
        price: "200",
        category: "Хирургические услуги"
    },
    {
        id:76,
        service: "Внесение лекарственного препарата в лунку",
        price: "500",
        category: "Хирургические услуги"
    },
    {
        id:77,
        service: "Наложение швов",
        price: "500",
        category: "Хирургические услуги"
    },*/

   
]

export default data;
