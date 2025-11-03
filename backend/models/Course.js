// // models/Course.js
// const mongoose = require('mongoose');

// const mediaSchema = new mongoose.Schema({
//   url: String,
//   public_id: String,
//   resource_type: { type: String, enum: ['video','image','raw','auto'], default: 'auto' }
// }, { _id: false });

// const CourseSchema = new mongoose.Schema({
//   title: { type: String, required: true, unique: true },
//   description: { type: String, default: '' },
//   videos: [mediaSchema],   // cloudinary video objects
//   pdfs: [mediaSchema],     // resource_type: raw
//   ppts: [mediaSchema],     // resource_type: raw (or auto)
//   thumbnail: mediaSchema,
//   drive: { type: String, default: '' },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Course', CourseSchema);



// models/Course.js
const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  url: String,
  public_id: String,
  resource_type: { 
    type: String, 
    enum: ['video','image','raw','auto'], 
    default: 'auto' 
  }
}, { _id: false });

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, trim: true },
  description: { type: String, default: '', trim: true },
  videos: [mediaSchema],
  pdfs: [mediaSchema],
  ppts: [mediaSchema],
  thumbnail: mediaSchema,
  drive: { type: String, default: '' },

  
  host: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Host', 
    required: true 
  },  // Each course has one host (instructor)

  students: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Student' 
  }], // Many students can enroll in a course

}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);










