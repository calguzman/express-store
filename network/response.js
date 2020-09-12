exports.success = function (req,res,message,status) {
    res.status(status || 200).send({
    error:null,
    body:message
  });
} 
exports.error = function (req,res,message,status,error) {
    res.status(status || 500).send({
    error:error,
    body:message
  });
}