const Schema = mongoose.Schema;
const userSchema = new Schema({
  FirstName:  { type : String, required : true,unique : true,lowercase : true},
  LastName: { type : String, required : true,unique : true,lowercase : true},
  email:{ type : String, required : true,unique : true,lowercase : true},
  Gender:   { type : String, required : true,unique : true,lowercase : true},
  password:{ type : String, required : true},
});


module.exports= mongoose.model('User', userSchema);
