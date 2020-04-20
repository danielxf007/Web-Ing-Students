const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id:{
        type: String
    },
    names: {
        type: String
    },
    last_names: {
        type: String
    },
    n_times_cancel: {
        type: Number
    },
    n_times_lost: {
        type: Number
    },
    current_grade: {
        type: Number
    },
    course_percentage: {
        type: Number
    }
  });

module.exports = mongoose.model('Student', studentSchema);