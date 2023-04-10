const swaggerOptions = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Day two - Swagger",
    license: {
      name: "MIT",
    },
  },
  basePath: "/api/docs",
  paths: {
    "/entries": {
      get: {
        description: "Returns all journal entries the user has created",
        operationId: "findEntries",
        produces: ["application/json"],
        responses: {
          200: {
            description: "Entry response",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/Entry",
              },
              example: [
                {
                    id: 1,
                    content: "I went on a walk today.",
                    createdAt: "2023-04-09T19:44:20.790Z",
                    updatedAt: "2023-04-09T19:40:39.790Z",
                },
                {
                    id: 2,
                    content: "I got an excellent mark today!",
                    createdAt: "2023-04-01T14:41:20.790Z",
                    updatedAt: "2023-03-23T10:24:00.790Z",
                }
              ]
            },
          },
          400: {
            description: "Not found error",
            schema: {
              type: "object",
              properties: {
                code: {
                    type: "integer"
                },
                message: {
                    type: "string"
                }
              },
              example: {
                code: 400,
                message: "Cannot get entries"
              },
            },
          },
        },
        tags: ['Entries']
      },
      post: {
        description: "Creates a new journal entry, which is initially empty.",
        operationId: "addEntry",
        produces: ["application/json"],
        responses: {
          201: {
              description: "Entry response",
              schema: {
                type: "object",
                example: {
                    "id": 1,
                    "content": "I went on a walk today.",
                    "createdAt": "2023-04-09T19:44:20.790Z",
                    "updatedAt": "2023-04-09T19:44:20.790Z",
                },
                $ref: "#/definitions/Entry",
            },
          },
          400: {
            description: "Not found error",
            schema: {
                type: "object",
                properties: {
                  code: {
                      type: "integer"
                  },
                  message: {
                      type: "string"
                  }
                },
                example: {
                  code: 400,
                  message: "Cannot create entry"
                },
              },
          },
        },
        tags: ['Entries']
      },
    },
    "/entries/{id}": {
      get: {
        description: "Returns an entry based on a single ID",
        operationId: "findEntryById",
        produces: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of entry to fetch",
            required: true,
            type: "integer",
            format: "int64",
          },
        ],
        responses: {
          200: {
            description: "Entry response",
            schema: {
              $ref: "#/definitions/Entry",
              example: {
                "id": 1,
                "content": "I went on a walk today.",
                "createdAt": "2023-04-09T19:44:20.790Z"
              }
            },
          },
          400: {
            description: "Not found error",
            schema: {
                type: "object",
                properties: {
                  code: {
                      type: "integer"
                  },
                  message: {
                      type: "string"
                  }
                },
                example: {
                  code: 400,
                  message: "Cannot get entry"
                },
              },
          },
        },
        tags: ['Entries']
      },
      patch: {
        description: "Updates the content of the entry based on a single ID",
        operationId: "updateEntryById",
        produces: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of entry to update",
            required: true,
            type: "integer",
            format: "int64",
          },
        ],
        responses: {
          201: {
            description: "Entry response",
            schema: {
              $ref: "#/definitions/Entry",
              example: {
                "id": 1,
                "content": "I went on a walk today.",
                "createdAt": "2023-04-09T19:44:20.790Z"
              }
            },
          },
          400: {
            description: "Not found error",
            schema: {
                type: "object",
                properties: {
                  code: {
                      type: "integer"
                  },
                  message: {
                      type: "string"
                  }
                },
                example: {
                  code: 400,
                  message: "Cannot update entry"
                },
              },
          },
        },
        tags: ['Entries']
      },
      delete: {
        description: "Deletes a single entry based on the ID supplied",
        operationId: "deleteEntry",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of entry to delete",
            required: true,
            type: "integer",
            format: "int64",
          },
        ],
        responses: {
          201: {
            description: "Entry deleted",
          },
          400: {
            description: "Not found error",
            schema: {
                type: "object",
                properties: {
                  code: {
                      type: "integer"
                  },
                  message: {
                      type: "string"
                  }
                },
                example: {
                  code: 400,
                  message: "Cannot delete entry"
                },
              },
          },
        },
        tags: ['Entries']
      },
    },
    "/images/{entryId}": {
      get: {
        description:
          "Returns all of the images, attached to the entry with the selected ID",
        operationId: "findImagesByEntryId",
        produces: ["application/json"],
        parameters: [
          {
            name: "entryId",
            in: "path",
            description: "ID of entry the images should be attached to",
            required: true,
            type: "integer",
            format: "int64",
          },
        ],
        responses: {
          200: {
            description: "Image response",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/Image",
              },
              example: [
                {
                    id: 1,
                    path: "/images/1680870854369.png",
                    entryId: 3,
                    createdAt: "2023-04-06 15:34:14.378+03",
                    updatedAt: "2023-04-07 15:34:14.378+03"
                },
                {
                    id: 2,
                    path: "/images/1684771054362.png",
                    entryId: 3,
                    createdAt: "2023-03-20 15:34:14.378+03",
                    updatedAt: "2023-03-22 15:34:14.378+03"
                },
              ],
            },
          },
          400: {
            description: "Not found error",
            schema: {
                type: "object",
                properties: {
                  code: {
                      type: "integer"
                  },
                  message: {
                      type: "string"
                  }
                },
                example: {
                  code: 400,
                  message: "Cannot get images"
                },
              },
          },
        },
        tags: ['Images']
      },
      post: {
        description:
          "Creates new images, attached to the entry with the selected ID",
        operationId: "addImages",
        produces: ["application/json"],
        parameters: [
            {
              name: "entryId",
              in: "path",
              description: "ID of entry the image should be attached to",
              required: true,
              type: "integer",
              format: "int64",
            },
          ],
        responses: {
          200: {
            description: "Image response",
            schema: {
              type: "array",
              items: {
                id: {
                    type: "integer",
                    format: "int32"
                },
                filename: {
                    type: "string"
                },
                fieldname: {
                    type: "string"
                },
                destination: {
                    type: "string"
                },
                encoding: {
                    type: "string"
                },
                mimetype: {
                    type: "string"
                },
                originalname: {
                    type: "string"
                },
                path: {
                    type: "string"
                },
                size: {
                    type: "integer",
                    format: "int64"
                },
              },
              example: [
                {
                    id: 1,
                    filename: "1680870854369.png",
                    fieldname: "entry-img",
                    destination: "/Users/Alex/images/1680870854369.png",
                    encoding: "7bit",
                    mimetype: "image/png",
                    originalname: "my-image",
                    path: "/images/1680870854369.png",
                    size: 453235
                },
                {
                    id: 2,
                    filename: "1684771054362.png",
                    fieldname: "entry-img",
                    destination: "/Users/Alex/images/1684771054362.png",
                    encoding: "7bit",
                    mimetype: "image/png",
                    originalname: "my-image",
                    path: "/images/1684771054362.png",
                    size: 457190
                },
              ],
            },
          },
          400: {
            description: "Not found error",
            schema: {
                type: "object",
                properties: {
                  code: {
                      type: "integer"
                  },
                  message: {
                      type: "string"
                  }
                },
                example: {
                  code: 400,
                  message: "Cannot add images"
                }
              },
          },
        },
        tags: ['Images']
      },
    },
    "/images/{id}": {
      delete: {
        description: "Deletes an image",
        operationId: "deleteImage",
        produces: ["application/json"],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of the image to be deleted",
            required: true,
            type: "integer",
            format: "int64",
          },
        ],
        responses: {
          201: {
            description: "Image deleted",
          },
          400: {
            description: "Not found error",
            schema: {
                type: "object",
                properties: {
                  code: {
                      type: "integer"
                  },
                  message: {
                      type: "string"
                  }
                },
                example: {
                  code: 400,
                  message: "Cannot delete image"
                },
              },
          },
        },
        tags: ['Images']
      },
    },
  },
  definitions: {
    Entry: {
      type: "object",
      required: ["id", "content", "createdAt", "updatedAt"],
      properties: {
        id: {
          type: "integer",
          format: "int64",
        },
        content: {
            type: "string"
        },
        createdAt: {
          type: "string",
          format: "date-time",
        },
        updatedAt: {
          type: "string",
          format: "date-time",
        },
      },
      example: {
        "id": 1,
        "content": "I went on a walk today.",
        "createdAt": "2023-04-09T19:44:20.790Z",
        "updatedAt": "2023-04-09T19:44:20.790Z",
      }
    },
    Image: {
      type: "object",
      required: ["id", "path", "entryId", "createdAt", "updatedAt"],
      properties: {
        id: {
          type: "integer",
          format: "int64",
        },
        path: {
          type: "string",
        },
        entryId: {
          type: "integer",
          format: "int64",
        },
        createdAt: {
          type: "string",
          format: "date-time",
        },
        updatedAt: {
          type: "string",
          format: "date-time",
        },
      },
    },
  },
};
module.exports = { swaggerOptions };
