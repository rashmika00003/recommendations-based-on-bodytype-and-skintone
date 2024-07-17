const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/body-shape-recommendations', { useNewUrlParser: true, useUnifiedTopology: true });

// Definition of  the product schema and model
const productSchema = new mongoose.Schema({
  productId: String,
  productName: String,
  productImage: String,
  productColor: String,
  suitableForBodyShape: [{ type: String }],
  suitableForSkinTone: [{ type: String }],
  productPrice: Number,
  productBrand: String,
});

const Product = mongoose.model('Product', productSchema);

app.use(express.json());
app.use(cors());


// Prediction function
function predictBodyShape(height, bustSize, waistSize, hipsSize) {
  const bustToWaistRatio = bustSize / waistSize;
  const waistToHipRatio = waistSize / hipsSize;
  const bustToHipRatio = bustSize / hipsSize;

  if (bustToWaistRatio > 1.25 && waistToHipRatio < 0.8) {
    return 'Hourglass';
  } else if (bustToWaistRatio > 1.25 && hipsSize > bustSize) {
    return 'Top Hourglass';
  } else if (waistToHipRatio < 0.8 && hipsSize > bustSize) {
    return 'Pear';
  } else if (bustToWaistRatio <= 1.25 && bustToHipRatio <= 1.25 && waistToHipRatio >= 0.8 && waistToHipRatio <= 1.0) {
    return 'Rectangle';
  } else if (bustSize > hipsSize && bustSize > waistSize) {
    return 'Apple';
  } else if (bustSize > hipsSize && bustSize < waistSize) {
    return 'Inverted Triangle';
  } else if (waistSize > bustSize && waistSize > hipsSize) {
    return 'Diamond';
  } else if (waistSize > bustSize && hipsSize > bustSize && waistSize > hipsSize) {
    return 'Oval';
  } else {
    return 'Undefined';
  }
}

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Route to get  personal fit recommendations
app.post('/recommendations', async (req, res) => {
  const { height, bustSize, waistSize, hipsSize, skinTone } = req.body;
  const bodyShape = predictBodyShape(height, bustSize, waistSize, hipsSize);
  try {
    const products = await Product.find({
      suitableForBodyShape: { $in: [bodyShape] },
      suitableForSkinTone: { $in: [skinTone] },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


