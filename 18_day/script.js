const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercise: LEVEL 1

//1

fetch(countriesAPI)
    .then(responce => {
        if (!responce.ok) {
            throw new Error("Bu url calismiyor...");
        }
        return responce.json();
    })
    .then(countries => {
        countries.forEach(ulke => {
            console.log("Name: ", ulke.name);
            console.log("Capital: ", ulke.capital);
            console.log(
                "Languages: ",
                ulke.languages.map(lang => lang.name).join(', '));
            console.log("Population: ", ulke.population);
            console.log("Area: ", ulke.area);
            console.log("**********************************")
        });
    })
    .catch(err => {
        console.error("Hata oluştu...", err);
    });

// Exercise: LEVEL 2

//1
fetch(catsAPI)
    .then(responce => {
        if (!responce.ok) {
            throw new Error("Bu url calismiyor...");
        }
        return responce.json();
    })
    .then(catName => {
        catName.forEach(cat => {
            console.log("Cat Name: ", cat.name)
        })
    })

// Exercise: LEVEL 3

//1
fetch(catsAPI)
    .then(response => {
        if (!response.ok) {
            throw new Error('Kediler API\'sine erişilemiyor...');
        }
        return response.json();
    })
    .then(cats => {
        const weights = cats.map(cat => cat.weight.metric.split(' - '));
        const averageWeight = weights.reduce((total, weight) => {
            const [min, max] = weight.map(w => parseFloat(w));
            return total + (min + max) / 2;
        }, 0) / cats.length;
        console.log('Ortalama Kedi Ağırlığı (metrik):', averageWeight.toFixed(2), 'kg');
    })
    .catch(error => {
        console.error('Hata oluştu:', error);
    });


//2

fetch(countriesAPI)
    .then(response => {
        if (!response.ok) {
            throw new Error('Ülkeler API\'sine erişilemiyor...');
        }
        return response.json();
    })
    .then(countries => {
        countries.sort((a, b) => b.area - a.area);
        const largestCountries = countries.slice(0, 10);
        console.log('En Büyük 10 Ülke:', largestCountries.map(country => country.name));
    })
    .catch(error => {
        console.error('Hata oluştu:', error);
    });


//3
fetch(countriesAPI)
    .then(response => {
        if (!response.ok) {
            throw new Error('Ülkeler API\'sine erişilemiyor...');
        }
        return response.json();
    })
    .then(countries => {
        const officialLanguages = countries.flatMap(country => country.languages);
        const uniqueLanguages = [...new Set(officialLanguages.map(lang => lang.name))];
        console.log('Dünya Genelindeki Toplam Resmi Dil Sayısı:', uniqueLanguages.length);
    })
    .catch(error => {
        console.error('Hata oluştu:', error);
    });