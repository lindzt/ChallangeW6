exports.success = function(res, status = 200, message = "", data = {}) {
    res.status(status).json({
        message,
        data
    });
}

exports.error = function(res, status = 400, message = "", data = {}) {
    res.status(status).json({
        error: {
            message,
            data
        }
    });
}