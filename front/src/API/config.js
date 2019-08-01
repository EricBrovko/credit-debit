const API_CONFIG = {
    dev: {
        protocol: "HTTP",
        host: "localhost",
        port: 3000
    }
};

const getApiUrl = (env) => {
    const { protocol, host, port } = API_CONFIG[env] || API_CONFIG.dev;
    const url = `${protocol}://${host}:${port}`;

    return url;
}

export default {
    API_CONFIG,
    getApiUrl
};
