let axios = require("axios");
const CryptoModel = require('../models/cryptoModel')



let getCrypto = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://api.coincap.io/v2/assets",
      headers: {
        Authorization:"Bearer 8f09fb25-7f82-4035-b0d4-1ce552d5e874",
      }
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data.data;
       
     const sortVal = data.sort((a, b)=> {return a.changePercent24Hr - b.changePercent24Hr})
    await CryptoModel.deleteMany()
  const saveData = await CryptoModel.insertMany(sortVal)
  console.log(saveData);

    res.status(200).send({ msg:sortVal, status: true });
  } 
  catch (err) {
    res.status(500).send({ msg: err.message });
  }
};
module.exports.getCrypto = getCrypto