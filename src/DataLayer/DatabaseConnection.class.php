<?php
require_once 'dbconfig.php';

/**
 * Class: DatabaseConnection
 * Date: 4/6/2018
 * Description:
 */
class DatabaseConnection {

    /**
     * @var
     */
    private static $_instance;

    /**
     * @var PDO
     */
    private $_connection; //The single instance


    /**
     * DatabaseConnection constructor.
     */
    private function __construct() {
        global $host;
        global $port;
        global $dbname;
        global $username;
        global $password;

        try {
            $dsn = "pgsql:host=$host;port=$port;dbname=$dbname;user=$username;password=$password";
            $this -> _connection = new PDO($dsn);

//      if ($this -> _connection) {
//        echo "Connected to the database successfully!";
//      }

        } catch (PDOException $e) {
            #Open log file and add error message
            /*
          echo $e -> getMessage() . "\n";
          $logFile = 'phpErrors.txt';
          $currentLogFile = file_get_contents($logFile);
          $currentLogFile .= "\n" . date('l jS \of F Y h:i:s A') . $e -> getMessage();
          file_put_contents($logFile, $currentLogFile);
            */
            echo "Credentials: " . $host . $port . $dbname . $username . $password;
            echo '<br>';
            echo $e;
            exit();
        }
    }

    /**
     * Retrieves and instance of the Database. If an instance is already
     * made it returns the same instance. If there is no previous instance
     * then a new instance is created.
     * @return DatabaseConnection
     */
    public static function getInstance() {
        if (!self ::$_instance) { // If no instance then make one
            self ::$_instance = new self();
        }
        return self ::$_instance;
    }

    /**
     * @param $objName - Name of Object / Database Table
     * @param string $sqlString - Complete sql select statement
     * @return array - An associative array of objects pulled from the database
     */
    function returnObject($objName, $sqlString = "") {
        try {
            $results = array();
            if ($sqlString == "") {
                $sqlString = "SELECT * FROM " . $objName;
            }
            $stmnt = $this -> getConnection() -> prepare($sqlString);
            $stmnt -> execute();
            $stmnt -> setFetchMode(PDO::FETCH_CLASS, $objName);
            while ($result = $stmnt -> fetch()) { // or just fetchALl();
                $results[] = $result;
            }
            return $results;
        } catch (PDOException $e) {
            echo $e -> getMessage();
            die();
        }
    }


    // Magic method clone is empty to prevent duplication of connection

    /**
     * Retrieves an instance of the Database connection, not the instance.
     * @return PDO
     */
    function getConnection() {
        //$dbh = null;
        return $this -> _connection;
    }

    /**
     *
     */
    private function __clone() {
    }
}
