const APOD_SCHEMA = {
    "type": "array",
    "default": [],
    "title": "Root Schema",
    "items": {
        "type": "object",
        "title": "A Schema",
        "required": [
            // several objects don't have copyright field
            // "copyright",
            "date",
            "explanation",
            "hdurl",
            "media_type",
            "service_version",
            "title",
            "url"
        ],
        "properties": {
            // "copyright": {
            //     "type": "string",
            //     "title": "The copyright Schema"
            // },
            "date": {
                "type": "string",
                "title": "The date Schema"
            },
            "explanation": {
                "type": "string",
                "title": "The explanation Schema"
            },
            "hdurl": {
                "type": "string",
                "title": "The hdurl Schema"
            },
            "media_type": {
                "type": "string",
                "title": "The media_type Schema"
            },
            "service_version": {
                "type": "string",
                "title": "The service_version Schema"
            },
            "title": {
                "type": "string",
                "title": "The title Schema"
            },
            "url": {
                "type": "string",
                "title": "The url Schema"
            }
        }
    }
}

module.exports = {
    APOD_SCHEMA
}