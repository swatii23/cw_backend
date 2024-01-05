const express = require("express")
require("dotenv").config()
const cors = require("cors")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler")

module.exports = {
    express,
    cors,
    mongoose,
    jwt,
    bcrypt,
    asyncHandler
}