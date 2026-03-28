import { Helper } from "./helper";

const extract_params = (params) => {
    let urlParams = "";
    for (var i = 0; i < params.length; i++)
        urlParams += `&${Object.entries(params[i])[0][0]}=${Object.entries(params[i])[0][1]}`;
    return urlParams;
};

export async function login(data) {
    return Helper.Post({ url: `/admin/auth/login`, data });
}

export async function getBrands(params = []) {
    return Helper.Get(`/admin/brands?per_page=10${extract_params(params)}`);
}
