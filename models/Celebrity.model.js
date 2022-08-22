const { Schema, model } = require('mongoose')

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const celebritySchema = new Schema(
    {
        name: {
            type: Schema.Types.String,
        },
        occupation: {
            type: Schema.Types.String,
        },
        catchPhrase: Schema.Types.String,
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
)

const Celebrity = model('Celebrity', celebritySchema)

module.exports = Celebrity
