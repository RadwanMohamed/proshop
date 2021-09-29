const cros = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    //res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    //res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept,X-CSRF-Token, X-Requested-With, Content-Type,Authorization, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
  };
  export default cros;