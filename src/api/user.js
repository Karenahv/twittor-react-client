import {API_HOST} from "../utils/constant";
import {getTokenApi} from "./auth";

export function getUserApi(id) {
    const url = `${API_HOST}/verperfil?id=${id}`;
    const params = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getTokenApi()}`
        }

    }
    return fetch(url, params).then(response => {
        if (response.status >= 400) throw null;
        return response.json()
    })
        .then(result => {
            return result
        })
        .catch(err => {
            return err
        })
}

export function uploadUserBanner(file) {
    const url = `${API_HOST}/subirBanner`;
    const formData = new FormData()
    formData.append('banner', file)
    const params = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${getTokenApi()}`
        },
        body: formData

    }
    return fetch(url, params).then(response => {
        if (response.status >= 400) throw null;
        return response.json()
    })
        .then(result => {
            return result
        })
        .catch(err => {
            return err
        })
}

export function uploadUserAvatar(file) {
    const url = `${API_HOST}/subirAvatar`;
    const formData = new FormData()
    formData.append('avatar', file)
    const params = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${getTokenApi()}`
        },
        body: formData

    }
    return fetch(url, params).then(response => {
        if (response.status >= 400) throw null;
        return response.json()
    })
        .then(result => {
            return result
        })
        .catch(err => {
            return err
        })
}

export function modificarPerfil(data) {
    const url = `${API_HOST}/modificarPerfil`;
    const params = {
        method:'PUT',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getTokenApi()}`
        },
        body: JSON.stringify(data)

    }
    return fetch(url, params).then(response => {
        if (response.status >= 400) throw null;
        return response.json()
    })
        .then(result => {
            return result
        })
        .catch(err => {
            return err
        })
}
