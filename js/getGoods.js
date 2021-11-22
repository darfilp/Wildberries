const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = (value, category) => {
    // ПОЛУЧАЕМ С УДАЛЕННОГО СЕРВЕРА(firebase) в виде объекта
    fetch('https://willberries-project-default-rtdb.europe-west1.firebasedatabase.app/db.json')
    .then((res) => res.json)
    .then((data) => {
        const array = category
          ? data.filter((item) => item[category] === value)
          : data;

        localStorage.setItem('goods', JSON.stringify(data)); //для записи
    });
    };

    links.forEach((link) => {
        link.addEventListener('click', (e)=> {
            e.preventDefault();
            const linkValue = link.textContent;
            const category = link.dataset.field;
            console.log(category)
            getData(linkValue, category);
        });
    });

};

getGoods();