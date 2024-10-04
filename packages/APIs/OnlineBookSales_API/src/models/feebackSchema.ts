import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'Customer',
        required: true
    },
    topic: {
        type: String,
        default: 'Customer support'
    },
    feedback: {
        type: String,
        required: [true, 'Please Enter Feedback']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    assignedTo: {
        type: String,
        default: 'Customer support'
    },
    resolvedAt: {
        type: Date
    },
    recentUpdate: {
        type: Date
    },
    resolvedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'Admin'
    },
    resolvedFeedback: {
        type: String
    },
    resolvedStatus: {
        type: String,
        default: 'Pending'
    }
});

const Feedback= mongoose.model('Feedback', feedbackSchema);

export default Feedback;