const mongoose = require( 'mongoose' );

//contact schema 

const contactSchema = mongoose.Schema( {
     firstname: { type: String },
     lastname: { type: String },
     phone: { type: String },
     email: { type: String }
} );

module.exports = mongoose.model('contactinfo', contactSchema);