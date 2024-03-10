const express = require('express');
const { Mongoose } = require('mongoose');

const userSchema = new Mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
        },
        email: {
            type: email,
            required: true,
            unique: true
        },
        gender: {
            type: String
        }
    }
)

const User = Mongoose.model("user", userSchema)