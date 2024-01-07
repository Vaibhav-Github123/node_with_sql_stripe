const Product = require('../model/product')
const Cart = require('../model/cart')

exports.AllProducts = async (req, res) => { 
    try {
        var product = await Product.findAll()
        res.render('product', {
            products: product
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message,
          });
    }
} 

exports.AddProduct = async (req, res) => { 
try {
    const { book_name, auther_name, price, description } = req.body
    const product = new Product({
        book_name: book_name,
        auther_name: auther_name,
        price: price,
        description: description
    })
    await product.save()
    res.send(product)
} catch (error) {
    return res.status(500).json({
        message: error.message,
      });
}
}

exports.AddToCart = async (req, res) => { 
    try {
        const {BookName, AutherName, Description, Price, Quantity} = req.body
        const carts = new Cart({
            book_name: BookName,
            auther_name: AutherName,
            price: Price,
            description: Description,
            quantity: Quantity,
        });

        
        await carts.save()
        res.send({
            status: true,
            data: carts,
            message: "Product has been successfully added to the cart.",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
          });
    }
}

exports.AllCartProducts = async (req, res) => { 
    try {
        const product = await Cart.findAll()
        res.render('ShoppingCart', {
            carts: product
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
          });
    }
}

// var getAll = async (req, res) => { 
//     var data = await Book.findAll({})
//     res.status(200).json({ data: data })
// }

// var addBook = async (req, res) => {
//     var data = await Book.create({
//         bookName: req.body.bookName,
//         autherName: req.body.autherName,
//         price: req.body.price,
//         description:req.body.description
//     })
//     // await data.save();
//     console.log(data);
//     res.status(200).json({ data: data })


//     // const jane = book.create({
//     //     bookName: "The Adventures of Sherlock Holmes",
//     //     autherName: "Arthur Conan Doyle",
//     //     price: "250",
//     //     description: "All of the stories within The Adventures of"
//     // });
//     // console.log(jane instanceof Book); // true
//     // await jane.save();
//     // console.log('Jane was saved to the database!');
//     // res.status(200).send(jane.toJSON());
// }
