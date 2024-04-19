const NFTs = [];

// Function to mint NFTs
function mintNFT(_name, _shirtType, _pantsType, _shoeType, _accessories) {
    const NFT = {
        "name": _name,
        "shirtType": _shirtType,
        "pantsType": _pantsType,
        "shoeType": _shoeType,
        "accessories": _accessories
    };

    NFTs.push(NFT);
    console.log("Minted: " + _name);
    console.log("---------------------------")
}

// Function to list NFTs
function listNFTs() {
    console.log(">> List of NFTs <<");
    for (let i = 0; i < NFTs.length; i++) {
        const NFT = NFTs[i]; 
        // Fetching each NFT object
        console.log("Name: " + NFT.name);
        console.log("Shirt: " + NFT.shirtType);
        console.log("Pants: " + NFT.pantsType);
        console.log("Shoes: " + NFT.shoeType);
        console.log("Accessories: " + NFT.accessories);
        console.log("---------------------------");
    };
}

// Function to get total supply of NFTs
function getTotalSupply() {
    console.log("Total Supply: " + NFTs.length);
}

// Minting at least three NFTs

// call your functions below this line
mintNFT("NFT 1", "Polo", "Jeans", "Sandals", "Sunglasses");
mintNFT("NFT 2", "T-Shirt", "Trousers", "Loafers", "Silver Watch");
mintNFT("NFT 3", "Hoodie", "Joggers", "Sneakers", "Headphones");

// Listing NFTs and getting total supply
listNFTs();
getTotalSupply();