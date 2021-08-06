const settingCredentialsConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + JSON.parse(localStorage.getItem("access"))
    },
}

export default settingCredentialsConfig