const Item = '../models/item'
const User = '../models/user'
const Category = '../models/category'

const logError = (err) => {console.log(err)}

Item.remove({}, logError);
User.remove({}, logError);
Category.remove({}, logError);

const categories = [
{name: "Art"},
{name: "Baby"},
{name: "Books"},
{name: "Business & Industrial"},
{name: "Cameras & Photo"},
{name: "Cell Phones & Accessories"},
{name: "Clothing, Shoes & Accessories"},
{name: "Coins & Paper Money"},
{name: "Collectibles"},
{name: "Computers/Tablets & Networking"},
{name: "Consumer Electronics"},
{name: "Crafts"},
{name: "Dolls & Bears"},
{name: "DVDs & Movies"},
{name: "eBay Motors"},
{name: "Entertainment Memorabilia"},
{name: "Gift Cards & Coupons"},
{name: "Health & Beauty"},
{name: "Home & Garden"},
{name: "Jewelry & Watches"},
{name: "Music"},
{name: "Musical Instruments & Gear"},
{name: "Pet Supplies"},
{name: "Pottery & Glass"},
{name: "Real Estate"},
{name: "Specialty Services"},
{name: "Sporting Goods"},
{name: "Sports Mem, Cards & Fan Shop"},
{name: "Stamps"},
{name: "Tickets"},
{name: "Toys & Hobbies"},
{name: "Travel"},
{name: "Video Games"},
{name: "Everything Else"},
]

categories.each((category)=> {
  const newCategory = Category.new(category)
  newCategory.save(logError)
})
