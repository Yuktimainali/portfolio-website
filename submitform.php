<?php
require_once('cors.php');
$user = 'root';
$pass = '';
$dbName = 'portfolio-website-db';

// Create a new MySQLi connection
$conn = new mysqli('localhost', $user, $pass, $dbName);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Initialize a variable to store the result of the data insertion
$inserted = false;

// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $full_name = $_POST["full-name"];
    $email = $_POST["email"];
    $subject = $_POST["text"];
    $message = $_POST["textarea"];

    // Simulate an error by not binding the parameters
    // This will intentionally cause a database error
    $sql = "INSERT INTO `contact-info` (fullname, email, subject, reason) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Do not bind parameters intentionally to generate an error
        $stmt->bind_param("ssss", $full_name, $email, $subject, $message);
        if ($stmt->execute()) {
            $inserted = true; // Data inserted successfully (this won't be reached)
        } else {
            http_response_code(400); // Set the status code to 400 Bad Request
            echo "Error: Data insertion failed";
        }
        $stmt->close();
    }
}

// Close the database connection
$conn->close();

// JavaScript code to display Toastr message based on $inserted value
echo "<script>
    document.addEventListener('DOMContentLoaded', function() {
        if ($inserted) {
            toastr.success('Data inserted successfully');
        } else {
            toastr.error('Error: Data insertion failed');
        }
    });
</script>";
?>
