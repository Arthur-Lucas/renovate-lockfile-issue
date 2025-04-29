module.exports = {
    "platform": "gitlab",
    "endpoint": "https://my.company.com/api/v4/",
    "repositories": [
        "root/to/my/project"
    ],
    "extends": [
        "local>root/to/my/project//presets/npm/renovate",
    ]
};
