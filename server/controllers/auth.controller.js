const signup = (req, res) => {
  //take name, email and password from the request
  //Split name, email and password
  const { name, email, password } = req.body;
  res.json({
    //resolve as user that will contain these values
    user: { name, email, password },
  });
};

export default { signup };
