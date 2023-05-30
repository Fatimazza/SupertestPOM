const REGISTER_USER_SCHEMA = {
    "type": "object",
    "default": {},
    "required": [
        "id",
        "token"
    ],
    "properties": {
        "id": {
            "type": "integer",
            "default": 0
        },
        "token": {
            "type": "string",
            "default": ""
        }
    }
}

module.exports = {
    REGISTER_USER_SCHEMA
}