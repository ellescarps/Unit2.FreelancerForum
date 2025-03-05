const names = ["Bennie", "Hind", "Nerdeen"]
const occupations = ["Doctor", "Scientist", "Actor"]
const prices = [25, 40, 60]
const maxList = 10;
const freelancers = [
    {
        name: "Dr. Jekyll",
        occupation: "Doctor",
        price: 35,
    },
    {
        name: "Mr. Hyde",
        occupation: "Actor",
        price: 50,
    }
];

function addPerson() {
    const name = names[Math.floor(Math.random() * names.length)]
    if (freelancers.length >= maxList) {
        clearInterval(addPersonIntervalId);
    }

    const occupation = occupations[Math.floor(Math.random() * occupations.length)]

    const price = prices[Math.floor(Math.random() * prices.length)]
    freelancers.push({name, occupation, price});
}

function calculateAveragePrice() {
    const totalPrice = freelancers.reduce((sum,freelancer) => sum + freelancer.price, 0);
    const averagePrice = totalPrice / freelancers.length;
    return averagePrice;
}


function render() {
    const pplList = document.querySelector(".ppl tbody");
    const avgPriceElement = document.querySelector("#average");

    pplList.innerHTML = "";


    freelancers.forEach((freelancer)=> {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${freelancer.name}</td>
        <td>${freelancer.occupation}</td>
        <td>${freelancer.price}</td>
    `;

    pplList.appendChild(row);
    });
    

    const avgPrice = calculateAveragePrice();
    avgPriceElement.textContent = `Average Starting Price: $${avgPrice.toFixed(2)}`;

    
}

const addPersonIntervalId = setInterval(() => {
    addPerson();
    render();
}, 2000);

render();




