var jwt = require("jsonwebtoken");

const generateJwt = ( data, mongoData )=> {  
  const token = jwt.sign(
    { email: data.email, username: mongoData.username, firstname: mongoData.firstname, lastname:mongoData.lastname },
    process.env.JWT_KEY, // password as agreed
    {
      expiresIn: "1d"
    }
  );
  return token;
};

const authJwt = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; 
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.body.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Please login!"
    })
  }
};

module.exports = {
  generateJwt,
  authJwt
};
