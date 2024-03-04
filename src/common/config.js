
// exports.API_SERVER_HOST = "http://192.168.1.211:3000";
// exports.API_SERVER_HOST = "http://localhost:3000";

export default {
    API_SERVER_HOST: "http://localhost:3000",
    paging: {
        select: [
            {
                value: 10,
                label: '10'
            }, {
                value: 30,
                label: '30'
            }, {
                value: 50,
                label: '50'
            }, {
                value: 100,
                label: '100'
            }
        ]
    },
}
