export const getUpdatedParams = (p) => {
    const paramsBuilder = {};

    if (p.query) paramsBuilder.query = p.query // Define only if it's not a falsy value

    paramsBuilder.page = p.page;

    const params = new URLSearchParams(paramsBuilder);

    return params;
}