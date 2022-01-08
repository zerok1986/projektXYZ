const { Schema, model } = require('mongoose')
const ObjectId = Schema.Types.ObjectId

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '...',
    },
    type: {
      type: String,
      enum: [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
      ],
      required: true,
    },
    project: {
      type: ObjectId,
      ref: 'Project',
      required: true,
    },
    assignedTo: {
      type: ObjectId,
      ref: 'User',
    },
    priority: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    labels: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
)

const Task = model('Task', taskSchema)
module.exports = Task
