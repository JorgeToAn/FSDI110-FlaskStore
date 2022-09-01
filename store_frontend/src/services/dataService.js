import axios from "axios";

const CATALOG = [
    {
        _id: "0",
        title: "Wingspan",
        price: 59.99,
        image: "wingspan.jpg",
        category: "Card Game"
    },
    {
        _id: "1",
        title: "Lego Haunted House Set",
        price: 300,
        image: "lego_hauntedhouse.jpg",
        category: "Toys"
    },
    {
        _id: "2",
        title: "Azul",
        price: 32,
        image: "azul_boardgame.jpg",
        category: "Board Game"
    },
    {
        _id: "3",
        title: "Stardew Valley: The Board Game",
        price: 88,
        image: "stardew_boardgame.jpg",
        category: "Board Game"
    },
    {
        _id: "4",
        title: "Uno Family Card Game",
        price: 10.89,
        image: "uno.jpg",
        category: "Card Game"
    },
    {
        _id: "5",
        title: "Yahtzee",
        price: 8.02,
        image: "yahtzee.jpg",
        category: "Party Game"
    },
    {
        _id: "6",
        title: "Lego Star Wars BD-1",
        price: 100,
        image: "lego_starwars_bd1.jpg",
        category: "Toys"
    },
    {
        _id: "7",
        title: "Terraforming Mars",
        price: 34.89,
        image: "terraforming_mars.webp",
        category: "Board Game"
    },
    {
        _id: "8",
        title: "Betrayal at House on the Hill",
        price: 23.79,
        image: "Betrayal_at_House_on_the_Hill.jpg",
        category: "Board Game"
    },
    {
        _id: "9",
        title: "Lego Atari 2600",
        price: 239.99,
        image: "lego_atari.png",
        category: "Toys"
    },
    {
        _id: "10",
        title: "Catan",
        price: 59.99,
        image: "catan.webp",
        category: "Board Game"
    },
    {
        _id: "11",
        title: "Codenames",
        price: 9.59,
        image: "codenames.webp",
        category: "Party Game"
    }
];

class DataService{
    async getCatalog() {
        //call the server
        //retrieve the list of products and return it
        let result = await axios.get("http://127.0.0.1:5000/api/catalog");
        return result.data;

        //return CATALOG;
    }

    async saveProduct(product) {
        let result = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return result.data;
    }
}

export default DataService;