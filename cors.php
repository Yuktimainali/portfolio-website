<?php
// Allow requests from any origin for development purposes
header("Access-Control-Allow-Origin: *");

// Allow the following HTTP methods
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Allow the following headers
header("Access-Control-Allow-Headers: Content-Type");

// Allow cookies to be included with the requests
header("Access-Control-Allow-Credentials: true");
?>