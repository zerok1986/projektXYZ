const { Schema, model } = require('mongoose')
const ObjectId = Schema.Types.ObjectId

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      default: 'Project Description',
    },
    owner: {
      type: { type: ObjectId, ref: 'User' },
      required: true,
    },
    deadline: {
      type: Date,
    },
    tasks: {
      type: [{ type: ObjectId, ref: 'Task' }],
      default: [],
    },
  },
  { timestamps: true }
)

const Project = model('Project', projectSchema)
module.exports = Project
