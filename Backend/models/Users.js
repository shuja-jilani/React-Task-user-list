const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema(  //uske attributes ke bare me btana + unka hona compulsory h ya nhi
    {
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        }
    }
    );

    module.exports = mongoose.model("user", userSchema);