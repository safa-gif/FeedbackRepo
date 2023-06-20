const Feedback = require('../models/Feedback');
const _ = require('lodash');


exports.getAllfeedbacks = async (req, res) => {

    try {
        const result = await Feedback.find();
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
    }


}
exports.getFeedback = (req, res) => {
    const pId = req.params.id;

    Feedback.findById(pId)
        .then(p => {
            if (!p) {
                const error = new Error('Could not find this person');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json(p)
        })
        .catch(err => {
            console.log(err);
        })


}
exports.createFeedback = (req, res, next) => {
   
    let newF = _.pick(req.body,['rating', 'text']);
    const newFeedback = new Feedback(newF);

    newFeedback.save()
        .then(result => {
            res.status(201).json({
                message: 'New Feedback has been created successfully',
                id: result['_id'].toString()
            })
        })
        .catch(err => {
            console.log(err);
            next();
        })



}
exports.updateFeedback = (req, res) => {
    const pId = req.params['id'];
    Feedback.findById(pId)
        .then(f => {
            if (!f) {
                const error = new Error('Could not find this feedback');
                error.statusCode = 404;
                throw error;
            }
           
            f = _.merge(f, req.body)

            return f.save();
        })
        .then(result => {
            res.status(200).json({
                message: 'The feedback has been successfully updated',
                result: result
            });
        })
        .catch(err => {
            console.log(err);
        })

}
exports.deleteFeedback = (req, res) => {

    const pId = req.params['id'];
    Feedback.findByIdAndRemove(pId)
        .then(f => {

            if (!f) {
                const error = new Error('Could not find this feedback');
                error.statusCode = 404;

                throw error;
            }
            res.status(200).json({
                message: 'the feedback has been successfully deleted',
                result: f
            })
        })
        .catch(err => {
            console.log(err);
        })
}
