

class Ajax {

    constructor(instanceConfig) {
        this.header = instanceConfig["header"] || {};

        this.Request = this.Request.bind(this);
    }

    /**
     * request 基本方法
     * @param {String} url 
     * @param {Object} data 
     * @param {Object} header 
     * @param {String} method 
     * @returns promise
     */
    Request(url, data, header = {}, method = "GET") {

        if (!url || typeof (url) !== "string") {
            throw Error("url empty")
        }

        return new Promise((resovle, reject) => {
            wx.request({
                url,
                data,
                method,
                header,
                success(res) {
                    resovle(res)
                },
                fail(errorRes) {
                    reject(errorRes)
                },
                complete() {

                }
            })
        })
    }

    /**
     * request GET方法
     * @param {String} url 
     * @param {Object} data 
     * @param {Object} header 
     * @returns promise
     */
    GET(url, data = {}, header = {}) {
        return this.Request(url, data, header, "GET");
    }

    /**
     * request POST方法
     * @param {String} url 
     * @param {Object} data 
     * @param {Object} header 
     * @returns promise
     */
    POST(url, data = {}, header = {}) {
        return this.Request(url, data, header, "POST");
    }
}



module.exports = Ajax;